import React from 'react';
import logo from '../assets/logo.png';
import loginIcon from '../assets/log-in.png';
const Header = () => {
  return (
    <>
        <div className='max-w-full grid xl:grid-cols-[30%_auto] md:grid-cols-[20%_auto] grid-cols-[20%_auto]'>
            <div className='flex justify-center xl:w-[100%] md:w-[75%]'>
                <img src={logo} alt='logo' className='relative z-[1] mt-[11px] ml-2 xl:ml-0 sm:ml-5 bg-white px-[10px] pb-[10px] rounded-xl'/>
            </div>
            <div className='flex sm:justify-center justify-end'>
                <ul className='sm:flex h-[16px] mt-8 hidden'>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Home</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>What is KliHelp</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Application Areas</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Benefits of KliHelp</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Team</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Contact Us</li> 
                </ul>
                <button className='bg-[#2DC0CE] h-[40px] w-[100px] text-white text-sm rounded-md flex px-5 py-2.5 text-center mt-[20px] mr-2'>
                    <div className='ml-[-10px] flex'>
                        <img src={loginIcon} alt='loginicon'/>
                        <span className='font-medium ml-3'>Login</span>
                    </div>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header