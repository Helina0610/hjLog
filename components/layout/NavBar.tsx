import Link from "next/link"
import React from 'react'

const NavBar = () => {
	const links = [
		{
			id : 1,
			name : 'About',
			to : '/about'
		}
	]
	return (
		<div className="shrink-0">
			<ul className="flex flex-row">
				{links.map((link) => (
					<li key={link.id} className="block ml-4 ">
						<Link href={link.to} className="no-underline">{link.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavBar
