import React from 'react';
import Image from 'next/image';

import useStore from '../../store';
import Link from 'next/link';

const Header = () => {
	const {cart} = useStore();
	return (
		<div className='w-full h-20 flex items-center justify-between px-36 fixed z-30 shadow-sm bg-white overflow-hidden'>
			{/* logo */}
			<Image
				src={'/assets/icons/logo.svg'}
				width={123}
				height={42}
				objectFit='contain'
			/>
			{/* content right */}
			<div className='flex items-center gap-5 relative'>
				<Image src='/assets/icons/profile.svg' width={24} height={24} />
				<Link href={'/cart'}>
					<div className='flex gap-1 items-center'>
						<Image src='/assets/icons/cart.svg' width={24} height={24} />
						<div className='w-5 h-5 rounded-full bg-[#DE5212] flex justify-center items-center text-white text-sm'>
							{cart.length}
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
