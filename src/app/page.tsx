import { getSpotifyProfile } from "@/services/spotify";
import SignIn from "./ui/authUI/SignIn";
import { auth } from "@/auth";

export default async function Home() {
  const session = await getSpotifyProfile();
  console.log(session);
  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <SignIn />
    </main>
  );
}
