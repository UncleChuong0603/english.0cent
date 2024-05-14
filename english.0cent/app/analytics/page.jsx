import CourseProgress from '@components/dashboard/course_progress.jsx';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10'>
      <section className='w-full flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Overview</div>
        <div className='flex-between'>
        <div className='w-3/4'>
        <div className='w-full h-auto items-center flex-col space-y-10 px-10 py-10' >
          <div className='w-full h-20  flex items-center bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Lessons</div>
              <div className='w-3/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>80%</div>
          </div>
          <div className='w-full h-20  flex items-center bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Practice Exercises</div>
              <div className='w-2/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>60%</div>
          </div>
          <div className='w-full h-20 flex items-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Assignments</div>
              <div className='w-1/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>40%</div>
          </div>
        </div>
        </div>
        <div className='w-80 h-80   bg-gray-100 rounded-full mr-10'></div>
        </div>
      </section>

      <section className='w-full flex-col  bg-white rounded-3xl'>
        <div className='head_text mx-10 pt-10'>Uncompleted Before Dead Line</div>
        <div className='flex-between'>
        <div className='w-3/4'>
        <div className='w-full h-auto items-center flex-col space-y-10 px-10 py-10' >
          <div className='w-full h-20  flex items-center bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Lessons</div>
              <div className='w-3/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>80%</div>
          </div>
          <div className='w-full h-20  flex items-center bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Practice Exercises</div>
              <div className='w-2/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>60%</div>
          </div>
          <div className='w-full h-20 flex items-center  bg-gray-100 rounded-3xl px-10 space-x-3'>
              <div className='w-1/3 font-bold text-2xl'>Assignments</div>
              <div className='w-1/5 h-1/2 bg-gray-200 rounded-3xl flex-center font-bold text-2xl'>40%</div>
          </div>
        </div>
        </div>
        <div className='w-80 h-80   bg-gray-100 rounded-full mr-10'></div>
        </div>
      </section>

      <section className='flex-col  bg-white rounded-3xl py-10 space-y-10'>
        <div className='head_text px-10'>Course Progress</div>
        <CourseProgress />
        <CourseProgress />
        <CourseProgress />
      </section>

    </section>
    
  )
}

export default page