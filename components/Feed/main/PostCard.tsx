import Tags from '@/util/Tags'
import Link from 'next/link'
import React from 'react'

const PostCard = () => {
	return (
		//<article className='overflow-hidden relative mb-6 rounded-2xl  transition-shadow md:mb-8 hover:shadow-lg'>
		<article className='overflow-hidden relative mb-6 rounded-2xl transition-shadow md:mb-8 hover:shadow-lg'>
			<Link href={""}>
				{/* Category */}
				<div className='relative w-full bg-gray-300 pb-48'>
					Thumbnail
				</div>
				<div className='p-3 bg-white'>
					<header className='flex flex-col justify-between md:flex-row md:items-baseline'>
						<h2 className='mb-1 text-lg font-medium cursor-pointer md:text-xl'>Title</h2>
					</header>
					<div className='mb-4'>
						<div className='text-sm text-gray-400 md:ml-0'>2024.08.09</div>
					</div>
					<div className='mb-2'>
						<p className='hidden leading-8 text-gray-950 md:block'>안녕하세요!</p>
					</div>
				</div>
			</Link>
			<Tags></Tags>
		</article>
	)
}

export default PostCard
