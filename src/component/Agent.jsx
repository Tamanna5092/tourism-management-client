import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const Agent = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-[#383838] text-white'>
                <div className='py-24 px-4 max-w-xl mx-auto md:px-0'>
                <h1 className='text-3xl text-orange-400 text-center font-lato font-extrabold my-6'>Feel Free To Contact Our Agent</h1>
                <p className='mb-4'>If you need any assistance, feel free to reach out to our friendly agents. We’re here to help with any questions or concerns, ensuring your experience is smooth and enjoyable. Contact us via email, phone, or live chat anytime—we’re dedicated to providing you with excellent support!</p>
                <div className='flex flex-col justify-center gap-6 md:flex-row'>
                <div className='flex items-center gap-4'>
                    <div>
                    <img className='w-16 h-16 rounded-full' src="https://i.ibb.co.com/wy8KPK3/download.jpg" alt="" />
                    </div>
                   <div className=''>
                   <p className='font-lato text-lg font-bold'>Emma Stone</p>
                   <p className='flex text-xl font-medium items-center gap-2 text-orange-400'><FiPhoneCall></FiPhoneCall> <span>+043-492-483</span></p>
                   </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                    <img className='w-16 h-16 rounded-full' src="https://i.ibb.co.com/MVPJrxC/istockphoto-1372001112-612x612.jpg" alt="" />
                    </div>
                   <div className=''>
                   <p className='font-lato text-lg font-bold'>Antonella Anto</p>
                   <p className='flex text-xl font-medium items-center gap-2 text-orange-400'><FiPhoneCall></FiPhoneCall> <span>+043-492-429</span></p>
                   </div>
                </div>
                </div>
                </div>
            </div>
            <div>
                <img className='w-full' src="https://i.ibb.co.com/g6VDMkX/agent1.webp" alt="" />
            </div>
        </div>
    );
};

export default Agent;