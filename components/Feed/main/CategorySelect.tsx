import React from 'react';
import { MdExpandMore } from 'react-icons/md';


const CategorySelect = () => {
	return (
		<div className='relative'>
			<div className='flex mt-2 mb-2 gap-1 items-center text-xl font-bold cursor-pointer'>
				{/* currentCategory */} Posts <MdExpandMore/>
			</div>
			<div className='absolute z-40 p-1 rounded-xl bg-gray-100 text-gray-700 shadow-lg'>

			</div>
		</div>
	)
}

export default CategorySelect
