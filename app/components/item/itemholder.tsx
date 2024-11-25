import Image from "next/image";

interface ItemHolderProps {
	productName: string;
	price: number;
	location: string;
}

export default function ItemHolder({
	productName,
	price,
	location,
}: ItemHolderProps) {
	return (
		<div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
			<div className="w-full h-48">
				<Image
					src="/momo.png"
					alt="Product Image"
					width={200}
					height={200}
					className="rounded-2xl"
				/>
			</div>
			<div className="p-4 w-full">
				<h2 className="text-xl font-bold text-gray-900">{productName}</h2>
				<div className="mt-2 flex justify-between items-center">
					<span className="text-lg font-semibold text-gray-700">${price}</span>
					<span className="text-sm text-gray-500">Location: {location}</span>
				</div>
			</div>
		</div>
	);
}
