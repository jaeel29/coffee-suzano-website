import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Suzano Café</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex justify-center items-center h-full'>
        <h1 className='text-4xl'>Suzano Café</h1>
      </main>
    </div>
  );
};

export default Home;
