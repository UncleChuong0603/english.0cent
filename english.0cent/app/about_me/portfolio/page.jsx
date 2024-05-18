'use client';

import Link from 'next/link';
import { useState } from 'react';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Translator & Interpreter');
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState(null);

  const categories = [
    "Translator & Interpreter",
    "English Teacher",
    "Website Developer"
  ];

  const feeds = {
    "Translator & Interpreter": [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4"
    ],
    "English Teacher": [
      "Lesson Plan 1",
      "Lesson Plan 2",
      "Lesson Plan 3",
      "Lesson Plan 4"
    ],
    "Website Developer": [
      "Website 1",
      "Website 2",
      "Website 3",
      "Website 4"
    ]
  };

  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
      <div className='flex-center w-full'>
        <Link href="/about_me/resume" className='w-1/3 h-18 bg-gray-500 rounded-l-3xl px-3 py-3 text-white font-bold text-2xl flex-center transform transition duration-500 hover:scale-105'>Resume</Link>
        <Link href="/about_me/portfolio" className='w-2/3 h-24 bg-black rounded-3xl px-3 py-3 text-white font-bold text-4xl flex-center z-50'>Portfolio</Link>
      </div>
      <div className='w-full h-16 rounded-3xl bg-white flex-center space-x-10 px-10 py-10'>
        {categories.map((categoryItem, index) => (
          <div
            key={index}
            className={`w-1/3 h-auto py-3 rounded-3xl flex-center font-bold text-2xl cursor-pointer ${
              selectedCategory === categoryItem ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white'
            } duration-500`}
            onClick={() => {
              setSelectedCategory(categoryItem);
              setShowSecondDiv(false);
              setSelectedFeed(null);
            }}
          >
            {categoryItem}
          </div>
        ))}
      </div>
      <div>
        {!showSecondDiv ? (
          <div className='w-full grid grid-cols-2 gap-10'>
            {feeds[selectedCategory].map((feedItem, index) => (
              <div
                key={index}
                className='w-full h-72 bg-gray-100 rounded-3xl flex-center font-bold text-2xl cursor-pointer transform transition duration-500 hover:scale-105'
                onClick={() => {
                  setShowSecondDiv(true);
                  setSelectedFeed(feedItem);
                }}
              >
                {feedItem}
              </div>
            ))}
          </div>
        ) : (
          <div className='w-full h-auto flex space-x-10'>
            <div className='w-1/3 h-96 space-y-10 px-10 overflow-y-scroll scrollbar-hide'>
              {feeds[selectedCategory].map((feedItem, index) => (
                <div
                  key={index}
                  className={`w-full h-56 bg-gray-100 rounded-3xl flex-center font-bold text-2xl cursor-pointer transform transition duration-500 hover:scale-105 ${
                    selectedFeed === feedItem ? 'border-black border-8' : ''
                  }`}
                  onClick={() => setSelectedFeed(feedItem)}
                >
                  {feedItem}
                </div>
              ))}
            </div>
            <div className='w-2/3 h-96 bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>
              {selectedFeed ? (
                <div className='w-full h-auto p-5 bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>
                  {selectedFeed} details...
                </div>
              ) : (
                <div className='w-full h-auto p-5 bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>
                  Select a feed item to see details
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
