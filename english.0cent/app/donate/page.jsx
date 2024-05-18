'use client';

import { useState } from 'react';

const page = () => {
  const [selectedTab, setSelectedTab] = useState('Vietcombank');

  const tabs = [
    {
      name: 'Vietcombank',
      accountNumber: '1014 306 540',
      accountName: 'Mai Phung Chuong',
    },
    {
      name: 'MOMO',
      accountNumber: '038 921 7724',
      accountName: 'Mai Phung Chuong',
    },
  ];

  const selectedContent = tabs.find(tab => tab.name === selectedTab);

  return (
    <section className='w-full h-screen flex-col px-10 py-10 space-y-10'>
      <section className='w-full h-full rounded-3xl px-10 py-10 space-x-10 flex-center bg-white'>
        <div className='w-2/3 space-y-10'>
          <div className='head_text'>Thank you for your support</div>
          <div className='text-2xl text-justify'>
            English 0 cent is my dream since I was 16, when every body around me kept asking me how I learned English so quickly and effectively
          </div>
          <div className='text-2xl text-justify'>
            I know I cannot repeat the advice everyday, so I decide to learn code one day, and make a website for this dream to be true.
          </div>
          <div className='text-2xl text-justify'>See you on the social media, Follow English 0 cent.</div>
          <div className='w-full h-auto flex space-x-5'>
            <div className='w-16 h-16 rounded-3xl bg-gray-100 flex-center px-10'>X</div>
            <div className='w-16 h-16 rounded-3xl bg-gray-100 flex-center px-10'>Facebook</div>
            <div className='w-16 h-16 rounded-3xl bg-gray-100 flex-center px-10'>TikTok</div>
          </div>
        </div>
        <div className='w-1/3 flex-col border-2 border-black rounded-3xl py-10 space-y-10'>
          <div className='w-full h-auto flex space-x-5 justify-center'>
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-4 py-2 rounded-3xl ${selectedTab === tab.name ? 'bg-black text-white duration-500' : 'bg-gray-100 duration-500'}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className='w-full h-auto flex-center mt-10'>
            <div className='w-64 h-64 bg-gray-100 rounded-3xl flex-center'>QR Code</div>
          </div>
          <div className='w-full h-auto flex-col duration-500'>
            <div className='text-2xl font-bold flex-center'>{selectedContent.name}</div>
            <div className='text-2xl flex-center'>{selectedContent.accountNumber}</div>
            <div className='text-2xl flex-center'>{selectedContent.accountName}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
