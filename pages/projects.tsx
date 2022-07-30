import Head from 'next/head';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='px-[1.25rem]'>
      <Head>
        <title>Projects - Cesar Gomez</title>
        <meta name='description' content='Front-end developer projects page' />
      </Head>

      <h2 className='my-[50px] text-3xl text-black font-normal md:text-5xl dark:text-white'>
        Projects
      </h2>

      <main className='mt-[50px]'>
        <p>projects here!</p>
      </main>
    </div>
  );
};

export default Projects;
