import { PostCard, FeaturedPostCard } from '../components';

const FeaturedPosts = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="lg:col-span-8 col-span-1">
				<PostCard post={posts[0]} key={posts[0].title} />
			</div>
			<div className="lg:col-span-4 col-span-1 flex flex-col p-0 lg:p-8 pb-12 mb-8">
				<div className="text-xl mb-8 font-semibold pb-4 border-b border-gray-500">
					<h2>Featured Posts</h2>
				</div>
				<div className="flex flex-col justify-between h-full">
					{posts.slice(1, 5).map((post) => (
						<FeaturedPostCard post={post} key={post.title} />
					))}
				</div>
			</div>
		</div>
	);
};
export default FeaturedPosts;
