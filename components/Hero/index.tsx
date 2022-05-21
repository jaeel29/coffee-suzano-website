import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='md:h-[75%] h-[calc(100%-80px)] w-full relative mb-[48px]'>
      <div className='absolute left-0 top-[-150px] rotate-[220deg] z-50 hidden md:block'>
        <Image
          src={'/images/splash-1.png'}
          width={200}
          height={200}
          objectFit='contain'
          alt='splash-1'
        />
      </div>

      <div className='flex flex-col gap-[60px] items-center h-full md:flex-row md:gap-0'>
        {/* Left */}
        <div className='flex-1 h-full relative flex justify-center gap-6 md:items-center'>
          <div className='ml-0 text-center mt-[80px] md:text-left md:ml-4 md:mt-0'>
            <span className='text-redBrown text-base mb-3 inline-block font-Circular font-100'>
              Coffee Time.... ☕
            </span>
            <h1 className='text-[66px] font-Romelio font-100 leading-[80px] text-brown mb-6'>
              Enjoy Your <br /> Morning <span className='text-redBrown'>Coffee.</span>
            </h1>

            <Link href={'/'}>
              <button className='btn mt-6'>See Products</button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className='relative flex-1 h-[500px] w-full md:h-full'>
          <div>
            <Image
              src={'/images/Cofffe-cup.png'}
              layout='fill'
              objectFit='contain'
              alt='coffe cup'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
