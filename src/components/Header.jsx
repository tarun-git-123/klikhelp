import React from 'react';
import logo from '../assets/logo.png';
import loginIcon from '../assets/log-in.png';
const Header = () => {
  return (
    <>
        <div className='max-w-full grid grid-cols-12 max-md:hidden'>
            <div className='col-span-3 col-start-2'>
                <img src={logo} alt='logo' className='relative mt-[11px] bg-white px-[10px] pb-[10px] rounded-xl'/>
            </div>
            <div className='col-span-6'>
                <ul className='flex h-[16px] mt-8'>
                    <li className='text-base'>Home</li>
                    <li>What is KliHelp</li>
                    <li>Application Areas</li>
                    <li>Benefits of KliHelp</li>
                    <li>Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='col-span-1 ml-[25px] mt-[22px]'>
                <button className='bg-[#2DC0CE] h-[40px] w-[100px] text-white text-sm rounded-md flex px-5 py-2.5 text-center'>
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