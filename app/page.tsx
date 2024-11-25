import Navbar from "./components/navigation/navbar";
import ItemHolder from "./components/item/itemholder";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			{/* <main className="flex-1  flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-4xl px-4 text-center space-y-4">
					<h1 className="text-6xl font-bold text-gray-900">Purano Bajar</h1>
					<p className="text-xl text-gray-600">
						The best place to buy your favorite products
					</p>
					<div className="pt-4">
						<button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
							Start Shopping
						</button>
					</div>
				</div>
			</main> */}
			<div className="pt-44 flex-1 h-12 flex flex-col items-center justify-center bg-gray-50">
				<h1 className="text-4xl font-bold text-center text-gray-900">
					Purano Bajar
				</h1>
				<p className="text-xl text-center text-gray-600">
					The best place to buy your favorite products
				</p>
			</div>
			<div className="grid grid-cols-4 gap-16 px-16  pt-24 bg-gray-50 flex-1">
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
				<ItemHolder
					productName="Product Name"
					price={99.99}
					location="New York"
				/>
			</div>

			{/* <div className=" flex flex-col items-center justify-center bg-gray-50">
				<div className="max-w-4xl px-4 text-center space-y-4">
					<h1 className="text-6xl font-bold text-gray-900">
						The best place to buy your favorite products
					</h1>
					<p className="text-xl text-gray-600">
						The best place to buy your favorite products
					</p>
				</div>
			</div> */}
			{/* <div className="flex flex-col items-center h-screen justify-center">
				hi
			</div> */}
		</div>
	);
}
