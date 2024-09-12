import Emoji from '@/util/Emoji'
import React from 'react'

const SearchInput = () => {
	return (
		<div className='mb-4 md:mb-4'>
			<div className='p-1 mb-3'>
			<Emoji>🔎</Emoji> Search
			</div>
			<div>
				<input type='text' placeholder='Search Keyword...' className="pt-2 pb-2 pl-5 pr-5 rounded-2xl outline-none w-full bg-slate-200"></input>
			</div>
		</div>
	)
}

export default SearchInput
