

import TagList from '@/components/Feed/left/TagList';
import FeedHeader from '@/components/Feed/main/FeedHeader';
import PostList from '@/components/Feed/main/PostList';
import SearchInput from '@/components/Feed/main/SearchInput';
import ContactCard from '@/components/Feed/right/ContactCard';
import ProfileCard from '@/components/Feed/right/ProfileCard';
import React from 'react'


export default function Home() {
  return (
		<div className='grid grid-cols-12 gap-4 py-6 max-md:block max-md:py-2'>
			<section className="hidden overflow-scroll sticky col-span-2 top-[63px] no-scrollbar lg:block">
				<TagList/>
			</section>
			<section className='col-span-12 lg:col-span-7'>
				{/* PinnedPosts */}
				<SearchInput/>
				<div className='block lg:hidden'>
					<TagList/>
				</div>
				<FeedHeader/>
				<PostList/>
				<div className='pb-8 lg:hidden'>
					{/* Footer */}
				</div>
			</section>
			<section className="hidden overflow-scroll sticky top-[63px] no-scrollbar col-span-2 lg:block lg:col-span-3">
				<ProfileCard/>
				<ContactCard/>
				<div className="pt-4">
					{/* footer */}
				</div>
			</section>
	</div>
  );
}

