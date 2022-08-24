import React, { useState } from 'react';
import Image from 'next/image';

const Category = ({ label, onPress }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			className='flex items-center gap-2 relative cursor-pointer'
			onClick={() => {
				setActive(!active);
				onPress(!active);
			}}
		>
			{active && <Image src={'/assets/icons/line.svg'} width={20} height={4} />}
			<p className={`text-base ${active ? 'text-[#DE5212]' : 'text-black/70'}`}>
				{label}
			</p>
		</div>
	);
};

export default Category;
