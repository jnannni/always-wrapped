import UserStatsCard from "./UserStatsCard";
import ConnectLastfmCard from "@/features/lastfm-connect/ConnectLastfmCard";
type UserStatsProps = {
  lastfmConnected: boolean;
  accessToken: string;
};

export default function UserStats({
  lastfmConnected,
  accessToken,
}: UserStatsProps) {
  return (
    <div className="scroll-smooth overflow-x-auto overflow-hidden mb-[38px]">
      <div className="flex flex-col gap-[15px] w-fit">
        <div className="flex flex-nowrap gap-[24px]">
          <UserStatsCard key={"minutes-listened"} name="Minutes listened" />
          <UserStatsCard key={"tracks-added"} name="Tracks added" />
        </div>
        <div className="flex flex-nowrap gap-[24px]">
          <UserStatsCard key={"top-artist"} name="Top artist" />
          {lastfmConnected ? (
            <UserStatsCard key={"top-tracks"} name="Top tracks" />
          ) : (
            <ConnectLastfmCard
              key={"connect-lastfm"}
              accessToken={accessToken}
            />
          )}
        </div>
      </div>
    </div>
  );
}
