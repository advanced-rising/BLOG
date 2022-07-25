import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <header>
      <ul className=' justify-center items-center gap-x-2 grid grid-flow-col'>
        <li>
          <Link href={'/posts/front'}>
            <a>Front</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/back'}>
            <a> Back</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/devops'}>
            <a>Devops</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/css'}>
            <a>CSS</a>
          </Link>
        </li>
        <li>
          <Link href={'/posts/cs'}>
            <a>CS</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
