import SearchBar from '@components/general/searchbar';
import LibraryFeed from '@components/library/library_feed.jsx';

const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        <SearchBar />
        <LibraryFeed />
        <LibraryFeed />
    </section>
  )
}

export default page