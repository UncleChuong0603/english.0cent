import Link from "next/link";
const CoursePost = ({ title, href, tags, description, completion }) => {
    return (
      <section className='w-full h-auto flex bg-white rounded-3xl px-10 py-10'>
        <div className='w-2/3 space-y-10 pr-10'>
          <div className='flex-start'>
            <Link href={href} className='head_text'>{title}</Link>
          </div>
          <div className='w-full h-auto flex space-x-10'>
          {tags && Array.isArray(tags) ? (
            tags.map((tag, index) => (
              <div key={index} className='w-auto h-12 bg-gray-100 rounded-3xl flex-center px-10'>{tag}</div>
            ))
          ) : (
            <p>No tags available</p>
          )}
            </div>
        <div className='w-full h-auto flex-col space-y-10'>
          {description && Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <div key={index} className='w-full'>{paragraph}</div>
            ))
          ) : (
            <p>No tags available</p>
          )}
        </div>
        </div>
        <div className='w-1/3 h-auto flex-col space-y-10'>
          <div className='w-full h-auto font-bold text-2xl flex-center rounded-3xl border-2 border-black'>{completion}</div>
          <div className="w-full h-4/5 flex-center bg-gray-300 rounded-3xl">Book Cover</div>
        </div>
      </section>
    );
  }
  
  export default CoursePost;