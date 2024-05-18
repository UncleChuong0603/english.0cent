import Link from 'next/link';

const library_related_post = () => {
  return (
    <section className='w-full h-auto flex-col'> 
      <div className='w-full h-auto flex-col bg-white rounded-3xl items-start space-y-5 px-5 py-5'>
        < div className='flex-start'>
          <Link href="/library/library_1" className='font-bold text-2xl'>12 tenses in English</Link>
        </div>
        <div className='w-full h-72 flex-center bg-gray-300 rounded-3xl'>
          Book Cover
        </div>
      </div>
    </section>
  )
}

export default library_related_post