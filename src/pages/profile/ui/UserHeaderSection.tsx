"use client";
import ViewToggle from "@/features/toggle-between/ViewToggle";
import useUIStoreContext from "@/shared/state/useUIStoreContext";
import Image from "next/image";

type UserHeaderSectionProps = {
  lastfmUsername?: string;
};

export default function UserHeaderSection({
  lastfmUsername,
}: UserHeaderSectionProps) {
  const { userProfile } = useUIStoreContext();

  const imgInfo = userProfile.images[0];
  const username = userProfile.display_name;

  const profileImg = (
    <Image
      src={imgInfo.url || ""}
      alt="Profile image"
      height={Number(imgInfo.height)}
      width={Number(imgInfo.width)}
      className="object-cover"
    />
  );
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[30px] md:gap-[50px]">
      <div className="flex gap-[25px] md:flex-col md:gap-[10px]">
        <div className="w-[140px] h-[140px] rounded-full bg-black overflow-hidden md:order-2">
          {profileImg}
        </div>
        <h3 className="text-[20px] font-semibold md:order-1">
          {username}
          {lastfmUsername && ` (${lastfmUsername})`}
        </h3>
      </div>
      <ViewToggle />
    </div>
  );
}
