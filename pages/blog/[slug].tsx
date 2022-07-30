import Head from 'next/head';
import MDXComponenets from '../../components/blog/MDXComponents';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostFromSlug, getSlugs } from '../api/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { MDXPost } from '../../lib/types';

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <div className='px-[1.25rem] mt-[30px]'>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <h1>{post.meta.title}</h1>
      <MDXRemote {...post.source} components={{ ...MDXComponenets } as any} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
      format: 'mdx',
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
