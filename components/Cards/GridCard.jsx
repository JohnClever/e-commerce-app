import React, { useGlobal } from 'reactn';
import Image from 'next/image';
import { useRouter } from 'next/router';

const GridCard = ({ product }) => {
	const router = useRouter();
	  const [, setCurrentProduct] = useGlobal('currentProduct');


	const handleProductView = () => {
		setCurrentProduct(product);
		router.push(`/${product.id}`);
	};

	return (
		<div className='w-[250px] h-[380px] flex flex-col items-center float-left'>
			<div className='w-[240px] h-[200px] flex justify-center items-center'>
				<Image
					src={product.images_urls[0]}
					width={200}
					height={250}
					objectFit='contain'
					placeholder='blur'
					blurDataURL={product.images_urls[0]}
				/>
			</div>
			<div className='w-full flex flex-col justify-center items-center'>
				<p className='pt-1 text-[#5D5F5F] text-lg font-extralight max-w-[200px] h-[70px] text-center overflow-hidden'>
					{product.title}
				</p>
				<div className='flex items-center gap-5 pb-3'>
					<p className='text-[#DA3E31] text-base font-medium'>
						${product.price}
					</p>
					<p className='text-[#B6B8B8] font-light line-through'>$69.12</p>
				</div>
				<p
					onClick={handleProductView}
					className='text-[#E9672B] cursor-pointer underline decoration-[#E9672B] pt-3'
				>
					Add to Cart
				</p>
				
			</div>
		</div>
	);
};

export default GridCard;
