"use client";
import { signOut } from "next-auth/react";
export default function LogOutButton() {
  return (
    <button
      className="lowercase text-center cursor-pointer"
      onClick={() => signOut({ redirectTo: "/" })}
    >
      Logout
    </button>
  );
}
