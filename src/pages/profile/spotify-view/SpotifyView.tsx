import UserHeaderSection from "../ui/UserHeaderSection";
import UserListeningTrends from "../ui/UserListeningTrends";
import WrappedOverview from "../ui/WrappedOverview";
import { getSupabaseAccessToken } from "@/shared/api/auth";
import SpotifyUserStats from "./ui/SpotifyUserStats";
import SpotifyUserTopTracks from "./ui/SpotifyUserTopTracks";
import { getUsernameFromSupabase } from "@/shared/api/supabase";
export default async function SpotifyView() {
  const accessToken = await getSupabaseAccessToken();
  const lastfmConnected = await getUsernameFromSupabase();

  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <div className="md:flex md:gap-[80px] xl:gap-[150px]">
        <section className="flex flex-col gap-[25px]">
          <UserHeaderSection />
          <SpotifyUserStats
            lastfmConnected={Boolean(lastfmConnected)}
            accessToken={accessToken || ""}
          />
        </section>
        <UserListeningTrends timeRange="weekly">
          <SpotifyUserTopTracks />
        </UserListeningTrends>
      </div>
      <WrappedOverview />
    </main>
  );
}
