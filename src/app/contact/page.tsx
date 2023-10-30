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
import { fadeIn } from '../../utils/variants';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Map from '../../components/map';
import Box from '../../components/box';

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
              Let&apos;s <span className='text-[#1E50FF]'>connect.</span>
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
                  Let&apos;s talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
              <ToastContainer />
            </motion.form>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 my-12 lg:flex-row gap-x-48'>
        <div className='w-full h-full lg:w-1/2'>
          <Map />
        </div>
        <motion.div
          variants={fadeIn('left', 1)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full h-full pt-2 lg:w-1/2'
        >
          <Box
            icon={<HiOutlineMapPin />}
            name={'Address'}
            para={'120/5 Vidya Mawatha, Colombo 00700'}
          />
          <Box
            icon={<HiOutlineEnvelope />}
            name={'Email'}
            para={'info@nibmcs.org'}
          />
          <Box icon={<HiOutlinePhone />} name={'Phone'} para={'+94712691003'} />
        </motion.div>
      </div>
    </>
  );
}
