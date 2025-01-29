import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <motion.div
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'
      initial={{ opacity: 0, y: 20 }} // Initial state for appearance
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Transition duration for smooth appearance and closing
    >
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>

      {/*---------------Right Side--------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/*---------------Payment Method Selection-------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <motion.div
              onClick={() => setMethod('master')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              whileTap={{ scale: 0.95 }} // Scale down on click
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'master' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.master_logo} alt="" />
            </motion.div>
            <motion.div
              onClick={() => setMethod('koko/mint')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              whileTap={{ scale: 0.95 }} // Scale down on click
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'koko/mint' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-1' src={assets.koko_logo} alt="" />
              <img className="h-5 mx-1" src={assets.mintpay_logo} alt="Mintpay Logo" />
            </motion.div>
            <motion.div
              onClick={() => setMethod('cod')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
              whileTap={{ scale: 0.95 }} // Scale down on click
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </motion.div>
          </div>

          <div className='w-full text-end mt-8'>
            <motion.button
              onClick={() => navigate('/orders')}
              className='bg-black text-white px-16 py-3 text-sm'
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down on click
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
            >
              PLACE ORDER
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PlaceOrder;