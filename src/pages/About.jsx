import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='flex flex-col my-10 md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[440px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci nulla esse sit earum, sapiente molestiae asperiores, officiis hic beatae eum quasi aut harum. Natus aperiam, reprehenderit, in at unde nisi ratione eum architecto neque dignissimos suscipit excepturi. Nulla, excepturi.</p>
          <p>voluptate voluptatem nisi blanditiis, veritatis esse dolorum necessitatibus sunt vero nobis corporis quo deleniti quos eius, vitae repellat dolores. Autem illum corrupti impedit sunt pariatur voluptates? Quasi porro ipsum repudiandae delectus, recusandae eum iure laboriosam perferendis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt excepturi voluptatem consequuntur repellat, sed corrupti cum cumque aspernatur omnis suscipit iusto in, maiores eveniet ut ducimus cupiditate, obcaecati impedit.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse ut, repellendus eius corrupti dolor nihil cum ullam nulla accusantium.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse ut, repellendus eius corrupti dolor nihil cum ullam nulla accusantium.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad esse ut, repellendus eius corrupti dolor nihil cum ullam nulla accusantium.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
