import { COLOR_TABLE } from '@/const/const'
import Link from 'next/link'
import React from 'react'


const Tags = () => {
	return (
	 <div className='flex flex-row flex-wrap gap-2 bg-white pl-4 pb-2'>
			<div className='' >
				{/*<Link href={`/tags/${name.toLowerCase()}`} passHref className=' hover:underline px-2 py-1 rounded-full font-normal text-sm ' style={{backgroundColor : COLOR_TABLE[color]}}>{name}</Link>*/}
				<Link href={""} passHref className='p-1 rounded-2xl text-sm font-normal cursor-pointer'style={{backgroundColor : COLOR_TABLE["blue"]}}>TEST</Link>
			</div>
			<div className='list-none' >
				{/*<Link href={`/tags/${name.toLowerCase()}`} passHref className=' hover:underline px-2 py-1 rounded-full font-normal text-sm ' style={{backgroundColor : COLOR_TABLE[color]}}>{name}</Link>*/}
				<Link href={""} passHref className='p-1 rounded-2xl text-sm font-normal cursor-pointer'style={{backgroundColor : COLOR_TABLE["blue"]}}>TEST</Link>
			</div>
    </div>
	)
}

export default Tags


// const StyledWrapper = styled.div`
//   padding-top: 0.25rem;
//   padding-bottom: 0.25rem;
//   padding-left: 0.5rem;
//   padding-right: 0.5rem;
//   border-radius: 50px;
//   font-size: 0.75rem;
//   line-height: 1rem;
//   font-weight: 400;
//   color: ${({ theme }) => theme.colors.gray10};
//   background-color: ${({ theme }) => theme.colors.gray5};
//   cursor: pointer;