import { Link } from 'react-router-dom'

function Pnf() {
    return (
        <div className='min-h-screen bg-green-50 flex flex-col justify-center items-center text-center px-6'>
            <div className='text-7xl'>🥕</div>
            <h1 className='mt-4 text-5xl font-bold text-green-700'>404</h1>
            <p className='mt-3 text-gray-600'>Oops! This page is not on the menu.</p>
            <Link to={'/'} className='mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300'>
                Back to Home
            </Link>
        </div>
    )
}

export default Pnf