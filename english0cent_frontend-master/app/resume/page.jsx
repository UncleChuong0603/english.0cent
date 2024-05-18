'use client';

import { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [activeTab, setActiveTab] = useState('Foreign Languages');
  const [showMore, setShowMore] = useState({});

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleToggle = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const experiences = [
    {
      id: 1,
      title: 'Translator & Interpreter',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!',
      tags: ['Easy', 'Grammar', 'Tense']
    },
    {
      id: 2,
      title: 'English Teacher',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!',
      tags: ['Easy', 'Grammar', 'Tense']
    },
    {
      id: 3,
      title: 'Website Developer',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!',
      tags: ['Easy', 'Grammar', 'Tense']
    },
  ];

  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        <div className='flex-center w-full'>
          <Link href="/resume" className='w-2/3 h-24 bg-black rounded-3xl px-3 py-3 text-white font-bold text-4xl flex-center z-50'>Resume</Link>
          <Link href="/portfolio" className='w-1/3 h-18 bg-gray-500 rounded-r-3xl px-3 py-3 text-white font-bold text-2xl flex-center transform transition duration-500 hover:scale-105'>Portfolio</Link>
        </div>
        <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start px-10 py-10'>
          <div className='flex-between items-center'>
            <div className='w-1/2 head_text flex-start'>Profile</div>
          </div>
          <div className='flex-between'>
            <div className='w-2/3 h-auto flex-col space-y-5'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
            </div>
            <div className='w-72 h-72   bg-gray-100 rounded-3xl px-10'></div>
          </div>
        </section>
        <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start space-y-10 py-10'>
          <div className='flex-between items-center'>
            <div className='w-1/2 head_text px-10 flex-start'>Expertise</div>
          </div>
          <div className='flex'>
            <div className='w-full h-auto flex-col space-y-10 px-10'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
              
              <div className='flex-center space-x-10'>
                
                <div className='w-1/3 h-auto flex-col  bg-gray-100 rounded-3xl px-5 py-5 space-y-5'>
                  <p className='text-center text-2xl font-bold'>Translator - Interpreter</p>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                </div>
                <div className='w-1/3 h-auto flex-col  bg-gray-100 rounded-3xl px-5 py-5 space-y-5'>
                  <p className='text-center text-2xl font-bold'>English Teacher </p>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                </div>
                <div className='w-1/3 h-auto flex-col  bg-gray-100 rounded-3xl px-5 py-5 space-y-5'>
                  <p className='text-center text-2xl font-bold'>Website Developer</p>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                  <div className='w-full h-16 flex-center bg-gray-300 rounded-3xl py-10'>
                    <p className='text-center'>Image Backround, </p>
                    <p className='text-center'>Crypto, Forex</p>
                  </div>
                </div>

              </div>
              <div className='flex-center'>
                <Link href='/about_me/portfolio' className='text-2xl font-bold px-10 py-5 bg-black text-white rounded-3xl transform transition duration-500 hover:scale-105'>Show More in Portfolio</Link>
              </div>
            </div>
          </div>
            
        </section>
        <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start space-y-10 py-10'>
          <div className='flex-between items-center'>
            <div className='w-1/2 head_text px-10 flex-start'>Experience</div>
          </div>
          <div className='flex'>
            <div className='w-full h-auto flex-col space-y-10 px-10'>
              {experiences.map((exp) => (
                <div key={exp.id} className='flex-col space-y-10 px-10 py-10 rounded-3xl border-black border-4'>
                  <div className='flex justify-between items-center'>
                    <p className='text-3xl font-bold'>{exp.title}</p>
                    <button onClick={() => handleToggle(exp.id)} className='text-1xl font-bold'>
                      {showMore[exp.id] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  {showMore[exp.id] && (
                    <div className='flex-start space-x-10'>
                      <div className='w-2/3 space-y-5'>
                        <p>{exp.content}</p>
                        <div className='w-full h-auto flex justify-center space-x-10 px-10 mt-5'>
                          {exp.tags.map((tag, index) => (
                            <div key={index} className='w-1/3 h-12 bg-gray-100 rounded-3xl flex justify-center items-center'>
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='w-1/3 h-48 bg-gray-100 rounded-3xl mr-10'></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start space-y-10 py-10'>
          <div className='flex-between items-center'>
            <div className='w-1/2 head_text px-10 flex-start'>Education</div>
          </div>
          <div className='flex'>
            <div className='w-full h-auto flex-col space-y-10 px-10'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
              <div className='flex-start'>
                <div className='w-1/3 h-48   bg-gray-100 rounded-3xl mr-10'></div>
                <div className='w-2/3 flex-col space-y-5'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
                </div>
              </div>
            </div>
            </div>
        </section>
        <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start space-y-10 py-10'>
            <div className='flex-between items-center'>
                <div className='w-1/2 head_text px-10 flex-start'>Skills</div>
                </div>
          
            <div className='flex'>
                <div className='w-full h-auto flex-col space-y-10 px-10'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
                    
                    <div className='flex-col'>
                      
                      <div className='flex space-x-10'>
                      <div
                        className={` ${activeTab === 'Foreign Languages' ? 'w-2/3 h-20 flex-col bg-gray-100 rounded-t-3xl px-5 py-5 space-y-5 cursor-pointer' : 'w-1/3 h-16 flex-center bg-gray-300 rounded-3xl px-5 py-5 space-y-5 cursor-pointer'
                        }`}
                        onClick={() => toggleTab('Foreign Languages')}
                      >
                        <p className={`text-center ${activeTab === 'Foreign Languages' ? 'text-4xl' : 'text-2xl'} font-bold`}>Foreign Languages</p>
                      </div>
                      <div
                        className={`${activeTab === 'Code Skills' ? 'w-2/3 h-20 flex-col bg-gray-100 rounded-t-3xl px-5 py-5 space-y-5 cursor-pointer ' : 'w-1/3 h-16 flex-center bg-gray-300 rounded-3xl px-5 py-5 space-y-5 cursor-pointer'
                        }`}
                        onClick={() => toggleTab('Code Skills')}
                      >
                        <p className={`text-center ${activeTab === 'Code Skills' ? 'text-4xl' : 'text-2xl'} font-bold`}>Code Skills</p>
                      </div>


                      </div>
                      {activeTab === 'Foreign Languages' && (
                      <>
                      <div className='flex-col w-5/6 h-auto  bg-gray-100 rounded-b-3xl rounded-se-3xl px-10 py-10 space-y-5'>
                      <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, possimus incidunt corporis sunt cupiditate assumenda provident! A, amet magnam consequuntur suscipit est quas veritatis vero quo fugiat alias accusamus delectus quam nisi natus quae veniam labore nam fugit. Nulla unde officia natus accusantium voluptas quia laudantium praesentium quos reprehenderit culpa.</p>
                      <div className='w-full h-24 flex-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                        <div className='w-1/4 font-bold text-2xl'>English</div>
                        <div className='w-1/4 font-bold text-2xl'>TOEIC 990</div>
                        <div className='w-1/3 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>Professional</div>
                      </div>
                      <div className='w-full h-24 flex-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                        <div className='w-1/4 font-bold text-2xl'>English</div>
                        <div className='w-1/4 font-bold text-2xl'>IELTS 8.0</div>
                        <div className='w-1/3 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>Professional</div>
                      </div>
                      <div className='w-full h-24 flex-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                        <div className='w-1/4 font-bold text-2xl'>Chinese</div>
                        <div className='w-1/4 font-bold text-2xl'>HSK 3</div>
                        <div className='w-1/3 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>Conversational</div>
                      </div>
                      </div>
                      </>
                      )}
                      {activeTab === 'Code Skills' && (
                      <> 
                      <div className='flex-end'>
                        <div className='flex-col w-5/6 h-auto  bg-gray-100 rounded-b-3xl rounded-ss-3xl px-10 py-10 space-y-5'>
                          <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, possimus incidunt corporis sunt cupiditate assumenda provident! A, amet magnam consequuntur suscipit est quas veritatis vero quo fugiat alias accusamus delectus quam nisi natus quae veniam labore nam fugit. Nulla unde officia natus accusantium voluptas quia laudantium praesentium quos reprehenderit culpa.</p>
                        <div className='w-full h-24 flex items-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                          <div className='w-1/4 font-bold text-2xl'>Languages</div>
                          <div className='w-1/4 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>HTML, CSS</div>
                          <div className='w-1/4 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>Tailwind CSS</div>  
                        </div>
                        <div className='w-full h-24 flex items-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                          <div className='w-1/4 font-bold text-2xl'>Framework</div>
                          <div className='w-1/4 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>NextJS</div>
                        </div>
                        <div className='w-full h-24 flex items-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
                          <div className='w-1/4 font-bold text-2xl'>Database</div>
                          <div className='w-1/4 h-12 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>MongoDB</div>
                        </div>
                        </div>
                      </div>
                      </>
                      )}
                    </div>                  
                </div>
            </div>
            
        </section>
    </section>
  )
}

export default Page