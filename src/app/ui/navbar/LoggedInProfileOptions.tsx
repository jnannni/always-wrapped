import LogOutButton from "../authUI/LogOutButton";
import { useState } from "react";
import Link from "next/link";

export default function LoggedInProfileOptions() {
  const [isProfileOptionsVisible, setIsProfileOptionsVisible] = useState(false);
  return (
    <div className="relative flex justify-center">
      <button
        className="lowercase text-center cursor-pointer"
        onClick={() => setIsProfileOptionsVisible(!isProfileOptionsVisible)}
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
            <LogOutButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
