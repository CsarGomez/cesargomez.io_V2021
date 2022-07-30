/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import BlogCard from '../components/blog/BlogCard';
import { getAllPosts } from '../pages/api/mdx';
import { PostMeta } from '../lib/types';

const Home = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <>
      <Head>
        <title>Cesar Gomez</title>
        <meta name='description' content='Front-end developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* ABOUT */}
      <div className='px-[1.25rem]'>
        <section className='flex flex-col justify-center items-center mt-[20px] md:gap-[20%] md:flex-row-reverse'>
          <div className='rounded-lg shadow-xl md:w-[50%]'>
            <img
              className='rounded-lg'
              src='/static/profile.jpg'
              alt='profile picture'
            />
          </div>

          <div className='mt-[20px] items-center md:w-[50%] md:mt-0'>
            <h2 className='text-2xl font-bold dark:text-concrete'>
              Hey, i&lsquo;m Cesar Gomez!
            </h2>
            <p className='mt-[10px] md:mt-[20px]'>
              a{' '}
              <span className='font-bold text-black dark:text-concrete'>
                front-end developer
              </span>{' '}
              from Colombia with love of beating personal beats.
            </p>
            <p className='pt-4'>
              Big believer in lifelong learning, and always looking to apply my
              skills in a continuous learning process.
            </p>
          </div>
        </section>

        {/* POSTS */}
        <main className='mt-[20px] md:mt-[50px]'>
          <h2 className='text-2xl text-black font-bold md:text-4xl dark:text-concrete'>
            Latests Posts
          </h2>
          <BlogCard posts={posts} />
        </main>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 4)
    .map((post) => post.meta);

  return {
    props: { posts },
  };
}

export default Home;
