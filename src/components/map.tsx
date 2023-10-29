import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function Map() {
  return (
    <div>
      <motion.iframe
        variants={fadeIn('right', 1)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full grayscale invert md:w-[600px]'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8679502200707!2d79.86803571044017!3d6.906389793064214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259790bddd389%3A0x18b651ed7fc62f32!2sNIBM%20Colombo!5e0!3m2!1sen!2slk!4v1698560257569!5m2!1sen!2slk'
        // width='460'
        height='450'
        style={{ border: '0' }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></motion.iframe>
    </div>
  );
}
