import ConnectLastfmCard from "@/features/lastfm-connect/ConnectLastfmCard";
import UserStats from "../../ui/UserStats";
import UserStatsCard from "../../ui/UserStatsCard";

type SpotifyUserStatsProps = {
  lastfmConnected: boolean;
  accessToken: string;
};
export default function SpotifyUserStats({
  lastfmConnected,
  accessToken,
}: SpotifyUserStatsProps) {
  return (
    <UserStats>
      <div className="flex flex-nowrap gap-[24px]">
        <UserStatsCard key={"minutes-listened"} name="Minutes listened" />
        <UserStatsCard key={"tracks-added"} name="Tracks added" />
      </div>
      <div className="flex flex-nowrap gap-[24px]">
        <UserStatsCard key={"top-artist"} name="Top artist" />
        {lastfmConnected ? (
          <UserStatsCard key={"top-tracks"} name="Top tracks" />
        ) : (
          <ConnectLastfmCard key={"connect-lastfm"} accessToken={accessToken} />
        )}
      </div>
    </UserStats>
  );
}
