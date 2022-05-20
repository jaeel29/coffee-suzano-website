import FacebookIcon from 'components/assets/FacebookIcon';
import InstagramIcon from 'components/assets/InstgramIcon';
import Header from 'components/Header';
import Hero from 'components/Hero';
import PageLayout from 'components/Page';
import Products from 'components/Products';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Suzano Café</title>
        <link rel='icon' href='/images/Suzano-favicon.png' />
      </Head>

      <PageLayout>
        <Hero />
        <Products />
      </PageLayout>
    </Fragment>
  );
};

export default Home;
