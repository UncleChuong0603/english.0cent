import Link from "next/link";
const course_post = () => {
  return (
    <section className='w-full h-auto flex  bg-white rounded-3xl space-y-10 px-10 py-10'>
        <div className='w-2/3 space-y-10 pr-10'>
            <div className='flex-start'>
                <Link href="/courses/courses_1" className='head_text'>12 tenses in English</Link>
            </div>
            <div className='w-full h-auto flex space-x-10' >
                <div className='w-auto h-12 bg-gray-100 rounded-3xl flex-center px-10'>Easy</div>
                <div className='w-auto h-12 bg-gray-100 rounded-3xl flex-center px-10'>Grammar</div>
                <div className='w-auto h-12 bg-gray-100 rounded-3xl flex-center px-10'>Tense</div>
            </div>
            <div className='flex'>
            <div className='w-full h-auto flex-col space-y-5'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illum ad doloremque provident, repudiandae aliquid impedit unde, eos repellendus ratione eius consequatur ab quam necessitatibus aperiam aut, cupiditate blanditiis? Reiciendis dolorum sapiente, nisi magni earum quaerat! Assumenda architecto sint nobis voluptatum rem amet? Modi nobis rem quasi tenetur. Eos, voluptatem!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quaerat!</p>
            </div>
            </div>
        </div>
        <div className='w-1/3 h-auto flex-col space-y-10'>
            <div className='w-full f-auto font-bold text-2xl flex-center rounded-3xl border-2 border-black'>60%</div>
            <div className="w-full h-4/5 flex-center bg-gray-300 rounded-3xl">Book Cover</div>
        </div>
    </section>
  )
}

export default course_post