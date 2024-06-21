"use client";

import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import fetchCourses from "@/helpers/fetchCourses";


export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [targets, setTargets] = useState([]);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [targetCount, setTargetCounts] = useState({});
  const [level, setLevel] = useState("All Levels");
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [combo, setCombo] = useState([]);
  const [openCombo, setOpenCombo] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const coursesData = await fetchCourses(``);
        const initialCourses = coursesData.data;
        setCourses(initialCourses);
        const targets = initialCourses.map(course => course.attributes.Target)
          .filter((value, index, self) => self.indexOf(value) === index);
        const combos = initialCourses.flatMap(course => course.attributes.Combo.combo)
          .filter((value, index, self) => self.indexOf(value) === index);
        setTargets(targets);
        setCombo(combos);
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
    const filteredCourses = courses.filter(doc =>
      (!selectedTarget || doc.attributes.Target === selectedTarget) &&
      (!selectedLevel || doc.attributes.Level === selectedLevel) &&
      (!selectedCombo || doc.attributes.Combo.combo.includes(selectedCombo))
    );
    setFilteredCourses(filteredCourses);

    const targetCount = filteredCourses.reduce((acc, doc) => {
      const target = doc.attributes.Target;
      acc[target] = acc[target] ? acc[target] + 1 : 1;
      return acc;
    }, {});
    targetCount["All Courses"] = filteredCourses.length;
    setTargetCounts(targetCount);
  }, [selectedTarget, selectedLevel, selectedCombo, courses]);

  const handleTargetSelect = (selected) => {
    setSelectedTarget(selected);
  };

  const handleSliderChange = (value) => {
    let level = "All Levels";
    if (value >= 100) {
      level = "Super Hard";
    } else if (value >= 75) {
      level = "Hard";
    } else if (value >= 50) {
      level = "Medium";
    } else if (value >= 25) {
      level = "Easy";
    }
    setLevel(level);
    setSelectedLevel(level === "All Levels" ? null : level);
  };

  const handleComboSelect = (selected) => {
    setSelectedCombo(selected === "All Courses" ? null : selected);
  };

  const handleResetCategory = () => {
    setSelectedTarget(null);
    setSelectedLevel(null);
    setSelectedCombo(null);
  };

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  return (
    <div className={`w-full p-8 flex bg-white rounded-3xl space-x-8 h-auto`}>
        <div className="flex-col w-1/5 sticky top-8 space-y-10">
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
                    step={25}
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
                  {selectedCombo || "All Courses"}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[230px]">
                <DropdownMenuItem onClick={() => handleComboSelect("All Courses")}>All Courses</DropdownMenuItem>
                {combo.map((comboItem, index) => (
                  <DropdownMenuItem key={index} onClick={() => handleComboSelect(comboItem)}>{comboItem}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button className="w-full" onClick={handleResetCategory}>Reset Category</Button>
        </div>
          <div className="w-4/5 h-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredCourses.map((course, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div className="text-xl font-bold">{course.attributes.Title}</div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{course.attributes.Summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Badge variant={"secondary"}>{course.attributes.Target}</Badge>
                    <Badge variant={"secondary"}>{course.attributes.Level}</Badge>
                    <Badge
                      variant={"secondary"}
                      className="relative"
                      onMouseEnter={() => setOpenCombo(course.attributes.Combo.combo)}
                      onMouseLeave={() => setOpenCombo(null)}
                    >
                      <span>{course.attributes.Combo.combo.length} Combo</span>
                      {openCombo === course.attributes.Combo.combo && (
                        <div className="w-36 absolute top-full left-0 bg-white p-2 shadow-md rounded-lg">
                          {openCombo.map((combo, index) => (
                            <div key={index} className="flex items-center">
                              <span>{combo}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Badge>
                  </div>
                  <div className="flex space-x-4">
                    <Link href={`/course/${course.attributes.slug}`}>
                      <Button variant="outline">
                        Details
                      </Button>
                    </Link>
                    <Link href={`/course/${course.attributes.slug}`}>
                      <Button>
                        Enroll
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}
