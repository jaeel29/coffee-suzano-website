import * as React from 'react';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M13.828 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56H17.1V3.127c-.819-.088-1.643-.13-2.467-.127-2.444 0-4.122 1.492-4.122 4.231v2.355H7.763v3.209h2.753v8.202h3.312z'
        fill='#fff'
      />
    </svg>
  );
}

export default FacebookIcon;
