import Link from 'next/link';
const blog_feed = () => {
  return (
    <section className='w-full h-auto flex-col  bg-white rounded-3xl items-start space-y-10 py-10'>
        <div className='flex-between items-center'>
          <Link href="/blog/blog_1" className='head_text px-10'>12 tenses in English</Link>
        </div>
        <div className='w-full h-auto flex space-x-10 px-10' >
            <div className='w-auto h-12   bg-gray-100 rounded-3xl flex-center px-10'>Easy</div>
            <div className='w-auto h-12   bg-gray-100 rounded-3xl flex-center px-10'>Grammar</div>
            <div className='w-auto h-12   bg-gray-100 rounded-3xl flex-center px-10'>Tense</div>
        </div>
        <div className='w-full h-auto flex-center mr-10 rounded-3xl px-10'>
            <div className="w-full h-56 bg-gray-300 rounded-3xl flex-center">Book Cover</div>
        </div>
        <div className='w-full h-auto flex px-10 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</div>
    </section>
  )
}

export default blog_feed