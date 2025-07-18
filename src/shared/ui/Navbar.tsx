import AppNavigation from "../../features/navigation/AppNavigation";
import { auth } from "@root/auth";
import { isSpotifyTokenValid } from "@/shared/api/spotify";
export default async function Navbar() {
  const session = await auth();
  const isValid = await isSpotifyTokenValid();
  const isLoggedIn = !session?.accessToken || !isValid ? false : true;
  return (
    <header className="pt-[24px] pb-[24px] mx-[30px] xl:pb-[52px] xl:mx-[80px]">
      <AppNavigation isLoggedIn={isLoggedIn} />
    </header>
  );
}
