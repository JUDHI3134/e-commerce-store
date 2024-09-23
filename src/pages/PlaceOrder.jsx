import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
    {/* -------------------------left side----------- */}
       <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <div className='flex gap-3'>
            <input type="text" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
            <input type="text" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
          </div>
            <input type="email" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
            <input type="text" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='Street' />

            <div className='flex gap-3'>
            <input type="text" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='City' />
            <input type="text" className='border border-green-400 rounded py-1.5 px-3.5 w-full' placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input type="number" className='border border-green-300 rounded py-1.5 px-3.5 w-full' placeholder='ZipCode' />
            <input type="text" className='border border-green-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
          </div>
          <input type="number" className='border border-green-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
       </div>

       {/* -------------right side----------- */}
       <div className='mt-8'>
          <div className='mt-8 min-w-80'>
              <CartTotal />
          </div>

          <div className='mt-12'>
            <Title text1={"PAYMENT"} text2={"METHOD"}/>
            {/* -----------payment methos----------- */}
            <div className='flex flex-col gap-3 lg:flex-row'>
              <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                  <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
              </div>
              <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                  <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
              </div>
              <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                  <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>

            <div className='w-full text-end mt-8'>
              <button onClick={()=>navigate("/orders")} className='bg-green-700 text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>


          </div>
       </div>





    </div>
  )
}

export default PlaceOrder
