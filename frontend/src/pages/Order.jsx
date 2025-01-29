import React, { useContext } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <motion.div
      className='border-t pt-16 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'
      initial={{ opacity: 0, scale: 0.95 }} // Initial state for appearance
      animate={{ opacity: 1, scale: 1 }} // Animate to this state
      exit={{ opacity: 0, scale: 0.95 }} // Exit animation
      transition={{ duration: 0.5 }} // Transition duration for smooth appearance and closing
    >
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <motion.div
            key={index}
            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            initial={{ opacity: 0, y: 20 }} // Initial state for each order item
            animate={{ opacity: 1, y: 0 }} // Animate to visible
            exit={{ opacity: 0, y: 20 }} // Exit animation
            transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for staggered effect
          >
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>25, Jul, 2024</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-black hover:text-white'>
                Track Order
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Order;