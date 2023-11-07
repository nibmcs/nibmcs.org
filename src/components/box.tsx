import React from 'react';

const Box = ({ icon, name, para }: any) => {
  return (
    <div className='flex flex-col items-center w-full gap-2 mb-6 p-4 border-2 border-[#1E50FF] rounded-lg justify-center h-[200px] lg:h-[140px]'>
      <div className='flex flex-col items-center gap-1'>
        <div className='text-white/60 text-[30px] text-center'>{icon}</div>
        <h2 className='text-[#ADB9C7] font-semibold text-[16px] tracking-wider'>
          {name}
        </h2>
        <p className='text-[#fff] text-[14px] tracking-widest'>{para}</p>
      </div>
    </div>
  );
};

export default Box;
