import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

const CategoryCard = ({ post }) => {
	return (
		<Link href={`/post/${post.slug}`}>
			<div className="grid grid-cols-7 min-h-full transition duration-500 transform hover:-translate-y-1">
				<div className="col-span-2 relative mr-2">
					<Image
						src={post.featuredImage.url}
						alt={post.title}
						style={{ objectFit: 'cover' }}
						fill
						loading="lazy"
						aria-hidden="true"
					/>
				</div>
				<div className="col-span-5 mr-4 border-b border-gray-500 flex flex-col justify-between">
					<h3 className="text-md font-semibold mb-2">{post.title}</h3>
					<p className="text-md mb-1">
						{post.excerpt.length > 16
							? post.excerpt.slice(0, 150) + '...'
							: post.excerpt}
					</p>
					<div className="text-md text-gray-500 flex justify-between">
						<p>{post.author.name}</p>
						<p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default CategoryCard;
