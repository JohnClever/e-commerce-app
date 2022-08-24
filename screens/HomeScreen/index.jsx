import React, { useState, useEffect } from 'react';

import Image from 'next/image';

import { Category, GridCard, ListCard } from '../../components';
import { categories } from '../../data';
import fetchProducts from '../../pages/api/fetchProducts';
import { SkeletonGrid, SkeletonList } from '../../skeleton';

const HomeScreen = () => {
	const [category, setCategory] = useState('');
	const [display, setDisplay] = useState('grid');
	const [limit, setLimit] = useState(10);
	const [loading, setLoading] = useState(true);
	const [price, setPrice] = useState(null);
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		const response = await fetchProducts.fetchProduct();
		if (!response.ok) return;

		category.length > 2
			? price !== null
				? setProducts(
						response.data.filter(
							product =>
								product.product_type == category && price > product.price,
						),
				  )
				: setProducts(
						response.data.filter(product => product.product_type == category),
				  )
			: price !== null
			? setProducts(response.data.filter(product => price > product.price))
			: setProducts(response.data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [category, price]);

	return (
		// main container
		<div className='w-full  h-full'>
			{/* hero section */}
			<div className='w-full pt-20'>
				<div className='w-full h-96 bg-[url("/assets/images/hero.svg")] bg-no-repeat bg-cover bg-center flex-col flex justify-center items-center'>
					<p className='text-center text-black/70'>Home {'>'} Shop right</p>
					<p className='py-4 text-center font-bold text-4xl'>Home Decor</p>
					<p className='text-center'>
						Shop our newest items, made with love by the world’s best artisans.
					</p>
				</div>
			</div>
			{/* content section */}
			<div className='w-full h-full px-36 pt-5 flex'>
				{/* filter */}
				<div className='w-96 h-full'>
					<p className='text-2xl font-extralight'>Filter</p>

					<div className='w-full h-full pt-5'>
						<p className='font-medium text-base pb-3'>Categories</p>
						<div className='flex flex-col gap-3 justify-start pt-3'>
							{categories.map(item => (
								<Category
									key={item.id}
									label={item.label}
									onPress={active =>
										active ? setCategory(item.name) : setCategory('')
									}
								/>
							))}
						</div>
					</div>
				</div>
				{/* store */}
				<div className='w-full h-full '>
					<div className='w-full flex mb-10 items-center justify-between'>
						<div className='flex items-center gap-7'>
							<div className='flex gap-1 text-sm items-center'>
								Show -{' '}
								<select
									name='show'
									id='show'
									value={limit}
									onChange={e => setLimit(e.target.value)}
								>
									<option value={products.length}>All</option>
									<option value={10}>10</option>
									<option value={20}>20</option>
									<option value={30}>30</option>
									<option value={40}>40</option>
								</select>
							</div>
							<div className='flex gap-1 text-sm items-center'>
								Sort by -{' '}
								<span className='flex text-sm items-center relative gap-1 font-normal'>
									Price
									<select
										name='show'
										id='show'
										value={price}
										onChange={e => setPrice(e.target.value)}
										className='flex text-sm -mt-[1px] font-normal'
									>
										<option disabled selected>
											Filter Prices
										</option>
										<option value={50}>Less than 50usd</option>
										<option value={200}>Less than 200usd</option>
										<option value={500}>Less than 500usd</option>
										<option value={1000}>Less than 1000usd</option>
									</select>
								</span>
							</div>
						</div>
						<div className='flex items-center gap-7'>
							<div onClick={() => setDisplay('grid')}>
								{display == 'grid' ? (
									<Image
										src={'/assets/icons/grid-orange.svg'}
										width={24}
										height={24}
									/>
								) : (
									<Image
										src={'/assets/icons/grid-gray.svg'}
										width={24}
										height={24}
									/>
								)}
							</div>
							<div onClick={() => setDisplay('list')}>
								{display == 'list' ? (
									<Image
										src={'/assets/icons/list-orange.svg'}
										width={24}
										height={24}
									/>
								) : (
									<Image
										src={'/assets/icons/list-gray.svg'}
										width={24}
										height={24}
									/>
								)}
							</div>
						</div>
					</div>
					{loading ? (
						<div className='mb-10'>
							{Array(20)
								.fill()
								.map(item =>
									display == 'grid' ? (
										<SkeletonGrid key={item} />
									) : (
										<SkeletonList key={item} />
									),
								)}
						</div>
					) : (
						<div className='mb-10'>
							{products
								.slice(0, limit)
								.map((product, index) =>
									display == 'list' ? (
										<ListCard key={product.id + index} product={product} />
									) : (
										<GridCard key={product.id + index} product={product} />
									),
								)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
