import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CartCard } from '../../components';
import useStore from '../../store';

const CartScreen = () => {
	const { cart, removeFromCart } = useStore();
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		let total = 0;
		cart.forEach(item => {
			total += item.price;
		});
		setSubTotal(total.toFixed(2));
	}, [cart]);

	return (
		<div className='w-full  h-full py-20'>
			{cart.length > 0 ? (
				<>
					{/* header */}
					<div className='w-full px-36 py-10 flex gap-2'>
						<p className='text-3xl font-bold text-[#1D1F1F]'>Shopping Cart</p>
						<p>({cart.length})</p>
					</div>

					<div className='w-full h-full px-36 flex gap-5 items-start justify-center'>
						{/* left section */}
						<div className='w-[930px] h-full'>
							<div className='w-full h-full border'>
								<div className='flex h-20 items-center border-b justify-between'>
									<p className='w-20'></p>
									<p className='w-96'>Products</p>
									<p className='w-56'>Total</p>
								</div>
								{cart.map((product, index) => (
									<CartCard
										key={index}
										product={product}
										onPress={() => removeFromCart(product.id)}
									/>
								))}
							</div>
							<Link href={'/'}>
								<div className='flex items-center pt-4 gap-2 relative'>
									<Image src='/assets/icons/arrow.svg' width={24} height={24} />
									<p className='cursor-pointer'>Continue Shopping</p>
								</div>
							</Link>
						</div>
						{/* right section */}
						<div className='w-[450px] h-full'>
							<div className='w-full h-full border flex flex-col items-center'>
								<p className='pt-5 pl-5 font-bold text-xl w-full'>Summary</p>
								<div className='pt-3 px-5 w-full flex items-center justify-between'>
									<p className='font-light text-lg'>Subtotal</p>
									<p className='font-bold text-lg '>$ {subTotal}</p>
								</div>
								<div className='pt-3 w-full px-5 flex items-center justify-between'>
									<p className='font-light text-lg'>Shipping</p>
									<p className='font-bold text-lg '>Free</p>
								</div>
								<div className='my-3 w-11/12 h-[1px]  bg-[#E3E3E3]'></div>
								<p className=' pl-5 font-normal text-[#8f8e8e] text-lg w-full'>
									Discount Code
								</p>
								<div className='pt-3 w-full px-5 flex items-center gap-3'>
									<div className='w-[284px] h-[48px] border rounded-full'>
										<input
											type='text'
											className='w-full h-full bg-input focus:outline-none pl-4 border-none'
											placeholder='Enter your code'
										/>
									</div>
									<div className='w-[114px] h-[48px] bg-[#E9672B] flex font-light justify-center items-center rounded-full text-white'>
										Apply
									</div>
								</div>
								<div className='my-5 w-11/12 h-[1px]  bg-[#E3E3E3]'></div>
								<div className='pt-3 w-full px-5 flex items-center justify-between'>
									<p className='font-light text-lg'>Total</p>
									<p className='font-bold text-lg '>$ {subTotal}</p>
								</div>
								<div className='w-11/12 h-[48px] bg-[#1D1F1F] flex justify-center items-center text-white font-light rounded-full my-5'>
									Proceed to Checkout
								</div>
								<div className='flex items-center mb-5 justify-center gap-4'>
									<Image
										src='/assets/icons/ca-paypal.svg'
										width={40}
										height={40}
									/>
									<Image
										src='/assets/icons/ca-visa.svg'
										width={40}
										height={40}
									/>
									<Image
										src='/assets/icons/ca-american.svg'
										width={40}
										height={40}
									/>
									<Image
										src='/assets/icons/ca-card.svg'
										width={40}
										height={40}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className='w-full h-[70vh] flex flex-col items-center justify-center relative'>
					<Image src='/assets/icons/empty.svg' width={200} height={200} />
					<p className='text-[#1D1F1F] text-xl'>Your shopping cart is empty</p>
					<Link href={'/'}>
						<div className='w-[410px] cursor-pointer h-[48px] rounded-full text-white bg-[#E9672B] flex justify-center items-center font-light my-10'>
							Continue Shopping
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default CartScreen;
