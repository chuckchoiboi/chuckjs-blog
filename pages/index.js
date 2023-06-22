import Head from 'next/head';
import { getPosts, getFeaturedPosts } from '../services';
import { PostsCarousel, FeaturedPosts } from '@/sections';

export default function Home({ posts, featuredPosts }) {
	return (
		<div className="container mx-auto px-10 mb-8">
			<Head>
				<title>ChuckJS Blog</title>
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<FeaturedPosts posts={featuredPosts} />
			<PostsCarousel />
		</div>
	);
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	const featuredPosts = (await getFeaturedPosts()) || [];

	return {
		props: { posts, featuredPosts },
	};
}
