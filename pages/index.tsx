import FacebookIcon from 'components/assets/FacebookIcon';
import InstagramIcon from 'components/assets/InstgramIcon';
import Header from 'components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen'>
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

        {/* <h1 className='text-4xl'>Suzano Café</h1> */}
      </main>
    </div>
  );
};

export default Home;
