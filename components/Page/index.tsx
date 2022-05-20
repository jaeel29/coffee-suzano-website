import Header from 'components/Header';
import React, { Fragment, ReactNode } from 'react';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-screen h-screen max-w-screen-xl mx-auto'>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
