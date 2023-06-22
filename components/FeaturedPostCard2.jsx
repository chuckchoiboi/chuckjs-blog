import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard2 = ({ post }) => {
	return (
		<Link
			href={`/post/${post.slug}`}
			className="transition duration-500 transform hover:-translate-y-1"
		>
			<div class="container mx-auto">
				<div class="grid grid-cols-3 gap-1">
					<div class="col-span-1">
						<Image
							src={post.featuredImage.url}
							alt={post.title}
							width="300"
							height="200"
							aria-hidden="true"
							className="rounded"
						/>
					</div>

					<div class="col-span-2 ml-5">
						<div className="flex flex-col gap-2 justify-between ">
							<h3 class="font-semibold transition duration-500 ease hover:text-opacity-20">
								{' '}
								{post.title.length > 51
									? post.title.slice(0, 51) + '...'
									: post.title}
							</h3>

							<div class="flex justify-between">
								<p class="inline text-gray-500 text-md">
									{post.author.name}
								</p>
								<time
									class="inline text-gray-500 text-md"
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
export default FeaturedPostCard2;
