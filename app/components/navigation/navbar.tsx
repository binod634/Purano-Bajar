import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="fixed opacity-80 top-0 w-full bg-white py-4 px-8">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Image
					src="/logo.png"
					alt="Logo"
					width={60}
					height={60}
					className="h-full"
				/>
				<div className="relative flex-1 max-w-xl mx-16">
					<input
						type="text"
						placeholder="Search..."
						className="w-full text-black font-black   px-8 py-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-50"
					/>
					<svg
						className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>

				<div className="space-x-16 relative ">
					<button className="text-black hover:text-gray-600  font-bold group">
						Explore
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="ml-1 -mr-1 h-5 w-5 inline-block group-hover:rotate-180 transition-all duration-400 ease-in-out"
						>
							<path
								fillRule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clipRule="evenodd"
							/>
						</svg>
						<div className="absolute invisible opacity-0  group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[150px]">
							<a href="#" className="block px-4 py-2 hover:bg-gray-100">
								Electronics
							</a>
							<a href="#" className="block px-4 py-2 hover:bg-gray-100">
								Fashion
							</a>
							<a href="#" className="block px-4 py-2 hover:bg-gray-100">
								Home & Kitchen
							</a>
							<a href="#" className="block px-4 py-2 hover:bg-gray-100">
								Sports
							</a>
							<a href="#" className="block px-4 py-2 hover:bg-gray-100">
								Toys
							</a>
						</div>
					</button>
					<a href="#" className="text-black hover:text-gray-600 font-bold">
						About
					</a>
					<a href="#" className="text-black hover:text-gray-600 font-bold">
						Sign Up
					</a>
					<button className="font-black transition-all duration-400 ease-in-out hover:bg-gray-700 font-bol bg-black py-3 px-5 rounded-full text-white">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
}
