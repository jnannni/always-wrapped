"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="py-[24px] px-[30px]">
      <nav className="flex justify-between items-center">
        <div className="w-[50px] h-[12px]">
          <Link href={"/"}>
            <Image
              src="/logo-placeholder.svg"
              width={50}
              height={50}
              alt="Always Wrapped logo placeholder"
            />
          </Link>
        </div>
        <button className="md:hidden">
          <Image
            src="menu-burger.svg"
            width={26}
            height={12}
            alt="Mobile menu button"
            onClick={() => setIsNavVisible(!isNavVisible)}
          />
        </button>
        <div
          className={`absolute bg-white w-full top-12 right-0 ${
            isNavVisible ? "block" : "hidden"
          } md:block md:static md:w-fit`}
        >
          <ul className="flex md:flex-row flex-col items-center md:gap-[17px]">
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:px-[20px]">
              <Link className="block text-center" href="/about">
                About
              </Link>
            </li>
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:px-[20px]">
              <Link className="block text-center" href="/wrapped">
                Wrapped
              </Link>
            </li>
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:px-[20px]">
              <Link className="block text-center" href="/">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
