import React from 'react';

const SkeletonList = () => {
	return (
		<div className='w-full flex items-center animate-pulse gap-5 mt-5'>
			<div className='w-[200px] h-[150px] mt-10 bg-gray-200 flex justify-center items-center'></div>
			<div className='w-full flex flex-col mt-2 justify-start'>
				<p className='mt-2 w-4/12 bg-gray-200 h-[20px] '></p>
				<div className='flex items-center gap-5 py-2'>
					<p className='bg-gray-200 w-10 h-8 mt-3'></p>
					<p className='bg-gray-200 w-10 h-8 mt-3'></p>
				</div>
				<p className='mt-2 w-9/12 bg-gray-200 h-[10px] '></p>
				<p className='mt-2 w-9/12 bg-gray-200 h-[10px] '></p>
				<p className='bg-gray-200 w-28 h-6 pt-4 mt-3'></p>
			</div>
		</div>
	);
};

export default SkeletonList;
