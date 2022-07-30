import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type NavItems = {
  href: string;
  text: string;
};

export type Post = {
content: string;
meta: PostMeta;
}

export type PostMeta = {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
}

export type MDXPost = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  meta: PostMeta;
};