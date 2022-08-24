import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<div className='w-full bg-[#1D1F1F] h-[432px] px-36 flex flex-col justify-center'>
			<div className='w-full mt-20 flex items-center justify-center'>
				<div className='flex h-56 flex-col items-start relative'>
					{/* logo */}
					<Image
						src={'/assets/icons/logo-white.svg'}
						width={123}
						height={42}
						objectFit='contain'
					/>
					<p className='pt-10 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
						Address: 17 Princess Road, London, Greater London NW1 8JR, UK
					</p>
					<p className='pt-3 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
						Phone: (800) 8001-8588, (0600) 874 548
					</p>
					<p className='pt-3 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
						Email: info@gmail.com
					</p>
					<div className='flex items-center gap-5 pl-2 pt-10'>
						<Image src='/assets/icons/facebook.svg' width={24} height={24} />
						<Image src='/assets/icons/google.svg' width={24} height={24} />
						<Image src='/assets/icons/insta.svg' width={24} height={24} />
						<Image src='/assets/icons/twitter.svg' width={24} height={24} />
					</div>
				</div>
				<div className='flex flex-col h-56 items-start relative ml-24'>
					<p className='pl-4 text-[#fbf8f5] font-medium text-sm'>Company</p>
					<div className='flex items-center gap-10'>
						<div className='flex flex-col items-start justify-start  '>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								About Us
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Shop
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Features
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Sale
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Contact
							</p>
						</div>
						<div className='flex flex-col items-start justify-start  '>
							<p className='-mt-4 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Shipping
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Help
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								Privacy Policy
							</p>
							<p className='pt-5 pl-4 text-[#fbf8f5c7] font-thin text-sm'>
								FAQs
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col h-56 items-start relative ml-24'>
					<p className='pl-4 text-[#fbf8f5] font-medium text-sm'>Newsletter</p>
					<div className='flex flex-col items-start justify-start  '>
						<p className='py-5 pl-4 text-[#fbf8f5c7] font-thin text-sm max-w-[450px]'>
							Sign up for our Newsletter to get more events, promotions {'&'}{' '}
							news from us!
						</p>
						<div className='w-[450px]  h-[48px] bg-[#e3e3e311] rounded-full flex items-center justify-between'>
							<input
								type='text'
								placeholder='Enter your email!'
								className='bg-input focus:outline-none text-white ma border-none pl-4 w-full h-full rounded-full'
							/>
							<div className='w-[52px] h-[48px] rounded-full bg-[#E9672B] flex justify-center items-center relative'>
								<Image src='/assets/icons/send.svg' width={24} height={24} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full flex items-end h-24 justify-between '>
				<p className=' text-[#fbf8f5] pl-4 font-thin text-sm'>
					Copyright © All rights Reserved
				</p>
				<div className='flex items-center gap-5 pr-20'>
					<Image src='/assets/icons/visa.svg' width={50} height={32} />
					<Image src='/assets/icons/mastercard.svg' width={50} height={32} />
					<Image src='/assets/icons/paypal.svg' width={50} height={32} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
