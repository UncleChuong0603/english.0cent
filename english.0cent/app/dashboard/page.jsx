import Link from "next/link";
import CourseProgress from '@components/dashboard/course_progress.jsx';
import MyLessons from '@components/dashboard/my_lesson.jsx';
import MyPracticeExercises from '@components/dashboard/my_practice_exercise.jsx';
import MyAssignment from '@components/dashboard/my_assignment.jsx';
const DashBoard = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10'>
      <section className='flex-col  bg-white rounded-3xl py-10 space-y-10'>
        <div className='head_text px-10'>Course Progress</div>
        <CourseProgress />
        <CourseProgress />
        <CourseProgress />
      </section>
        
      <section className='w-full  bg-white rounded-3xl space-y-10 px-10 py-10'>
        <div className='head_text'>My Lessons</div>
        <div className='flex-col space-y-5'>
          <MyLessons />
          <MyLessons />
          <MyLessons />
        </div>
      </section>
      
      <section className='w-full  bg-white rounded-3xl px-10 py-10'>
        <div className='head_text'>My Practice Exercises</div>
          <div className='flex-col py-10 space-y-5'>
            <MyPracticeExercises />
            <MyPracticeExercises />
            <MyPracticeExercises />
          </div>
      </section>
        <section className='w-full  bg-white rounded-3xl px-10 py-10'>
          <div className='head_text'>My Assignments</div>
            <div className='flex-col py-10 space-y-5'>
              <MyAssignment />
              <MyAssignment />
              <MyAssignment />
            </div>
        </section>
    </section>
  )
}

export default DashBoard