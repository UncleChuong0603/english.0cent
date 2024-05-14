import Link from 'next/link';
const course_progress = () => {
  return (
    <section>
        <div className='w-full h-auto flex-col px-10  ' >
          <div className='w-full h-auto     bg-gray-100 rounded-3xl'>
            <div className='flex-between px-10 py-5'>
              <div className='text-2xl font-bold'>12 tenses in English</div>
              <div className='flex-center'>
                <div className='w-full h-auto flex space-x-10 px-10' >
                  <div className='w-auto h-12   bg-gray-300 rounded-3xl flex-center px-10'>Easy</div>
                  <div className='w-auto h-12   bg-gray-300 rounded-3xl flex-center px-10'>Grammar</div>
                  <div className='w-auto h-12   bg-gray-300 rounded-3xl flex-center px-10'>Tense</div>
                </div>
              </div>
              <div className='w-16 h-16 rounded-full bg-black'></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default course_progress