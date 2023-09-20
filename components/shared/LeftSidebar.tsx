'use client';

import React from 'react';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

function LeftSidebar() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route;
          return (
            <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
              <Image src={link.imgURL} alt={link.label} width={20} height={20} />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LeftSidebar;
