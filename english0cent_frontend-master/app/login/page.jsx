import Image from 'next/image';
const page = () => {
  return (
    <section className='w-full h-screen flex-center px-10 py-10'>
      <div className='w-full h-full bg-white rounded-3xl flex-center'>
        <div className='w-1/2 flex-center'>
          <Image
            src="/assets/images/logo.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className='w-1/2 flex-col px-10 space-y-10'>
          <div className='head_text flex-center'>Fill out the information</div>
          <div className='space-y-5'>
            <div className='w-full h-16 bg-gray-100 rounded-3xl flex-center'>Full name</div>
            <div className='w-full h-16 bg-gray-100 rounded-3xl flex-center'>Date of Birth</div>
            <div className='w-full h-16 bg-gray-100 rounded-3xl flex-center'>Email</div>
            <div className='w-full h-16 bg-gray-100 rounded-3xl flex-center'>Job Title</div>
          </div>
          <div>
            <div className='w-full h-16 flex-center'>Done with the Fill-out? then it's time to Login </div>
            <button className='transform transition duration-500 hover:scale-105 w-full h-16 bg-black rounded-3xl flex-center text-white'>Log in with Google</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page