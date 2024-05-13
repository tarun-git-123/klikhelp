import React from 'react'
import bannerImg from '../assets/banner_pic.jpg';
const banner = () => {
  return (
    <div className="relative max-w-full z-[0] sm:mt-[80px] mt-[85px]">
        <img src={bannerImg} alt='banner_img'/>
        <div className='max-w-100 absolute text-white top-[1%] lg:top-[20%] sm:top-[20%] left-[12px] xl:left-[122px] sm:left-[20px] mt-3 flex'>
            <div className='flex sm:mx-3 mx-2 sm:text-base text-[11px] sm:font-semibold font-medium'>
                <svg className='sm:w-[16px] sm:h-[25px] w-[10px] h-[16px]' viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4688 0H2.53125C1.2373 0 0.1875 1.0498 0.1875 2.34375V22.6562C0.1875 23.9502 1.2373 25 2.53125 25H13.4688C14.7627 25 15.8125 23.9502 15.8125 22.6562V2.34375C15.8125 1.0498 14.7627 0 13.4688 0ZM8 23.4375C7.13574 23.4375 6.4375 22.7393 6.4375 21.875C6.4375 21.0107 7.13574 20.3125 8 20.3125C8.86426 20.3125 9.5625 21.0107 9.5625 21.875C9.5625 22.7393 8.86426 23.4375 8 23.4375ZM13.4688 18.1641C13.4688 18.4863 13.2051 18.75 12.8828 18.75H3.11719C2.79492 18.75 2.53125 18.4863 2.53125 18.1641V2.92969C2.53125 2.60742 2.79492 2.34375 3.11719 2.34375H12.8828C13.2051 2.34375 13.4688 2.60742 13.4688 2.92969V18.1641Z" fill="white"/>
                </svg>
                <span className='sm:mx-3 mx-2'>WELCOME TO KLIKHELP</span>
            </div>
        </div>
        <div className='absolute w-[50%] text-white top-[1%] xl:top-[2%] left-[20px] xl:left-[122px] sm:left-[30px] xl:mt-[13%] sm:mt-[15%] mt-[40px] font-[monospace] xl:text-6xl sm:text-xl text-[16px] sm:font-semibold font-medium'>
            Rediscover <br/>patient experience with AI
        </div>
        <div className='absolute w-[47%] text-white top-[2%] xl:top-[4%] left-[20px] xl:left-[122px] sm:left-[30px] sm:mt-[27%] mt-[115px] font-[monospace] sm:text-[15px] text-[8px] sm:font-medium font-medium'>It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout.</div>
    </div>
  )
}

export default banner