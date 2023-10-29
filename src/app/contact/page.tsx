'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from 'react-icons/hi2';
import { ToastContainer, toast } from 'react-toastify';
import { fadeIn } from '../../../variants';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Map from '../../components/map';

export default function ContactPage() {
  const ref: any = useRef();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(ref.current);
    const requiredFields = ['user_name', 'user_email', 'subject', 'message'];
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

    emailjs
      .sendForm(
        'service_ap4wbtw',
        'template_grf4xdq',
        ref.current,
        'dStWJXq6rdaw4xHWs'
      )
      .then(
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
    <>
      <div className='w-full h-full px-6 md:px-0'>
        <div className='container flex items-center justify-center h-full mx-auto text-center md:py-4 xl:text-left'>
          <div className='flex flex-col w-full max-w-[700px]'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-12 text-center text-[32px] md:text-[48px] leading-tight font-semibold'
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
                  name='user_name'
                  placeholder='Name'
                  className='h-[52px] pl-6 rounded-lg w-full bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
                />
                <input
                  type='email'
                  name='user_email'
                  placeholder='Email'
                  className='h-[52px] pl-6 rounded-lg w-full bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
                />
              </div>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='h-[52px] pl-6 rounded-lg w-full bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
              />
              <textarea
                name='message'
                cols={30}
                rows={10}
                placeholder='Message'
                className='h-[180px] resize-none p-6 rounded-lg w-full bg-transparent border outline-none focus:ring-1 focus:ring-[#1E50FF] border-white/20 placeholder:text-white/30 placeholder:font-light'
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
      <div className='flex flex-col gap-8 my-12 md:flex-row gap-x-48'>
        <div className='w-full h-full md:w-1/2'>
          <Map />
        </div>
        <motion.div
          variants={fadeIn('left', 1)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full h-full pt-2 md:w-1/2'
        >
          <div className='flex flex-col items-center w-full gap-2 mb-6 p-4 border-2 border-[#1E50FF] rounded-lg justify-center h-[200px] md:h-full'>
            <div className='flex flex-col items-center gap-1'>
              <HiOutlineMapPin className='text-white/60 text-[30px] text-center' />
              <h2 className='text-[#ADB9C7] font-semibold text-[16px] tracking-wider'>
                Address
              </h2>
              <p className='text-[#fff] text-[14px] tracking-widest'>
                120/5 Vidya Mawatha, Colombo 00700
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center w-full gap-2 mb-6 p-4 border-2 border-[#1E50FF] rounded-lg justify-center h-[200px] md:h-full'>
            <div className='flex flex-col items-center gap-1'>
              <HiOutlineEnvelope className='text-white/60 text-[30px]' />
              <h2 className='text-[#ADB9C7] font-semibold text-[16px] tracking-wider'>
                Email
              </h2>
              <p className='text-[#fff] text-[14px] tracking-widest'>
                info@nibmcs.org
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center w-full gap-2 p-4 border-2 border-[#1E50FF] rounded-lg text-center justify-center h-[200px] md:h-full'>
            <div className='flex flex-col items-center gap-1'>
              <HiOutlinePhone className='text-white/60 text-[30px]' />
              <h2 className='text-[#ADB9C7] font-semibold text-[16px] tracking-wider'>
                Phone
              </h2>
              <p className='text-[#fff] text-[14px] tracking-widest'>
                +94712224455
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
