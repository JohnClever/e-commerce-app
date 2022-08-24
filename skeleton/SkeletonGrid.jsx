import React from 'reactn';

const SkeletonGrid = () => {
	return (
		<div className='w-[250px] h-[380px] animate-pulse  flex flex-col items-center float-left'>
			<div className='w-[200px] h-[150px] mt-10 bg-gray-100 flex justify-center items-center'></div>
			<div className='w-full flex flex-col mt-2 justify-center items-center'>
				<p className='mt-2 w-[200px] bg-gray-100 h-[20px] '></p>
				<p className='mt-2 w-[200px] bg-gray-100 h-[20px] '></p>
				<div className='flex items-center gap-5 pb-3'>
					<p className='bg-gray-100 w-10 h-8 mt-3'></p>
					<p className='bg-gray-100 w-10 h-8 mt-3'></p>
				</div>
				<p className='bg-gray-100 w-28 h-4 pt-4 mt-3'></p>
			</div>
		</div>
	);
};

export default SkeletonGrid;
