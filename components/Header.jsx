import Link from 'next/link';

const Header = () => {
	return (
		<div className="bg-yellow-400 sticky top-0 z-50 shadow-md">
			<div className="container mx-auto px-10 mb-8">
				<div className="w-full inline-block py-4">
					<div className="float-left block">
						<Link href="/">
							<span className="cursor-pointer font-bold text-4xl text-black">
								ChuckJS
							</span>
						</Link>
					</div>
					<div className="float-right mt-2 align-middle ml-4 font-semibold cursor-pointer transition duration-500 transform hover:-translate-y-1">
						<Link href="https://www.linkedin.com/in/chuckchoi/">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
								className="h-8 max-h-8"
							/>
						</Link>
					</div>
					<div className="float-right mt-2 align-middle ml-4 font-semibold cursor-pointer transition duration-500 transform hover:-translate-y-1">
						<Link href="https://github.com/chuckchoiboi">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
								className="h-8 max-h-8"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
