import Head from 'next/head';
import { getHomePageData } from '../services';
import { PostsCarousel, FeaturedPosts, CategoryPosts } from '@/sections';

export default function Home({ posts, featuredPosts, categories }) {
	return (
		<div className="container mx-auto px-10 mb-8">
			<Head>
				<title>ChuckJS Blog</title>
				<link rel="stylesheet" href="/favicon.ico" />
			</Head>
			<FeaturedPosts posts={featuredPosts} />
			{categories.map((category, index) => (
				<CategoryPosts
					category={category}
					key={category.slug}
					index={index}
				/>
			))}
			<div className="items-baseline flex gap-1 mb-6 mx-2">
				<h2 className="text-3xl font-semi-bold flex-grow items-baseline flex gap-1 m-0">
					All Posts
					<span
						className="h-[3px] flex-grow border-0 block"
						style={{ backgroundColor: 'black' }}
					></span>
				</h2>
			</div>
			<PostsCarousel posts={posts} />
		</div>
	);
}

export async function getStaticProps() {
	const HomePageData = (await getHomePageData()) || [];

	return {
		props: {
			posts: HomePageData.postsConnection.edges,
			featuredPosts: HomePageData.posts,
			categories: HomePageData.categories,
		},
	};
}
