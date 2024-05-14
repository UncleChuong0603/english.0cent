import React from 'react'

const Account_Page = () => {
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
                    <div className='w-1/3 bg-gray-200 px-3 py-3 text-center'>Email</div>
                    <div className='w-2/3 bg-gray-100 px-3 py-3 text-center'>unclechuong0603@gmail.com</div>
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
                    <div className='w-1/3 h-auto bg-gray-100 rounded-3xl text-2xl font-bold px-10 py-5 flex-center'>Log out</div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Account_Page