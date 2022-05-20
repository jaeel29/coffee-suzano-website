import FacebookIcon from 'components/assets/FacebookIcon';
import InstagramIcon from 'components/assets/InstgramIcon';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center sticky top-0 z-50 bg-white h-[80px]'>
      <Link href={'/'}>
        <div className='relative w-[104px] h-[44px] cursor-pointer transition-300 active:scale-90'>
          <Image
            src={'/images/Suzano-logo.svg'}
            layout='fill'
            objectFit='cover'
            alt='Suzano Logo'
          />
        </div>
      </Link>

      <div className='flex gap-2 absolute right-[24px]'>
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
