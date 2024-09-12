import React from 'react'
import Emoji from '@/util/Emoji'

const tagListTest = [
	{
		id: "test1",
		name : "TEST1"
	},
	{
		id: "test2",
		name : "TEST2"
	},
	{
		id: "test3",
		name : "TEST3"
	}
]

const TagList = () => {
	return (
		<>
			<div className="hidden p-1 mb-3 lg:block">
				<Emoji>🏷️</Emoji>Tags
			</div>
			<div className="flex mb-6 gap-1 overflow-scroll no-scrollbar lg:block">
				{tagListTest.map((key) => (
					<a key={key.id} className='block p-1 pl-4 pr-4 mt-1 mb-1 rounded-xl text-sm shrink-0 cursor-pointer hover:bg-slate-200'>{key.name}</a>
				))}
			</div>
		</>
	)
}

export default TagList


