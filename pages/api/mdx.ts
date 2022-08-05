import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';
import { Post } from '../../lib/types';

const POST_DIR = path.join(process.cwd(), 'data/blog');

export const getSlugs = (): string[] => {
	const paths = sync(`${POST_DIR}/*.mdx`);

	return paths.map(path => {
		const parts = path.split('/');
		const filename = parts[parts.length - 1];
		const [slug] = filename.split('.');
		return slug;
	});
};

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(POST_DIR, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const { data, content } = matter(source);

	return {
		content,
		meta: {
			id: data.id,
			title: data.title,
			author: data.author,
			date: data.date,
			excerpt: data.excerpt,
			tags: data.tags,
			slug,
		},
	};
};

export const getAllPosts = () => {
	const posts = getSlugs()
		.map(slug => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date < b.meta.date) return 1;
			if (a.meta.date > b.meta.date) return -1;
			return 0;
		});
	return posts;
};
