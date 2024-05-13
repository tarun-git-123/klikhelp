import React from 'react';
import Team1_img from '../assets/team1.png';
// import ourTeambackground from "../assets/ourTeambackground.png";
const OurTeam = () => {
  return (
    <div className='max-w-full py-8 bg-[url("assets/ourteam_background.png")] bg-center object-fill h-[100%]'>
        {/* <div className='max-w-full bg-[#2DC0CE] bg-opacity-75 z-10'></div> */}
        <div className='text-center mt-[40px]'>
            <h1 className='font-bold text-white text-2xl my-3'>Our Team</h1>
            <div>
                <svg width="200" height="23" className='svg' viewBox="0 0 200 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="10.2845" x2="82.7586" y2="10.2845" stroke="#2DC0CE" strokeWidth="1.5"/>
                    <line x1="117.241" y1="10.2845" x2="200" y2="10.2845" stroke="#2DC0CE" strokeWidth="1.5"/>
                    <circle cx="100.69" cy="11.0345" r="10.5345" stroke="#2DC0CE"/>
                    <path d="M97.2414 11.7241L100.69 15.1724L104.138 11.7241" stroke="#2DC0CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M97.2414 6.89655L100.69 10.3448L104.138 6.89655" stroke="#2DC0CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='mx-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-full h-auto sm:mt-[45px] mt-[25px]' >
            <div className='relative flex flex-col justify-center items-center mx-auto py-[30px] bg-white text-center w-[280px] h-[716px] rounded-[300px] mb-4'>
                <div className='absolute top-[40px]'>
                    <svg width="40" height="40" className='svg absolute right-3 bottom-3' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#2DC0CE"/>
                    <path d="M15.3974 28.3334H11.942V17.2059H15.3974V28.3334ZM13.6678 15.688C12.5629 15.688 11.6667 14.7728 11.6667 13.6679C11.6667 13.1372 11.8775 12.6282 12.2528 12.2529C12.6281 11.8776 13.1371 11.6667 13.6678 11.6667C14.1986 11.6667 14.7076 11.8776 15.0829 12.2529C15.4581 12.6282 15.669 13.1372 15.669 13.6679C15.669 14.7728 14.7724 15.688 13.6678 15.688ZM28.33 28.3334H24.882V22.9166C24.882 21.6257 24.8559 19.9701 23.0854 19.9701C21.2889 19.9701 21.0136 21.3727 21.0136 22.8236V28.3334H17.5619V17.2059H20.8759V18.7238H20.9243C21.3856 17.8495 22.5125 16.9269 24.1937 16.9269C27.6908 16.9269 28.3337 19.2298 28.3337 22.2209V28.3334H28.33Z" fill="white"/>
                    </svg>
                    <img src={Team1_img} alt="team1" className='border-[5px] border-solid border-[#2DC0CE] rounded-full'/>
                </div>
                <div className='text-[19px] font-bold absolute top-[280px]'>Anupam Chatterjee</div>
                <div className='text-[16px] text-gray-500 font-bold absolute top-[320px] w-[60%]'>Founder & CEO MBA, MS, BSc</div>
                <div className='text-base absolute top-[380px] w-[74%]'>Anupam has over 18 years of experience in Analytics, Product Development, and New Business Innovation. Anupam did MS in Quantitative Economics from Indian Statistical Institute and MBA from HEC Paris and MIT Sloan(IEP), with a strategy specialization from Harvard Business School.</div>
            </div>
            <div className='relative flex flex-col justify-center items-center mx-auto py-[30px] bg-white text-center w-[280px] h-[716px] rounded-[300px] mb-4'>
                <div className='absolute top-[40px]'>
                    <svg width="40" height="40" className='svg absolute right-3 bottom-3' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#2DC0CE"/>
                    <path d="M15.3974 28.3334H11.942V17.2059H15.3974V28.3334ZM13.6678 15.688C12.5629 15.688 11.6667 14.7728 11.6667 13.6679C11.6667 13.1372 11.8775 12.6282 12.2528 12.2529C12.6281 11.8776 13.1371 11.6667 13.6678 11.6667C14.1986 11.6667 14.7076 11.8776 15.0829 12.2529C15.4581 12.6282 15.669 13.1372 15.669 13.6679C15.669 14.7728 14.7724 15.688 13.6678 15.688ZM28.33 28.3334H24.882V22.9166C24.882 21.6257 24.8559 19.9701 23.0854 19.9701C21.2889 19.9701 21.0136 21.3727 21.0136 22.8236V28.3334H17.5619V17.2059H20.8759V18.7238H20.9243C21.3856 17.8495 22.5125 16.9269 24.1937 16.9269C27.6908 16.9269 28.3337 19.2298 28.3337 22.2209V28.3334H28.33Z" fill="white"/>
                    </svg>
                    <img src={Team1_img} alt="team1" className='border-[5px] border-solid border-[#2DC0CE] rounded-full'/>
                </div>
                <div className='text-[19px] font-bold absolute top-[280px]'>Anupam Chatterjee</div>
                <div className='text-[16px] text-gray-500 font-bold absolute top-[320px] w-[60%]'>Founder & CEO MBA, MS, BSc</div>
                <div className='text-base absolute top-[380px] w-[74%]'>Anupam has over 18 years of experience in Analytics, Product Development, and New Business Innovation. Anupam did MS in Quantitative Economics from Indian Statistical Institute and MBA from HEC Paris and MIT Sloan(IEP), with a strategy specialization from Harvard Business School.</div>
            </div>
            <div className='relative flex flex-col justify-center items-center mx-auto py-[30px] bg-white text-center w-[280px] h-[716px] rounded-[300px] mb-4'>
                <div className='absolute top-[40px]'>
                    <svg width="40" height="40" className='svg absolute right-3 bottom-3' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#2DC0CE"/>
                    <path d="M15.3974 28.3334H11.942V17.2059H15.3974V28.3334ZM13.6678 15.688C12.5629 15.688 11.6667 14.7728 11.6667 13.6679C11.6667 13.1372 11.8775 12.6282 12.2528 12.2529C12.6281 11.8776 13.1371 11.6667 13.6678 11.6667C14.1986 11.6667 14.7076 11.8776 15.0829 12.2529C15.4581 12.6282 15.669 13.1372 15.669 13.6679C15.669 14.7728 14.7724 15.688 13.6678 15.688ZM28.33 28.3334H24.882V22.9166C24.882 21.6257 24.8559 19.9701 23.0854 19.9701C21.2889 19.9701 21.0136 21.3727 21.0136 22.8236V28.3334H17.5619V17.2059H20.8759V18.7238H20.9243C21.3856 17.8495 22.5125 16.9269 24.1937 16.9269C27.6908 16.9269 28.3337 19.2298 28.3337 22.2209V28.3334H28.33Z" fill="white"/>
                    </svg>
                    <img src={Team1_img} alt="team1" className='border-[5px] border-solid border-[#2DC0CE] rounded-full'/>
                </div>
                <div className='text-[19px] font-bold absolute top-[280px]'>Anupam Chatterjee</div>
                <div className='text-[16px] text-gray-500 font-bold absolute top-[320px] w-[60%]'>Founder & CEO MBA, MS, BSc</div>
                <div className='text-base absolute top-[380px] w-[74%]'>Anupam has over 18 years of experience in Analytics, Product Development, and New Business Innovation. Anupam did MS in Quantitative Economics from Indian Statistical Institute and MBA from HEC Paris and MIT Sloan(IEP), with a strategy specialization from Harvard Business School.</div>
            </div>
            <div className='relative flex flex-col justify-center items-center mx-auto py-[30px] bg-white text-center w-[280px] h-[716px] rounded-[300px] mb-4'>
                <div className='absolute top-[40px]'>
                    <svg width="40" height="40" className='svg absolute right-3 bottom-3' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#2DC0CE"/>
                    <path d="M15.3974 28.3334H11.942V17.2059H15.3974V28.3334ZM13.6678 15.688C12.5629 15.688 11.6667 14.7728 11.6667 13.6679C11.6667 13.1372 11.8775 12.6282 12.2528 12.2529C12.6281 11.8776 13.1371 11.6667 13.6678 11.6667C14.1986 11.6667 14.7076 11.8776 15.0829 12.2529C15.4581 12.6282 15.669 13.1372 15.669 13.6679C15.669 14.7728 14.7724 15.688 13.6678 15.688ZM28.33 28.3334H24.882V22.9166C24.882 21.6257 24.8559 19.9701 23.0854 19.9701C21.2889 19.9701 21.0136 21.3727 21.0136 22.8236V28.3334H17.5619V17.2059H20.8759V18.7238H20.9243C21.3856 17.8495 22.5125 16.9269 24.1937 16.9269C27.6908 16.9269 28.3337 19.2298 28.3337 22.2209V28.3334H28.33Z" fill="white"/>
                    </svg>
                    <img src={Team1_img} alt="team1" className='border-[5px] border-solid border-[#2DC0CE] rounded-full'/>
                </div>
                <div className='text-[19px] font-bold absolute top-[280px]'>Anupam Chatterjee</div>
                <div className='text-[16px] text-gray-500 font-bold absolute top-[320px] w-[60%]'>Founder & CEO MBA, MS, BSc</div>
                <div className='text-base absolute top-[380px] w-[74%]'>Anupam has over 18 years of experience in Analytics, Product Development, and New Business Innovation. Anupam did MS in Quantitative Economics from Indian Statistical Institute and MBA from HEC Paris and MIT Sloan(IEP), with a strategy specialization from Harvard Business School.</div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam