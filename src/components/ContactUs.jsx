import React from 'react';
const ContactUs = () => {
  return (
    <div className='max-w-[100%] mx-auto'>
        <div className='text-center bg-white text-dark sm:text-[24px] text-sm font-[700] text-black'>
            <h1>Contact Us: help@klikhelp.com</h1>
            <h1>Visit Us: Kasturinagar Bangalore; Magic, Cyberjaya, Kuala Lumpur</h1>
            <h1>Call Us: +91-9632900225 ; +60 17-8742307</h1>
        </div>
        <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
            <div className='mb-4 w-full text-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.92937221319!2d77.64944728374927!3d13.004926904481689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae113195b7923d%3A0xa457538b53fe1a19!2sKasturi%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715626572984!5m2!1sen!2sin" width="100%" height="500" loading="lazy"></iframe>
                <h1 className='my-2 text-[14px] text-[#166678]'>Kasturinagar Bangalore</h1>
            </div>
            <div className='mb-4 w-full text-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.615344401003!2d101.65443907403352!3d2.9264033544834804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb6f75df70747%3A0x63a65b984b6615db!2sMagic%2C%20Cyberjaya!5e0!3m2!1sen!2sin!4v1715626753240!5m2!1sen!2sin" width="100%" height="500"   loading="lazy"></iframe>
                <h1 className='my-2 text-[14px] text-[#166678]'>Magic, Cyberjaya, Kuala Lumpur</h1>
            </div>
        </div>
        <div className='mt-[20px] sm:mt-[70px]'>
            <form>
                <div className="mx-[5%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                    <div className='max-w-full'>
                        <label for="username" className="block text-sm font-medium leading-8 ">Name</label>
                        <input type="text" name="username" id="username" autocomplete="username" className="w-[100%] h-[58px] pl-6 outline-none border-[1px] border-[#166678] placeholder:text-gray-500 placeholder:text-sm focus:border-2" placeholder="Type your Name"/>
                    </div>
                    <div className='max-w-full'>
                        <label for="username" className="block text-sm font-medium leading-8">Email</label>
                        <input type="text" name="username" id="username" autocomplete="username" className="w-[100%] h-[58px] pl-6 outline-none border-[1px] border-[#166678] placeholder:text-gray-500 placeholder:text-sm focus:border-2" placeholder="Type your Email"/>
                    </div>
                    <div className="col-span-full">
                        <label for="about" className="block text-sm font-medium leading-8 text-gray-900">Type your Message</label>
                        <div className="mt-2">
                            <textarea id="about" name="about" rows="3" className="block h-[108px] w-full rounded-md pl-6 pt-4 outline-none border-[1px] border-[#166678] placeholder:text-gray-500 placeholder:text-sm focus:border-2" placeholder="Type your Message"></textarea>
                        </div>
                    </div>
                    <div className="col-span-full text-center mt-2 sm:mt-4">
                        <button class="rounded-md bg-[#2DC0CE] text-white w-[150px] h-[60px]">SEND</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUs