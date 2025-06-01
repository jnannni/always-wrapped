"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLoggedIn] = useState(true);
  const [isProfileOptionsVisible, setIsProfileOptionsVisible] = useState(false);

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
              {isLoggedIn ? (
                <div className="relative flex justify-center">
                  <button
                    className="lowercase text-center cursor-pointer"
                    onClick={() =>
                      setIsProfileOptionsVisible(!isProfileOptionsVisible)
                    }
                  >
                    <span className="hidden md:block">Username</span>
                    <span className="block md:hidden">Profile</span>
                  </button>
                  <div
                    className={`${
                      isProfileOptionsVisible ? "block" : "hidden"
                    } absolute bg-black px-[40px] py-[10px] rounded-[10px] flex flex-col z-10 right-0 top-10`}
                  >
                    <ul className="text-white text-[18px]">
                      <li className="mb-[15px]">
                        <Link href="/profile">Profile</Link>
                      </li>
                      <li>
                        <button className="lowercase text-center cursor-pointer">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button className="lowercase text-center cursor-pointer">
                  Log In
                </button>
              )}
            </li>
            <li className="flex justify-center block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px] sm:hidden">
              <button className="lowercase text-center cursor-pointer">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
