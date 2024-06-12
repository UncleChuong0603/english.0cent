// utils/fetchCourses.js
import config from '@/config';

const fetchCourses = async (params) => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  };

  try {
    const response = await fetch(`${config.strapi}/api/courses?${params}&populate=*`, reqOption);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchCourses;
