"use client";

import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import fetchCourses from "@/helpers/fetchCourses";

export default function Courses() {
  const [initialCourses, setInitialCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [targets, setTargets] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [level, setLevel] = useState("All Levels");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [combo, setCombo] = useState("All Courses");
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [targetCount, setTargetCounts] = useState({});
  const [filteredCourses, setFilteredCourses] = useState([]); // Declare filteredCourses here

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const coursesData = await fetchCourses();
        const initialCourses = coursesData.data;
        setInitialCourses(initialCourses);
        setCourses(initialCourses);
        setTargets([...new Set(initialCourses.map(doc => doc.attributes.Target))]);
        setLoading(false);

        const targetCount = initialCourses.reduce((acc, doc) => {
          const target = doc.attributes.Target;
          acc[target] = acc[target] ? acc[target] + 1 : 1;
          return acc;
        }, {});
        targetCount["All Courses"] = initialCourses.length;
        setTargetCounts(targetCount);
      } catch (error) {
        setError("Error fetching initial data");
        setLoading(false);
      }
    }
    fetchInitialData();
  }, []);

  useEffect(() => {
    const filteredCourses = initialCourses.filter(doc =>
      (!selectedTarget || doc.attributes.Target === selectedTarget) &&
      (!selectedLevel || doc.attributes.Level === selectedLevel) &&
      (combo === "All Courses" || doc.attributes.Combo === selectedCombo)
    );
    setFilteredCourses(filteredCourses); // Set filteredCourses here

    const targetCount = filteredCourses.reduce((acc, doc) => {
      const target = doc.attributes.Target;
      acc[target] = acc[target] ? acc[target] + 1 : 1;
      return acc;
    }, {});
    targetCount["All Courses"] = filteredCourses.length;
    setTargetCounts(targetCount);
  }, [selectedTarget, selectedLevel, selectedCombo, combo, initialCourses]);

  const handleTargetSelect = (selected) => {
    setSelectedTarget(selected);
  };

  const handleSliderChange = (value) => {
    if (value >= 90) {
      setLevel("Advanced");
    } else if (value >= 60) {
      setLevel("Intermediate");
    } else if (value >= 30) {
      setLevel("Beginner");
    } else {
      setLevel("All Levels");
    }
    setSelectedLevel(level);
  };

  const handleComboSelect = (selected) => {
    setCombo(selected);
  };

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  return (
    <section className={`w-full flex p-8 bg-white rounded-3xl ${courses.length < 3 ? 'h-[608px]' : 'h-auto'}`}>
      <div className="bg-white rounded-3xl flex space-x-4">
        <div className="flex-col w-72 sticky top-8 space-y-8">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <div className="flex-col space-y-4">
            <h4 className="text-lg font-bold">Target</h4>
            <div className="space-y-4">
              {targets.map((target, index) => (
                <div className={`cursor-pointer flex items-center justify-between gap-2 rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 ${selectedTarget === target ? 'font-bold' : ''}`} onClick={() => handleTargetSelect(target)} key={index}>
                  <span>{target}</span>
                  <Badge>{targetCount[target] || 0}</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold">Level</h4>
              <p>{level}</p>
            </div>
            <div className="flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-full">
                  <Slider
                    defaultValue={[0]}
                    max={100}
                    step={33}
                    onValueChange={handleSliderChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col space-y-4">
            <h4 className="text-lg font-bold">Combo Suggestion</h4>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  {combo}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[230px]">
                <DropdownMenuItem onClick={() => handleComboSelect("All Courses")}>All Courses</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleComboSelect("From Zero to Hero")}>From Zero to Hero</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleComboSelect("Easy for Busy")}>Easy for Busy</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleComboSelect("Road to TOEIC 650")}>Road to TOEIC 650</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleComboSelect("Road to IELTS 5.0")}>Road to IELTS 5.0</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredCourses.map((course, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div className="text-xl font-bold py-5">{course.attributes.Title}</div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{course.attributes.Summary}</p>
                <div className="flex items-center justify-between">
                  <Badge>{course.attributes.Target}</Badge>
                  <Badge>{course.attributes.Level}</Badge>
                  <Link
                    className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href={`/course/${course.attributes.slug}`}
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
