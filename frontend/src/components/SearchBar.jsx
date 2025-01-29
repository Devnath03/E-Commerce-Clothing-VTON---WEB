import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    const handleClose = () => {
        setShowSearch(false);
    };

    return showSearch && visible ? (
        <motion.div
            className='border-t border-b bg-gray-50 text-center'
            initial={{ opacity: 0, y: -20 }} // Initial state for appearance
            animate={{ opacity: 1, y: 0 }} // Animate to this state
            exit={{ opacity: 0, y: -20 }} // Exit animation
            transition={{ duration: 0.5 }} // Transition duration for smooth appearance and closing
        >
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder='Search'
                />
                <img className='w-4' src={assets.search_icon} alt="" />
            </div>
            <motion.img
                onClick={handleClose}
                className='inline w-3 cursor-pointer'
                src={assets.cross_icon}
                alt=""
                initial={{ rotate: 0, scale: 1 }} // Initial state
                whileHover={{ scale: 1.2 }} // Scale up on hover
                whileTap={{ rotate: 180, scale: 0.8 }} // Rotate and scale down on click
                transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
            />
        </motion.div>
    ) : null;
};

export default SearchBar;
