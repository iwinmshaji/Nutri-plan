import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'

function Header() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='bg-white px-6 py-4 shadow-sm'>
            <div className='max-w-6xl mx-auto flex items-center justify-between'>
                {/* brand */}
                <Link to={'/'} className='text-2xl font-bold text-green-700'>
                    NutriPlan
                </Link>

                {/* desktop links */}
                <div className='hidden sm:flex items-center gap-6'>
                    <a href='#home' className='text-gray-600 hover:text-green-700'>
                        Home
                    </a>
                    <a href='#features' className='text-gray-600 hover:text-green-700'>
                        Features
                    </a>
                    <a href='#how-it-works' className='text-gray-600 hover:text-green-700'>
                        How It Works
                    </a>
                </div>

                <div className='flex items-center gap-3'>
                    <button className='bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer'>
                        Get Started
                    </button>

                    {/* mobile menu button */}
                    <button onClick={() => setToggle(!toggle)} className='sm:hidden text-3xl text-green-700 cursor-pointer'>
                        <IoMenu />
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {
                toggle &&
                <div className='sm:hidden flex flex-col items-center gap-4 mt-4'>
                    <a href='#home' onClick={() => setToggle(false)} className='text-gray-600 hover:text-green-700'>
                        Home
                    </a>
                    <a href='#features' onClick={() => setToggle(false)} className='text-gray-600 hover:text-green-700'>
                        Features
                    </a>
                    <a href='#how-it-works' onClick={() => setToggle(false)} className='text-gray-600 hover:text-green-700'>
                        How It Works
                    </a>
                </div>
            }
        </nav>
    )
}

export default Header