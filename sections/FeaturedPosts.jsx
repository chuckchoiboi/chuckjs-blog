import { PostCard, FeaturedPostCard } from '../components';

const FeaturedPosts = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div className="lg:col-span-8 col-span-1">
				<PostCard post={posts[0]} key={posts[0].title} />
			</div>
			<div className="lg:col-span-4 col-span-1 flex flex-col">
				<div className="text-xl mb-8 font-semibold border-b border-black pb-4">
					<h2>Featured Posts</h2>
				</div>
				<div className="flex flex-col justify-between h-full mb-8">
					{posts.slice(1, 5).map((post) => (
						<FeaturedPostCard post={post} key={post.title} />
					))}
				</div>
			</div>
		</div>
	);
};
export default FeaturedPosts;
