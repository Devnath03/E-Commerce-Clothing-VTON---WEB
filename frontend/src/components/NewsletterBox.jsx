import React from 'react';
import { Toaster, toaster } from "../components/ui/toaster";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Trigger the toaster
    toaster.success({
      title: "Subscribe Successful!",
      type: "success",
    });
  };

  return (
    <div className='text-center mt-8'>
      <Toaster /> {/* Toaster container for rendering notifications */}
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis fuga molestiae obcaecati.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;