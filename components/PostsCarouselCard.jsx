import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const PostsCarouselCard = ({ post }) => {
	return (
		<Link href={`/post/${post.node.slug}`}>
			<div className="relative h-72 transition duration-500 hover:opacity-100 opacity-80">
				<div
					className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
					style={{
						backgroundImage: `url('${post.node.featuredImage.url}')`,
					}}
				/>
				<div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
				<div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
					<p className="text-white mb-4 text-shadow font-semibold text-xs">
						{moment(post.node.createdAt).format('MMM DD, YYYY')}
					</p>
					<p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
						{post.node.title}
					</p>
					<div className="flex items-center absolute bottom-5 w-full justify-center">
						<Image
							unoptimized
							alt={post.node.author.name}
							height={30}
							width={30}
							className="align-middle drop-shadow-lg rounded-full"
							src={post.node.author.photo.url}
						/>
						<p className="inline align-middle text-white text-shadow ml-2 font-medium">
							{post.node.author.name}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostsCarouselCard;
