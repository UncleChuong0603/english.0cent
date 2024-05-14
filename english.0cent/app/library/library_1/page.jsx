import LibraryPost from '@components/library/library_post.jsx';
import LibraryRelatedPost from '@components/library/library_related_post.jsx';

const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        <LibraryPost />
        <div className='w-full h-auto flex space-x-10'>
          <LibraryRelatedPost />
          <LibraryRelatedPost />
        </div>
    </section>
  )
}

export default page