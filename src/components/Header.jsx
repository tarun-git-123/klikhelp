import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import loginIcon from '../assets/log-in.png';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <>
        <div className={`max-w-full grid xl:grid-cols-[30%_auto] md:grid-cols-[20%_auto] grid-cols-[20%_auto] bg-white -800 p-4 fixed top-0 w-full z-10 h-20 ${isScrolled ? 'scrolled' : ''}`}>
            <div className='flex justify-center xl:w-[100%] md:w-[75%] w-[75%]'>
                <img src={logo} alt='logo' className={`relative z-[1] mt-[0px] sm:mt-[11px] ml-2 xl:ml-0 sm:ml-5 bg-white sm:px-[10px] sm:pb-[10px] px-[0px] pb-[0px] rounded-xl ${isScrolled ? 'small-logo' : ''}`}/>
            </div>
            <div className='flex sm:justify-center justify-end'>
                <ul className='sm:flex h-[16px] mt-3 hidden'>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Home</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>What is KliHelp</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Application Areas</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Benefits of KliHelp</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Team</li>
                    <li className='xl:text-[15px] lg:text-[14px] md:text-[12px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px]'>Contact Us</li> 
                </ul>
                <button className='sm:flex hidden bg-[#2DC0CE] h-[40px] w-[100px] text-white text-sm rounded-md px-5 py-2.5 text-center mt-[5px] mr-2'>
                    <div className='ml-[-10px] flex'>
                        <img src={loginIcon} alt='loginicon'/>
                        <span className='font-medium ml-3'>Login</span>
                    </div>
                </button>
                <div className='sm:hidden flex justify-center items-center'>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header