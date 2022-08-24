import React from 'react';

import Image from 'next/image';

const CartCard = ({ product, onPress }) => {
	return (
		<div className='flex h-full py-5 items-center border-b justify-between'>
			<div onClick={onPress} className='w-20 relative flex justify-center'>
				<Image src='/assets/icons/close.svg' width={24} height={24} />
			</div>
			<div className='flex flex-col justify-start'>
				{product.title && <p className='w-96 py-2'>{product.title}</p>}
				{product.color && (
					<p className='w-96 font-light py-2'>Color: {product.color}</p>
				)}
				{product.sku && (
					<p className='w-96 font-light py-2'>Dimension: {product.sku}</p>
				)}
				{product.weight && (
					<p className='w-96 font-light py-2'>Weight: {product.weight}</p>
				)}
			</div>
			<p className='w-56 text-xl'>$ {product.price}</p>
		</div>
	);
};

export default CartCard;
