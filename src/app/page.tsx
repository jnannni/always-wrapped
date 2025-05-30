import Image from "next/image";
import LogIn from "./ui/authUI/LogIn";

export default function Home() {
  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <LogIn />
    </main>
  );
}
