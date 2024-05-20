'use client';

import SearchBar from '@components/general/searchbar';
import BlogFeed from '@components/blog/blog_feed.jsx';
const page = () => {
  return (
    <section className='flex-col px-10 py-10'>
        <SearchBar />
        <section className='grid grid-cols-2 py-10 gap-10 text-justify'> 
            <BlogFeed />
            <BlogFeed />
            <BlogFeed />
            <BlogFeed />
        </section>
    </section>
  )
}

export default page