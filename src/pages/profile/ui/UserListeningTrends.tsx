import Image from "next/image";
import SpotifyUserTopTracks from "./SpotifyUserTopTracks";

type UserListeningTrendsProps = {
  timeRange: string;
};
export default function UserListeningTrends({ timeRange }: UserListeningTrendsProps) {
  return (
    <section className="flex flex-col gap-[5px]">
      <h3 className="font-semibold text-[50px] leading-8 mb-[5px] md:mb-[25px] xl:text-[60px] xl:leading-9">
        <span className="inline-block leading-8 xl:leading-9">
          Your top <br className="md:hidden" />
          <span className={`inline-block relative text-[60px] xl:text-[70px]`}>
            {timeRange}
            <Image
              src="/text-underline-up.svg"
              width={317}
              height={48}
              alt="Underline for a word"
              className="absolute left-3 top-7 -z-1 underline-color-green"
            />
          </span>
        </span>
        <br />
        tracks
      </h3>
      <SpotifyUserTopTracks />
    </section>
  );
}
