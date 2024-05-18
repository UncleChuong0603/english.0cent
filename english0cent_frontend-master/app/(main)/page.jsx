import Image from 'next/image';
import EmailSubscribe from '../../components/email_subscribe';
const Home = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10'>

      <section className='flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Don't miss the below</div>
        <div className='w-full h-auto items-center flex space-x-10 px-10 py-10' >
          <div className='w-full h-96   bg-gray-100 rounded-3xl'></div>
        </div>
      </section>

      <section className='flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Popular Courses</div>
        <div className='w-full h-auto flex-center space-x-10 px-10 py-10' >
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
        </div>
      </section>

      <section className='flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Updated Library</div>
        <div className='w-full h-auto flex-center space-x-10 px-10 py-10' >
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
        </div>
      </section>

      <section className='flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Latest Blogs</div>
        <div className='w-full h-auto flex-center space-x-10 px-10 py-10' >
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
          <div className='w-1/3 h-auto flex-col'>
            <div className='w-full h-72 bg-gray-100 rounded-3xl'></div>
            <div className='text-2xl font-bold flex-center py-5'>12 tenses in English</div>
          </div>
        </div>
      </section>

      <EmailSubscribe />
      
    </section>
  )
}

export default Home