import React, { ReactNode } from 'react'
import { Noto_Color_Emoji } from "next/font/google"

interface EmojiPros {
	className? : string,
	children? : ReactNode
}


const notoColorEmoji = Noto_Color_Emoji({
	weight : ["400"],
	subsets : ["emoji"],
	fallback : ["Apple colr Emoji"]
})




const Emoji = ({className, children} : EmojiPros) => {
	return (
		<span className={className} style={notoColorEmoji.style}>
			{children}
		</span>
	)
}

export default Emoji
