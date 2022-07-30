import Head from 'next/head';
import BlogCard from '../components/blog/BlogCard';
import Image from 'next/image';
import search_light from '../public/static/icons/search_light.svg';
import search_dark from '../public/static/icons/search_dark.svg';
import { getAllPosts } from './api/mdx';
import { PostMeta } from '../lib/types';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const [searchValue, setSearchValue] = useState('');

  const { theme } = useTheme();

  const filterByTitle = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value;
    setSearchValue(word);
  };

  return (
    <div className='px-[1.25rem]'>
      <Head>
        <title>Blog - Cesar Gomez</title>
        <meta name='description' content='Front-end developer blog page' />
      </Head>

      <div className='mt-[20px] mb-[30px]'>
        <h2 className='text-3xl text-black font-normal md:text-5xl dark:text-white'>
          Blog
        </h2>
      </div>

      <div className='flex mx-auto w-[280px] h-[35px] px-[10px] border-2 rounded-md border-alto text-tundora bg-concrete md:w-[500px] dark:border-tundora  dark:text-silver dark:bg-mine '>
        <input
          type='search'
          onChange={handleChange}
          placeholder='find articles by title'
          className='w-full py-[5px]  focus:outline-none placeholder:text-tundora bg-concrete dark:bg-mine dark:placeholder:text-silver'
        />
        <Image
          src={theme === 'light' ? search_light : search_dark}
          alt='search icon'
          width={15}
          height={15}
        />
      </div>

      <main className='mt-[50px]'>
        {searchValue ? (
          <BlogCard posts={filterByTitle} />
        ) : (
          <BlogCard posts={posts} />
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return {
    props: { posts },
  };
}
