import Link from 'next/link';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
      <div className='flex-center w-full'>
        <Link href="/about_me/resume" className='w-1/3 h-18 bg-gray-500 rounded-l-3xl px-3 py-3 text-white font-bold text-2xl flex-center'>Resume</Link>
        <Link href="/about_me/portfolio" className='w-2/3 h-24 bg-black rounded-3xl px-3 py-3 text-white font-bold text-4xl flex-center'>Portfolio</Link>
      </div>
      <div className='w-full h-16 rounded-3xl bg-white flex-center space-x-10 px-10 py-10' >
          <div className='w-1/3 h-12   bg-white rounded-3xl flex-center font-bold text-2xl'>Translator & Interpreter</div>
          <div className='w-1/3 h-12   bg-white rounded-3xl flex-center font-bold text-2xl'>English Teacher</div>
          <div className='w-1/3 h-12   bg-white rounded-3xl flex-center font-bold text-2xl'>Website Developer</div>
      </div>
      <div className='w-full flex space-x-10' >
          <div className='w-1/2 h-72   bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>Translator & Interpreter</div>
          <div className='w-1/2 h-72   bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>English Teacher</div>
      </div>
      <div className='w-full h-auto flex space-x-10' >
          <div className='w-1/3 h-auto space-y-10'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>Translator & Interpreter</div>
            <div className='w-full h-72 bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>Translator & Interpreter</div>
          </div>
          <div className='w-2/3 h-auto     bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>
            <div className='w-full h-auto bg-gray-100 rounded-3xl flex-center font-bold text-2xl'>Translator & Interpreter</div>
          </div>
      </div>
      
    </section>
  )
}

export default page