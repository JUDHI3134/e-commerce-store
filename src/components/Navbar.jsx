import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [showMenu,setShowMenu] =  useState(false)
    const {setShowSearch,getcartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext)

    const logout = () =>{
        navigate("/login")
        localStorage.removeItem('token')
        setToken('')
        setCartItems("")
    }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/"><h1 className='font-bold text-xl'><span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Trendy</span>Cart</h1></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none bg-green-500 h-[2px] hidden'/>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className='w-2/4 border-none bg-green-500 h-[2px] hidden'/>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className='w-2/4 border-none bg-green-500 h-[2px] hidden'/>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className='w-2/4 border-none bg-green-500 h-[2px] hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className="group relative">
            
            <img onClick={()=>token ? null : navigate("/login")} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            {/* dropdown menu  */}
            {
                token && <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={()=>navigate("/orders")} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
            }
        </div>
        <Link to={"/cart"} className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]'>{getcartCount()}</p>
        </Link>


        {/* ==================responsive menu=============== */}

        <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>


    {/* ---------------sidebar menu================ */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${showMenu ? "w-full" : "w-0"}`}>
        <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setShowMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
            </div>
            <NavLink onClick={()=>setShowMenu(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
        </div>
    </div>




    </div>
  )
}

export default Navbar
