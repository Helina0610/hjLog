import React from 'react'

const OrderButtons = () => {
	return (
		<div className='flex gap-2 text-sm'>
			<a className='cursor-pointer text-gray-800'>Desc</a>
			<a className='cursor-pointer text-gray-800'>Asc</a>
		</div>
	)
}

export default OrderButtons
