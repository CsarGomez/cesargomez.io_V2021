import Link from 'next/link';
import { PostMeta } from '../../lib/types';

const BlogCard = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <div className='mt-[20px] leading-none'>
      {posts.map((post) => (
        <article
          key={post.id}
          className='px-[10px] py-2 border-b-2 border-b-concrete hover:bg-concrete dark:border-b-mine dark:hover:bg-mine hover:rounded-md'
        >
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h2 className='font-bold md:text-xl'>{post.title}</h2>
              <span className='font-taviraj text-gray dark:text-boulder'>
                {post.author} / {post.date}
              </span>
              <p className='mt-[2px] p-0 text-tundora dark:text-silver'>
                {post.excerpt}
              </p>
              <div className='flex flex-wrap mt-[5px]'>
                {post.tags.map((tag) => (
                  <p
                    key={tag}
                    className='mx-[2px] my-2 px-3 py-[2px] inline bg-alto text-tundora rounded-[5px] dark:bg-tundora dark:text-silver'
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogCard;
