import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to="/">
        <img className='w-32 sm:w-44' src={assets.logo} alt="logo" />
      </Link>

      {
        isSignedIn ? <div className='flex items-center gap-2 sm:gap-3'> <p className='text-gray-600 max-sm:hidden'>Hi, {user.firstName}</p> <UserButton  appearance={{
          elements: {
              avatarBox: "w-10 h-10"
          }
      }} /></div> : <button onClick={() => openSignIn({})} className='bg-zinc-800 flex text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
          Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="arrow-icon" />
        </button>
      }

    </div>
  )
}

export default Navbar