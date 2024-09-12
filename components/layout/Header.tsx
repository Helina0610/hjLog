import React from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import NavBar from './NavBar'


const Header = () => {
  return (
    <div className="z-30 sticky top-0 bg-gray-100 shadow-sm">
      <div className="flex justify-between items-center w-full max-w-screen-xl h-12 px-4 mx-auto">
        <Logo />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
	)
}

export default Header
