"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavListItem from "./NavListItem";
import LoggedInProfileOptions from "./LoggedInProfileOptions";
import LogOutButton from "../authUI/LogOutButton";

export default function AppNavigation(props: { isLoggedIn: boolean }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isHidden = isNavVisible ? "block" : "hidden";
  return (
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
        className={`${isHidden} absolute bg-white w-full top-12 right-0 md:block md:static md:w-fit`}
      >
        <ul className="flex md:flex-row flex-col text-[15px] items-center md:text-[20px] md:gap-[17px] xl:text-[24px]">
          <NavListItem path="/about" name="About" />
          <NavListItem path="/Wrapped" name="Wrapped" />
          <li className="block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px]">
            {props.isLoggedIn ? (
              <LoggedInProfileOptions />
            ) : (
              <button className="lowercase text-center cursor-pointer">
                Log In
              </button>
            )}
          </li>
          <li className="flex justify-center block py-[8px] border-b border-black w-full lowercase md:border-none md:pl-[20px] sm:hidden">
            <LogOutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
