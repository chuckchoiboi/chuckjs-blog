import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => {
	return (
		<Link
			href={`/post/${post.slug}`}
			className="transition duration-500 transform hover:-translate-y-1"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-3 gap-1">
					<div className="col-span-1">
						<Image
							src={post.featuredImage.url}
							alt={post.title}
							width="300"
							height="200"
							aria-hidden="true"
							className="rounded"
						/>
					</div>

					<div className="col-span-2 ml-5">
						<div className="flex flex-col gap-2 justify-between ">
							<h3 className="font-semibold transition duration-500 ease hover:text-opacity-20">
								{' '}
								{post.title.length > 51
									? post.title.slice(0, 51) + '...'
									: post.title}
							</h3>

							<div className="flex justify-between">
								<p className="inline text-gray-500 text-md">
									{post.author.name}
								</p>
								<time
									className="inline text-gray-500 text-md"
									datetime={moment(post.createdAt).format(
										'MMM DD, YYYY'
									)}
								>
									{moment(post.createdAt).format(
										'MMM DD, YYYY'
									)}
								</time>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default FeaturedPostCard;
