'use client';

import SearchBar from '@components/searchbar';
import LibraryFeed from '@app/library/components/library_feed.jsx';
import LibraryRelatedPost from '@app/library/components/library_related_post.jsx';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
        <SearchBar />
        <LibraryFeed />
        <LibraryFeed />
        <LibraryFeed />
        <section className='w-full h-auto grid grid-cols-3 gap-10'>
          <LibraryRelatedPost />
          <LibraryRelatedPost />
          <LibraryRelatedPost />
        </section>
    </section>
  )
}

export default page