import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
	return (
		<Link href={`/post/${post.slug}`}>
			<div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-left transition duration-500 transform hover:-translate-y-1">
				<div className="relative overflow-hidden shadow-md pb-80 mb-6">
					<Image
						src={post.featuredImage.url}
						alt={post.title}
						className="object-top absolute shadow-lg rounded-t-lg lg:rounded-lg"
						priority
						fill
						sizes="100vw"
					/>
				</div>
				<div className="lg:p-0 px-8">
					<h1 className="transition duration-100 mb-8 cursor-pointer text-3xl font-semibold">
						{post.title}
					</h1>
					<p className="text-lg text-gray-700 font-normal mb-8">
						{post.excerpt}
					</p>
					<div className="mb-8 w-full">
						<div className="font-medium text-gray-700 mb-6">
							<span>
								{moment(post.createdAt).format('MMM DD, YYYY')}
							</span>
						</div>
						<div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
							<Image
								src={post.author.photo.url}
								alt={post.author.name}
								height={32}
								width={32}
								className="align-middle rounded-full"
							/>
							<p className="inline align-middle text-gray-700 ml-2 text-lg">
								{post.author.name}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PostCard;
