import React, { useEffect, useState, useGlobal } from 'reactn';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useStore from '../../store';

const DetailScreen = () => {
	const { addToCart } = useStore();
	const [currentProduct] = useGlobal('currentProduct');
	const [quantity, setQuantity] = useState(0);
	const router = useRouter();

	return (
		<div className='w-full  h-full py-20'>
			{/* header */}
			<div className='w-full h-[64px] flex items-center bg-[#F4F4F5] px-36 font-light text-[#5D5F5F]'>
				<Link href='/'>
					<a>
						Home {'>'} {currentProduct?.title}
					</a>
				</Link>
			</div>
			{/* details */}
			<div className='w-full px-36 flex items-center gap-10'>
				{/* images section */}
				<div className='w-[700px] grid grid-cols-2 gap-10 relative'>
					<Image
						src={currentProduct?.images_urls[0]}
						width={200}
						height={200}
						objectFit='contain'
					/>
					<Image
						src={currentProduct?.images_urls[1]}
						width={200}
						height={200}
						objectFit='contain'
					/>
					<Image
						src={currentProduct?.images_urls[1]}
						width={200}
						height={200}
						objectFit='contain'
					/>

					<Image
						src={currentProduct?.images_urls[0]}
						width={200}
						height={200}
						objectFit='contain'
					/>
				</div>
				{/* detail section */}
				<div className='h-full mt-20'>
					<p className='text-[#1D1F1F] font-light text-xl'>
						{currentProduct?.title}
					</p>
					<div className='flex items-center gap-5 py-5'>
						<p className='text-[#DE5212] text-4xl font-medium'>
							${currentProduct?.price}
						</p>
						<p className='text-[#B6B8B8] text-xl font-extralight line-through'>
							$69.12
						</p>
					</div>
					<p className='text-[#71767C] max-w-[500px] text-sm'>
						{currentProduct?.description}
					</p>
					<div className='flex items-center gap-5 py-10'>
						<div className='w-16 h-16 rounded-full flex flex-col justify-center items-center bg-[#1D1F1F]'>
							<p className='text-white text-lg font-normal'>06</p>
							<p className='text-white text-sm -mt-2 font-light'>Days</p>
						</div>
						<div className='w-16 h-16 rounded-full flex flex-col justify-center items-center bg-[#1D1F1F]'>
							<p className='text-white text-lg font-normal'>12</p>
							<p className='text-white text-sm -mt-2 font-light'>Hrs</p>
						</div>
						<div className='w-16 h-16 rounded-full flex flex-col justify-center items-center bg-[#1D1F1F]'>
							<p className='text-white text-lg font-normal'>50</p>
							<p className='text-white text-sm -mt-2 font-light'>Mins</p>
						</div>
						<div className='w-16 h-16 rounded-full flex flex-col justify-center items-center bg-[#1D1F1F]'>
							<p className='text-white text-lg font-normal'>48</p>
							<p className='text-white text-sm -mt-2 font-light'>Secs</p>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<p className='font-light'>Quantity</p>
						<div className='w-[175px] h-[48px] border rounded-full flex items-center justify-between px-3'>
							<div
								onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : '')}
							>
								<Image
									src='/assets/icons/decrease.svg'
									width={24}
									height={24}
									objectFit='contain'
								/>
							</div>
							<p>{quantity}</p>
							<div onClick={() => setQuantity(quantity + 1)}>
								<Image
									src='/assets/icons/increase.svg'
									width={24}
									height={24}
									objectFit='contain'
								/>
							</div>
						</div>
						<div
							onClick={() => {
								addToCart(currentProduct);
								router.push('/');
							}}
							className='w-[244px] cursor-pointer h-[48px] rounded-full bg-[#DE5212] flex items-center justify-center text-white font-light'
						>
							Add to Cart
						</div>
					</div>
					<div className='flex justify-center mt-5 rounded-full items-center w-[570px] h-[48px] font-light text-white bg-[#263437]'>
						Buy It Now
					</div>
					<div className='flex flex-col justify-center my-5'>
						<div className='flex items-center gap-3'>
							<Image
								src='/assets/icons/bags.svg'
								width={40}
								height={40}
								objectFit='contain'
							/>
							<p className='font-thin'>
								<span className='font-medium'>Other people want this. 138</span>{' '}
								people have this in their carts right now.
							</p>
						</div>
						<p className='font-thin pt-3'>
							Want is delivered by
							<span className='font-medium'> Monday, 22 July? </span> Order
							within<span className='font-medium'> 20 Hrs: 0 Min: 49 Secs</span>{' '}
						</p>
					</div>
					<div className='flex items-center gap-5'>
						<p className='font-light'>Share</p>
						<Image
							src='/assets/icons/fb-button.svg'
							width={113}
							height={32}
							objectFit='contain'
						/>
						<Image
							src='/assets/icons/tw-button.svg'
							width={113}
							height={32}
							objectFit='contain'
						/>
						<Image
							src='/assets/icons/go-button.svg'
							width={113}
							height={32}
							objectFit='contain'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailScreen;
