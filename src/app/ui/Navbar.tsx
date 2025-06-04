import AppNavigation from "./navbar/AppNavigation";
import { auth } from "@/auth";
export default async function Navbar() {
  const session = await auth();
  return (
    <header className="pt-[24px] pb-[24px] mx-[30px] xl:pb-[52px] xl:mx-[80px]">
      <AppNavigation isLoggedIn={session?.user ? true : false} />
    </header>
  );
}
