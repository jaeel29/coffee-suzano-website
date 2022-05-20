import React from 'react';
import items from 'data/coffeedata.json';
import Image from 'next/image';

const Products = () => {
  return (
    <section className='pb-[48px]'>
      <h1 className='text-[48px] mb-8 font-200 text-center text-brown'>Products</h1>

      <div className='flex flex-wrap gap-4 border-red p-6'>
        {items.map((item) => (
          <div
            key={item.id}
            className='bg-white flex-1 flex flex-col gap-6 items-center basis-[300px] rounded-2xl cursor-pointer p-6 transition-300 hover:shadow-lg active:scale-95 group'
          >
            <div className='w-[100px] h-[200px] relative'>
              <Image src={item.image} layout='fill' objectFit='cover' alt={item.name} />
            </div>

            <div className='flex flex-col items-center gap-3'>
              <h6 className='text-[32px] text-black'>{item.name}</h6>

              <span className='text-2xl font-200 bg-orange-500 py-2 px-5 text-white rounded-full transition-300 group-active:scale-90'>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
