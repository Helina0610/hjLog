import React from 'react'
import Emoji from '../../../util/Emoji'
import Image from 'next/image'

const ProfileCard = () => {
	return (
		<div>
			<div className='p-1 mb-3'>
				<Emoji>💻</Emoji> Profile
			</div>
			<div className="mb-9 rounded-2xl w-full bg-white md:p-1 lg:p-1">
				<div className='relative w-full'>
					<Image src="/profile.png" alt='hello' width={400} height={400}></Image>
				</div>
				<div className='flex p-2 flex-col items-center'>
					<div className='text-xl font-mono font-bold'>Yoon Hongju</div>
					<div className='mb-4 text-sm text-gray-950'>Fullstack Developer</div>
					<div className='mb-2 text-sm'>안녕!</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCard
