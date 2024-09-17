import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
        <Link to="/"><h1 className='font-bold text-xl mb-5'><span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>TrendyCart</span></h1></Link>
            <p className='w-fill md:w-2/3 text-gray-600'>Your one-stop shop for premium products at competitive prices. Enjoy fast, reliable shipping, secure payment options, and exceptional customer service. Shop with confidence and find everything you need in one place.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9090161171</li>
                <li>judhistirb19@gmail.com</li>               
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 TrendyCart. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
