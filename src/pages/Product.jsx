import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () =>{
     products.map((item)=>{
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0])          
          return null;
        }
     })
  }


  useEffect(()=>{
    fetchProductData()
  },[productId,products])
  
  return productData ? (
    <div className='pt-10 border-t-2 transition-opacity ease-in duration-100 opacity-100'> 
    {/* product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* ----product image-- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overscroll-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item,index)=>(
              <img src={item} onClick={()=>setImage(item)} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))}
          </div>
          <div className='sm:w-[80%] w-full'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* ----product info---- */}
        <div className='flex-1'>
            <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(120)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-green-500': ''}`}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-green-600 text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product.</p>
                <p>Cash on delivery is available ont his product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>


{/* ----------------description and review section-------------- */}
        
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (120)</p>
          </div>

          <div className='border flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
                <p>I recently purchased a pair of wireless headphones from this site, and I am absolutely thrilled with my experience. The website is easy to navigate, the product descriptions are accurate, and the checkout process was smooth. The shipping was fast, and the packaging was secure. The headphones work perfectly, and the sound quality is outstanding. Overall, I am very satisfied and will definitely be shopping here again!</p>
                <p>I ordered a kitchen appliance from this site, but my experience was far from satisfactory. The delivery took much longer than expected, and when the product arrived, it was damaged.</p>
          </div>
        </div>

        {/* ----------------display related product------------- */}

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ): <div className='opacity-0'></div>
}

export default Product
