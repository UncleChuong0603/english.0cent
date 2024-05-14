import SearchBar from   '@components/general/searchbar';
import CoursePost from '@components/course/course_post';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        <SearchBar />
        <CoursePost />
        <CoursePost />
    </section>
            
        )
}

export default page