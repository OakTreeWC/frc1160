'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar2({pfp, name, role}) {
  const pathname = usePathname();
  const links = [
      // {"name":"diddys goonhole","href":"/dashboard/diddysgoonhole"},
  ]

  return (
    <div className="flex flex-row justify-between items-center z-10 w-full bg-gray-200">
      <div className="flex overflow-x-auto h-25 w-full justify-center items-center px-2">
        {links.map((link) => (
          <Link
            key={link.name}
            className="text-xl flex items-center justify-center p-4 text-black flex-shrink-0"
            href={link.href}
          >
            <p
              className={clsx(
                "transition hover:border-blue-500 border-4 px-2 py-1.5",
                {
                  "border-blue-500": pathname === link.href,
                  "border-transparent": pathname !== link.href,
                }
              )}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-start items-center space-x-5 md:pr-20">
        <Image src={pfp} alt={name} width={40} height={40} className="rounded-full" />
        <div className="flex flex-col justify-center items-start">
          <span className="font-medium text-xl whitespace-nowrap">{name}</span>
          <span className="text-sm p-1 px-2 rounded bg-gray-300 text-gray-600">{role?.toUpperCase()}</span>
        </div>
      </div>
    </div>
    )
}