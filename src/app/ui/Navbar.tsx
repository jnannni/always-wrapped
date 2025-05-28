"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header className="pt-[24px] pb-[24px] mx-[30px] xl:pb-[52px] xl:mx-[80px]">
      <nav className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              src="/logo-placeholder.svg"
              width={169}
              height={40}
              className="w-[49px] h-[12px] md:w-[100px] md:h-[20px]"
              alt="Always Wrapped logo placeholder"
            />
          </Link>
        </div>
        <button className="md:hidden">
          <Image
            src="menu-burger.svg"
            width={512}
            height={512}
            alt="Mobile menu button"
            className="w-[26px] h-[12px]"
            onClick={() => setIsNavVisible(!isNavVisible)}
          />
        </button>
        <div
          className={`absolute bg-white w-full top-12 right-0 ${
            isNavVisible ? "block" : "hidden"
          } md:block md:static md:w-fit`}
        >
          <ul className="flex md:flex-row flex-col text-[15px] items-center md:text-[20px] md:gap-[17px] xl:text-[24px]">
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px]">
              <Link className="block text-center" href="/about">
                About
              </Link>
            </li>
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px]">
              <Link className="block text-center" href="/wrapped">
                Wrapped
              </Link>
            </li>
            <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px]">
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
