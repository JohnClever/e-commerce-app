import React from 'react';
import Image from 'next/image';

const ListCard = ({product}) => {
	return (
		<div className='w-full flex items-center gap-5 mt-5'>
			<div className='w-[240px] h-[200px]  relative flex justify-center items-center'>
				<Image
					src={product.images_urls[0]}
					width={200}
					height={250}
					objectFit='contain'
					placeholder='blur'
					blurDataURL={product.images_urls[0]}
				/>
			</div>
			<div className='w-full h-[200px] flex flex-col justify-start'>
				<p className='pt-3 text-[#5D5F5F] text-lg font-extralight'>
					{product.title}
				</p>
				<div className='flex items-center gap-5 py-2'>
					<p className='text-[#DA3E31] text-base font-medium'>${product.price}</p>
					<p className='text-[#B6B8B8] font-light line-through'>$69.12</p>
				</div>
				<p className='text-[#71767C] text-sm max-h-7 mb-2'>
					{product.description}
				</p>
				<div className='w-36 h-12 bg-[#E9672B] mt-8 rounded-full flex justify-center items-center text-white'>
					Add to Cart
				</div>
			</div>
		</div>
	);
};

export default ListCard;
