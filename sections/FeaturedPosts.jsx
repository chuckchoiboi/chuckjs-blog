import { PostCard, FeaturedPostCard } from '../components';

const FeaturedPosts = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="lg:col-span-8 col-span-1">
				<div className="text-xl mb-8 font-semibold pb-4 border-b border-gray-500 block lg:hidden">
					<h2>Featured Posts</h2>
				</div>
				<PostCard post={posts[0]} key={posts[0].title} />
			</div>
			<div className="lg:col-span-4 col-span-1 flex flex-col p-0 lg:p-8 pb-12 mb-8">
				<div className="text-xl mb-8 font-semibold pb-4 border-b border-gray-500 hidden lg:block">
					<h2>Featured Posts</h2>
				</div>
				<div className="flex flex-col justify-between h-full gap-4">
					{posts.slice(1, 5).map((post) => (
						<FeaturedPostCard post={post} key={post.title} />
					))}
				</div>
			</div>
		</div>
	);
};
export default FeaturedPosts;
