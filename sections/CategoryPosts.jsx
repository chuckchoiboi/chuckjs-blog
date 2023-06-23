import { CategoryCard } from '@/components';
import Link from 'next/link';

const CategoryPosts = ({ category, index }) => {
	const categoryPosts = category.posts;
	const num = index % 4;
	const colors = ['#E11845', '#10b981', '#a855f7', '#FFFFFF'];

	return (
		<div className="pb-12 px-2">
			<div className="items-baseline flex gap-1 mb-1">
				<h2 className="text-3xl font-semi-bold flex-grow items-baseline flex gap-1 m-0">
					{category.name}
					<span
						className="h-[3px] flex-grow border-0 block"
						style={{ backgroundColor: `${colors[num]}` }}
					></span>
				</h2>
				<Link
					className="text-lg font-semi-bold hidden lg:block text-white bg-black rounded px-2 transition duration-500 ease hover:text-black hover:bg-transparent"
					href={`/category/${category.slug}`}
					rel="noopener noreferrer"
				>
					See more articles on {category.name}
				</Link>
			</div>

			<div className="grid grid-cols-1 mt-5">
				<ul className="grid grid-cols-2 gap-6">
					{categoryPosts.map((post) => (
						<li>
							<CategoryCard key={post.slug} post={post} />
						</li>
					))}
				</ul>

				<Link
					className="lg:hidden text-lg font-semi-bold text-center my-12 text-white bg-black rounded p-2 transition duration-500 ease hover:text-black hover:bg-transparent"
					href={`/category/${category.slug}`}
					rel="noopener noreferrer"
				>
					See more articles on {category.name}
				</Link>
			</div>
		</div>
	);
};
export default CategoryPosts;
