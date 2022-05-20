import FacebookIcon from 'components/assets/FacebookIcon';
import InstagramIcon from 'components/assets/InstgramIcon';
import Header from 'components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Head>
        <title>Suzano Café</title>
        <link rel='icon' href='/images/Suzano-favicon.png' />
      </Head>

      <main className='h-full max-w-screen-xl w-full mx-auto relative'>
        <div className='absolute left-0 top-[-100px] rotate-[220deg]'>
          <Image
            src={'/images/splash-1.png'}
            width={200}
            height={200}
            objectFit='contain'
            alt='splash-1'
          />
        </div>

        <Header />

        <div className='border-red flex items-center h-[calc(100%-150px)] overflow-hidden'>
          <div className='flex-1 border-red h-full relative'>
            <div className='mt-[56px]'>
              <span className='text-[#C6453E] text-base font-normal mb-3 inline-block'>
                Coffee Time.... ☕
              </span>
              <h1 className='text-[56px] font-Romelio font-100 leading-[72px] text-[#5E1F12]'>
                Enjoy Your <br /> Morning <span className='text-[#C6453E]'>Coffee.</span>
              </h1>
            </div>

            <div className='absolute left-[30px] bottom-[-80px] scale-125'>
              <Image
                src={'/images/splash-1.png'}
                width={200}
                height={200}
                objectFit='contain'
                alt='splash-1'
              />
            </div>
          </div>

          <div className='relative flex-1 h-full'>
            <div className='absolute right-[-180px] top-[30%]'>
              <div className='w-[878px] h-[956px] relative'>
                <Image
                  src={'/images/Bg-gradient.png'}
                  layout='fill'
                  objectFit='contain'
                  alt='bg-gradient'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
