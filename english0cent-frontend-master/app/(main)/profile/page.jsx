"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import config from "@/config";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${config.server}/user/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (data.status === "SUCCESS") {
          setUser(data.user);
          setEditedUser({
            ...data.user,
            dateOfBirth: new Date(data.user.dateOfBirth).toISOString().split("T")[0],
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  

  if (!user) {
    return null;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    const date = new Date(editedUser.dateOfBirth);
  
    if (name === "dateOfBirth-day") {
      date.setDate(Number(value));
    } else if (name === "dateOfBirth-month") {
      date.setMonth(Number(value) - 1);
    } else if (name === "dateOfBirth-year") {
      date.setFullYear(Number(value));
    }
  
    setEditedUser((prevUser) => ({
      ...prevUser,
      dateOfBirth: date.toISOString().split("T")[0],
    }));
  };
  

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedUser({
      ...user,
      dateOfBirth: new Date(user.dateOfBirth).toISOString().split("T")[0],
    });
  };

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", "a1c12f09d6b9a7fc67b4d402bf7dc011"); // Replace with your ImgBB API key

    try {
      const response = await axios.post("https://api.imgbb.com/1/upload", formData);
      if (response.data.success) {
        setAvatarImage(response.data.data.url);
        setEditedUser({
          ...editedUser,
          avatar: response.data.data.url,
        });
      } else {
        console.error("Image upload failed:", response.data.error.message);
      }
    } catch (error) {
      console.error("Image upload error:", error);
    }
    try {
      const response = await fetch(`${config.server}/user/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(editedUser),
      });
      const data = await response.json();
      if (data.status === "SUCCESS") {
        setUser(data.user);
        setEditing(false);
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
    console.log("Avatar image:", avatarImage);
  };

  const handleConfirmEdit = async () => {
    try {
      const response = await fetch(`${config.server}/user/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(editedUser),
      });
      const data = await response.json();
      if (data.status === "SUCCESS") {
        setUser(data.user);
        setEditing(false);
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/?reloaded=true";
    }, 100);
  };
  
  return (
    <div className={`w-full h-full p-8 flex bg-white rounded-3xl space-x-4`}>
      <div className="w-1/4 border border-gray-300 rounded-3xl flex-col space-y-4">
        <div className="w-full h-auto flex-center p-8 rounded-full">
          <Avatar className="w-48 h-48 relative group">
            {user.avatar ? (
              <div>
                <AvatarImage src={user.avatar} />
              </div>
            ) : (
              <AvatarFallback>{user.fullName[0]}</AvatarFallback>
            )}
            <label
              htmlFor="avatar-upload"
              className="absolute w-full h-full flex-center bg-black opacity-0 group-hover:opacity-50 text-white cursor-pointer"
            >
              Change Avatar
            </label>
            <input
              type="file"
              accept="image/*"
              id="avatar-upload"
              className="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer"
              onChange={handleImageUpload}
              style={{
                display: "none",
              }}
            />
          </Avatar>
        </div>
        <div className="flex-col space-y-4">
          <div className="flex-center text-2xl font-bold">
            <div>{user.fullName}</div>
          </div>
          <div className="flex-center space-x-4">
            <div className="w-auto border border-gray-300 rounded-3xl p-4">
              {user.level}
            </div>
            <div className="w-auto bg-gray-100 rounded-3xl p-4">
              Top {user.rank}
            </div>
          </div>
          <div className="flex-center pt-20 space-x-4">
            <Link href={`/auth/change-password`}><Button variant="outline">Change Password</Button></Link>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex-col">
        {editing ? (
          <div className="border border-gray-300 rounded-3xl grid grid-cols-2 gap-4 p-8">
            <div className="flex-col space-y-4">
              <div className="font-bold">Full Name</div>
              <Input
                name="fullName"
                value={editedUser.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Date of Birth</div>
              <div className="flex-col space-y-2">
              <div className="flex space-x-4">
                <select
                  className="w-16 p-2 border border-gray-300 rounded-lg hide-scrollbar overflow-hidden"
                  name="dateOfBirth-month"
                  value={new Date(editedUser.dateOfBirth).getMonth() + 1}
                  onChange={handleDateChange}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="w-16 p-2 border border-gray-300 rounded-lg hide-scrollbar overflow-hidden"
                  name="dateOfBirth-day"
                  value={new Date(editedUser.dateOfBirth).getDate()}
                  onChange={handleDateChange}
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <select
                  className="w-24 p-2 border border-gray-300 rounded-lg hide-scrollbar overflow-hidden"
                  name="dateOfBirth-year"
                  value={new Date(editedUser.dateOfBirth).getFullYear()}
                  onChange={handleDateChange}
                >
                  {Array.from({ length: 100 }, (_, i) => 2023 - i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              </div>
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Email</div>
              <Input
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Phone Number</div>
              <Input
                name="phoneNumber"
                value={editedUser.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Target</div>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg hide-scrollbar overflow-hidden"
                name="target"
                value={editedUser.target}
                onChange={handleInputChange}
              >
                <option value="TOEIC 990">TOEIC 990</option>
                <option value="IELTS 8.0">IELTS 8.0</option>
                <option value="Fluent Speaking">Fluent Speaking</option>
              </select>
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">How many hours per day for English</div>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg hide-scrollbar overflow-hidden"
                name="timeSpending"
                value={editedUser.timeSpending}
                onChange={handleInputChange}
              >
                {Array.from({ length: 6 }, (_, i) => i + 1).map((time) => (
                  <option key={time} value={time}>
                    {time} {time === 1 ? 'hour' : 'hours'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="border border-gray-300 rounded-3xl grid grid-cols-2 gap-4 p-8">
            <div className="flex-col space-y-4">
              <div className="font-bold">Full Name</div>
              <Input value={user.fullName} readOnly />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Date of Birth</div>
              <Input
                value={new Date(user.dateOfBirth).toLocaleDateString()}
                readOnly
              />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Email</div>
              <Input value={user.email} readOnly />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Phone Number</div>
              <Input value={user.phoneNumber} readOnly />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">Target</div>
              <Input value={user.target} readOnly />
            </div>
            <div className="flex-col space-y-4">
              <div className="font-bold">How many hours per day for English</div>
              <Input
                value={`${user.timeSpending} ${user.timeSpending === 1 ? 'hour' : 'hours'}`}
                readOnly
              />
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex-col col-span-2 space-y-4">
            <div className="font-bold">Introduction</div>
            <Textarea
              name="introduction"
              value={editedUser.introduction}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {editing ? (
          <div className="flex-center space-x-4">
            <Button variant="outline" onClick={handleCancelEdit}>Cancel</Button>
            <Button onClick={handleConfirmEdit}>Confirm</Button>
          </div>
        ) : (
          <div className="flex-center space-x-4">
            <Button onClick={handleEditProfile}>Edit Profile</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;



