import React from 'react'

const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10'>
        <section className='w-full  bg-white rounded-3xl py-10'>
            <div className='head_text px-10'>Personal Information</div>
            <div className='flex-col px-10 pt-10'>
                <div className='flex'>
                    <div className='w-1/3 bg-gray-200 rounded-ss-3xl px-3 py-3 text-center'>Full Name</div>
                    <div className='w-2/3 bg-gray-100 rounded-se-3xl px-3 py-3 text-center'>Mai Phung Chuong</div>
                </div>
                <div className='flex'>
                    <div className='w-1/3 bg-gray-200 px-3 py-3 text-center'>Date of Birth</div>
                    <div className='w-2/3 bg-gray-100 px-3 py-3 text-center'>March 6, 2000</div>
                </div>
                <div className='flex'>
                    <div className='w-1/3 bg-gray-200 rounded-es-3xl px-3 py-3 text-center'>Job Title</div>
                    <div className='w-2/3 bg-gray-100 rounded-ee-3xl px-3 py-3 text-center'>English Translator</div>
                </div>
            </div>
        </section>
        <section className='w-full  bg-white rounded-3xl px-10 py-10'>
            <div className='head_text'>Login Account</div>
            <div className='flex-col pt-10 space-y-10'>
                <div className='flex'>
                    <div className='w-1/3 bg-gray-200 rounded-l-3xl px-3 py-3 text-center'>Google Account</div>
                    <div className='w-2/3 bg-gray-100 rounded-r-3xl px-3 py-3 text-center'>unclechuong0603@gmail.com</div>
                </div>
                <div className='w-full flex-center'>
                    <div className='w-1/3 h-auto bg-black rounded-3xl text-white text-2xl font-bold px-10 py-3 flex-center cursor-pointer transform transition duration-500 hover:scale-105'>Log out</div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default page