'use client';

import SearchBar from '@/components/searchbar';
import BlogFeed from './components/blog_feed';
import BlogRelatedPost from './components/blog_related_post';
const page = () => {
  return (
    <section className='flex-col px-10 py-10 space-y-10'>
        <SearchBar />
        <section className='grid grid-cols-2 gap-10 text-justify'> 
            <BlogFeed />
            <BlogFeed />
            <BlogFeed />
            <BlogFeed />
        </section>
        <section className='w-full h-auto grid grid-cols-3 gap-10'>
            <BlogRelatedPost />
            <BlogRelatedPost />
            <BlogRelatedPost />
        </section>
    </section>
  )
}

export default page