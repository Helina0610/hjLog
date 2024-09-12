import React from 'react'
import CategorySelect from './CategorySelect'
import OrderButtons from './OrderButtons'

const FeedHeader = () => {
	return (
		<div className='flex mb-4 justify-between items-center border-b border-gray-300'>
			<CategorySelect/>
			<OrderButtons/>
			{/* ListOrGallary -> 리스트 형식과 갤러리 형식 변경 */}
		</div>
	)
}

export default FeedHeader
