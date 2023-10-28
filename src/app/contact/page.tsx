'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { fadeIn } from '../../../variants';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const ref: any = useRef();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(ref.current);
    const requiredFields = ['name', 'email', 'subject', 'message'];
    let isFormValid = true;

    requiredFields.forEach((field) => {
      const value = formData.get(field);
      if (!value || '') {
        toast.error(`Please fill in ${field} field.`, {
          theme: 'dark',
        });
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      return;
    }

    emailjs.sendForm('', '', ref.current, '').then(
      () => {
        toast.success('Message sent successfully!', {
          theme: 'dark',
        });

        ref.current.reset();
      },
      () => {
        toast.error('Something went wrong!', {
          theme: 'dark',
        });
      }
    );
  };

  return (
    <div className='h-full w-[56rem]'>
      <div className='container flex items-center justify-center h-full py-4 mx-auto text-center xl:text-left'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-12 text-center text-[48px] leading-tight font-semibold'
          >
            Let's <span className='text-[#1E50FF]'>connect.</span>
          </motion.h2>

          <motion.form
            ref={ref}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onSubmit={handleSubmit}
            className='flex flex-col flex-1 w-full gap-6 mx-auto'
          >
            <div className='flex w-full gap-x-6'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='h-[52px] pl-6 rounded-lg w-full capitalize bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                className='h-[52px] pl-6 rounded-lg w-full capitalize bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              className='h-[52px] pl-6 rounded-lg w-full capitalize bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
            />
            <textarea
              name='message'
              cols={30}
              rows={10}
              placeholder='message'
              className='h-[180px] resize-none p-6 rounded-lg w-full capitalize bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
            ></textarea>
            <button
              type='submit'
              className='border rounded-full h-[52px] border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#1E50FF] group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </div>
  );
}
