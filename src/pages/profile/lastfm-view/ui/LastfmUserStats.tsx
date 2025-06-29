import UserStats from "../../ui/UserStats";
import UserStatsCard from "../../ui/UserStatsCard";
export default function LastfmUserStats() {
  return (
    <UserStats>
      <div className="flex flex-nowrap gap-[24px]">
        <UserStatsCard key={"minutes-listened"} name="Minutes listened" />
        <UserStatsCard key={"tracks-added"} name="Tracks added" />
      </div>
      <div className="flex flex-nowrap gap-[24px]">
        <UserStatsCard key={"top-artist"} name="Top artist" />
        <UserStatsCard key={"top-tracks"} name="Top tracks" />
      </div>
    </UserStats>
  );
}
