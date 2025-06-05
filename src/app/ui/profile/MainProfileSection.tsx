import UserStatsCard from "./UserStatsCard";
import ConnectLastfmCard from "./ConnectLastfmCard";
import MusicPlayer from "./MusicPlayer";
import { getSpotifyProfile } from "@/services/spotify";
export default async function MainProfileSection() {
  const profile = await getSpotifyProfile();
  console.log(profile);
  const imgInfo = profile.images[0];
  const username = profile.display_name;

  const profileImg = (
    <img
      src={imgInfo.url || ""}
      alt="Profile image"
      height={imgInfo.height}
      width={imgInfo.width}
      className="object-cover"
    />
  );
  return (
    <section className="flex flex-col gap-[25px]">
      <div className="flex flex-col md:flex-row md:items-center gap-[30px] md:gap-[50px]">
        <div className="flex gap-[25px] md:flex-col md:gap-[10px]">
          <div className="w-[140px] h-[140px] rounded-full bg-black overflow-hidden md:order-2">
            {profileImg}
          </div>
          <h3 className="text-[20px] font-semibold md:order-1">{username}</h3>
        </div>
        <MusicPlayer />
      </div>
      <div className="scroll-smooth overflow-x-auto overflow-hidden mb-[38px]">
        <div className="flex flex-col gap-[15px] w-fit">
          <div className="flex flex-nowrap gap-[24px]">
            <UserStatsCard name="Minutes listened" />
            <UserStatsCard name="Tracks added" />
          </div>
          <div className="flex flex-nowrap gap-[24px]">
            <UserStatsCard name="Minutes listened" />
            <ConnectLastfmCard />
          </div>
        </div>
      </div>
    </section>
  );
}
