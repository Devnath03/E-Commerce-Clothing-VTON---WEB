import { assets } from '@/assets/assets';
import React from 'react';
import Title from './Title';



const Gallery = () => {
  const images = [
    (assets.hero_img),
    (assets.hero_img2),
    (assets.hero_img),
    (assets.hero_img2),
    
    
  ];

  return (
    <div className='flex flex-col justify-center items-center '>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'GALLERY'} text2={'COLLECTIONS'} />
    </div>
    <div className="gallery-container  bg-purple-100">
        
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image} alt={`Gallery ${index}`} className="gallery-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;