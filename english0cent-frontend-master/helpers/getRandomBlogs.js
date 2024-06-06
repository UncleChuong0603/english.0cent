import fetchBlogs from './fetchBlogs';

const getRandomBlogs = async (currentBlogId, count = 2) => {
  try {
    const blogs = await fetchBlogs();
    const blogList = blogs.data.filter(blog => blog.id !== currentBlogId);

    if (blogList.length < count) {
      throw new Error('Not enough blogs available');
    }

    const randomBlogs = [];
    const indices = new Set();
    while (indices.size < count) {
      const randomIndex = Math.floor(Math.random() * blogList.length);
      indices.add(randomIndex);
    }

    indices.forEach(index => randomBlogs.push(blogList[index]));
    return randomBlogs;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getRandomBlogs;
