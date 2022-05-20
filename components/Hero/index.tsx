import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='h-[calc(100%-80px)] w-full relative overflow-hidden mb-[48px]'>
      <div className='absolute left-0 top-[-250px] rotate-[220deg]'>
        <Image
          src={'/images/splash-1.png'}
          width={200}
          height={200}
          objectFit='contain'
          alt='splash-1'
        />
      </div>

      <div className='flex items-center h-full'>
        {/* Left */}
        <div className='flex-1 h-full relative flex justify-center gap-6'>
          <div className='ml-4 mt-[150px] text-center md:text-left'>
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

          <div className='absolute left-[10%] bottom-[-80px] scale-150'>
            <Image
              src={'/images/splash-1.png'}
              width={200}
              height={200}
              objectFit='contain'
              alt='splash-1'
            />
          </div>
        </div>

        {/* Right */}
        <div className='relative flex-1 h-full hidden md:block'>
          <div className='absolute right-[-300px] top-[20%]'>
            <div className='w-[878px] h-[956px] relative'>
              <Image
                src={'/images/Bg-gradient.png'}
                layout='fill'
                objectFit='contain'
                alt='bg-gradient'
              />
            </div>
          </div>

          {/* <div className='absolute bottom-[10%] left-[-20%]'>
            <div className='relative w-[206px] h-[103px] rounded-md'>
              <Image
                src={'/images/happy-customers.png'}
                layout='fill'
                objectFit='contain'
                alt='Happy cutomers'
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
