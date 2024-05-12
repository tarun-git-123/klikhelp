import React from 'react';
import workflowImg from '../assets/workflow_img.png';
const Workflow = () => {
  return (
    <div className='max-w-full bg-[#E6FAFF] h-auto pt-8'>
        <div className='text-center'>
            <h1 className='font-bold text-2xl my-3'>KlikHelp WorkFlow</h1>
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
        <div className='bg-white max-w-full h-auto mx-[10%] rounded-[30px] p-10 sm:mt-[45px] mt-[25px]' >
            <img src={workflowImg} alt='workflow_img'/>
        </div>
    </div>
  )
}

export default Workflow