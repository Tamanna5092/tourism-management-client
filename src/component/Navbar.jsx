import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
  const [dropdownOpen , setDropdownOpen] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
          <div className='flex-1'>
            <Link to='/' className='flex gap-0 items-center'>
              <img className='w-14 h-14' src={logo} alt='' />
              <span className='font-roboto font-bold'>StarShelter</span>
            </Link>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link to='/'>Home</Link>
              </li>
                  {!user &&
                <li>
                  <Link to='/login'>Login</Link>
                </li> 
                  }
            </ul> 
              {user && 
              <div onClick={handleToggleDropdown} className='dropdown dropdown-end z-50'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={user?.photoURL}
/>
                </div>
              </div>
              {
                dropdownOpen && (
                  <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to='/allTouristSpots' className='justify-between'>
                  All Tourists Spot
                  </Link>
                </li>
                <li>
                  <Link to='/addTourisSpot'>Add Tourists Spot</Link>
                </li>
                <li>
                  <Link to='myListedSpots'>My Listed Spots</Link>
                </li>
                <li>
                  <Link to=''>Blog</Link>
                </li>
                <li>
                  <Link to=''>About</Link>
                </li>
                <li>
                  <Link to=''>Contact Us</Link>
                </li>
                <li className='mt-2'>
                  <button
                  onClick={signOutUser}
                    className='bg-gray-200 block text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
                )
              }
            </div>
              }
          </div>
        </div>
      )
    }

export default Navbar;