import UserHeaderSection from "./UserHeaderSection";
import UserListeningTrends from "./UserListeningTrends";
import WrappedOverview from "./WrappedOverview";
import { getSupabaseAccessToken } from "@/shared/api/auth";
import UserStats from "./UserStats";
import ProfileDataWrapper from "./ProfileDataWrapper";
import { getUsernameFromSupabase } from "@/shared/api/supabase";
export default async function SpotifyView() {
  const accessToken = await getSupabaseAccessToken();
  const lastfmConnected = await getUsernameFromSupabase();

  return (
    <ProfileDataWrapper>
      <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
        <div className="md:flex md:gap-[80px] xl:gap-[150px]">
          <section className="flex flex-col gap-[25px]">
            <UserHeaderSection />
            <UserStats
              lastfmConnected={Boolean(lastfmConnected)}
              accessToken={accessToken || ""}
            />
          </section>
          <UserListeningTrends timeRange="weekly" />
        </div>
        <WrappedOverview />
      </main>
    </ProfileDataWrapper>
  );
}
