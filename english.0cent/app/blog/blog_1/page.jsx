import BlogPost from '@components/blog/blog_post';
import BlogRelatedPost from '@components/blog/blog_related_post';
const page = () => {
  return (
    <section className='flex-col py-10 text-justify'>
        <BlogPost />
        <div className='w-full h-auto flex space-x-10 px-10 py-10'>
          <BlogRelatedPost />
          <BlogRelatedPost />
        </div>
    </section>
  )
}

export default page