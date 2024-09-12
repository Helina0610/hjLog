import React from 'react'
import Emoji from '../../../util/Emoji'
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai"
const ContactCard = () => {
	return (
		<>
			<div className='p-1 mb-3'>
				<Emoji>💬</Emoji> Contact
			</div>
			<div className='flex p-1 flex-col rounded-2xl bg-white'>
				<a href='' className='flex p-3 gap-3 items-center rounded-2xl text-gray-700 cursor-pointer hover:text-gray-900 hover:bg-slate-200'>
					<AiOutlineGithub className="text-2xl" />
					<div className='text-sm'>Github</div>
				</a>
				<a href='' className='flex p-3 gap-3 items-center rounded-2xl text-gray-700 cursor-pointer hover:text-gray-900 hover:bg-slate-200'>
					<AiOutlineMail className="text-2xl" />
					<div className='text-sm'>Gmail</div>
				</a>
				<a href='' className='flex p-3 gap-3 items-center rounded-2xl text-gray-700 cursor-pointer hover:text-gray-900 hover:bg-slate-200'>
					<AiFillLinkedin className="text-2xl" />
					<div className='text-sm'>LinkedIn</div>
				</a>
			</div>
		</>
	)
}

export default ContactCard
