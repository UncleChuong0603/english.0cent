'use client'

import React, { useState } from 'react';

const Searchbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('Level');
  const [selectedTopic, setSelectedTopic] = useState('Topic');
  const [selectedCertificate, setSelectedCertificate] = useState('Certificate');

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const selectItem = (dropdown, value) => {
    switch (dropdown) {
      case 'level':
        setSelectedLevel(value);
        break;
      case 'topic':
        setSelectedTopic(value);
        break;
      case 'certificate':
        setSelectedCertificate(value);
        break;
      default:
        break;
    }
    setOpenDropdown(null);
  };

  const clearSelection = (dropdown) => {
    switch (dropdown) {
      case 'level':
        setSelectedLevel('Level');
        break;
      case 'topic':
        setSelectedTopic('Topic');
        break;
      case 'certificate':
        setSelectedCertificate('Certificate');
        break;
      default:
        break;
    }
  };

  return (
    <section className='w-full h-auto flex-col bg-white rounded-3xl space-y-10 px-10 py-10'>
      <div className='w-full h-auto flex-col space-y-10'>
        <div className='flex space-x-10'>
          <div className='w-full h-16 bg-white border-2 border-black rounded-3xl px-10 py-10 flex-between'>
            <p>Type here to search</p>
            <button className='relative w-1/4 h-12 bg-black text-white rounded-3xl flex-center transform transition duration-500 hover:scale-105'>
              Search
            </button>
          </div>
        </div>
        <div className='flex justify-center space-x-10'>
          <div onClick={() => toggleDropdown('level')} className='w-1/3 h-auto bg-gray-100 rounded-3xl py-3 relative cursor-pointer'>
            <div className='font-bold flex justify-center items-center w-full px-5'>
              {selectedLevel}
              {selectedLevel !== 'Level' && (
                <button onClick={(e) => { e.stopPropagation(); clearSelection('level'); }} className='absolute right-5 z-10 text-gray-500'>x</button>
              )}
            </div>
            {openDropdown === 'level' && (
              <div className='absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-3xl shadow-lg px-1 py-1'>
                <div onClick={() => selectItem('level', 'Easy')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Easy
                </div>
                <div onClick={() => selectItem('level', 'Medium')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Medium
                </div>
                <div onClick={() => selectItem('level', 'Hard')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Hard
                </div>
              </div>
            )}
          </div>
          <div onClick={() => toggleDropdown('topic')} className='w-1/3 h-auto bg-gray-100 rounded-3xl py-3 relative cursor-pointer'>
            <div className='font-bold flex justify-center items-center w-full px-4'>
              {selectedTopic}
              {selectedTopic !== 'Topic' && (
                <button onClick={(e) => { e.stopPropagation(); clearSelection('topic'); }} className='absolute right-5 z-10 text-gray-500'>x</button>
              )}
            </div>
            {openDropdown === 'topic' && (
              <div className='absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-3xl shadow-lg px-1 py-1'>
                <div onClick={() => selectItem('topic', 'Grammar')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Grammar
                </div>
                <div onClick={() => selectItem('topic', 'Vocabulary')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Vocabulary
                </div>
                <div onClick={() => selectItem('topic', 'Pronunciation')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Pronunciation
                </div>
              </div>
            )}
          </div>
          <div onClick={() => toggleDropdown('certificate')} className='w-1/3 h-auto bg-gray-100 rounded-3xl py-3 relative cursor-pointer'>
            <div className='font-bold flex justify-center items-center w-full px-4'>
              {selectedCertificate}
              {selectedCertificate !== 'Certificate' && (
                <button onClick={(e) => { e.stopPropagation(); clearSelection('certificate'); }} className='absolute right-5 z-10 text-gray-500'>x</button>
              )}
            </div>
            {openDropdown === 'certificate' && (
              <div className='absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-3xl shadow-lg px-1 py-1'>
                <div onClick={() => selectItem('certificate', 'TOEIC')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  TOEIC
                </div>
                <div onClick={() => selectItem('certificate', 'Tuyển sinh vào lớp 10')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  Tuyển sinh vào lớp 10
                </div>
                <div onClick={() => selectItem('certificate', 'THPT Quốc gia')} className='py-2 px-4 cursor-pointer hover:bg-gray-200 hover:rounded-3xl flex-center'>
                  THPT Quốc gia
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
