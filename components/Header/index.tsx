import FacebookIcon from 'components/assets/FacebookIcon';
import InstagramIcon from 'components/assets/InstgramIcon';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center relative'>
      <div className='bg-white w-[300px] h-[150px] flex justify-center items-center rounded-br-[200px] rounded-bl-[200px]'>
        <Link href={'/'}>
          <div className='relative w-[150px] h-[62px] cursor-pointer'>
            <Image
              src={'/images/Suzano Logo.png'}
              layout='fill'
              objectFit='cover'
              alt='Suzano Logo'
            />
          </div>
        </Link>
      </div>

      <div className='flex gap-2 absolute right-0'>
        <a
          href='https://www.instagram.com/mohamedriad17/'
          rel='noreferrer'
          target='_blank'
          className='socialLink'
        >
          <InstagramIcon />
        </a>

        <a
          href='https://www.facebook.com/mohamed.elfarkh.33'
          rel='noreferrer'
          target='_blank'
          className='socialLink'
        >
          <FacebookIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
