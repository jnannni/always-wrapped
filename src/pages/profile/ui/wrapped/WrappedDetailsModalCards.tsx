import Image from "next/image";
import { LastfmArtist, LastfmTrack } from "@/shared/types/lastfm";
import { SpotifyArtist, SpotifyTrack } from "@/shared/types/spotify";
import { MdClose } from "react-icons/md";

type WrappedItem =
  | SpotifyArtist
  | SpotifyTrack
  | LastfmArtist
  | LastfmTrack
  | { name: string; value: number };
type WrappedDetailsModalCardProps = {
  name: string;
  items: WrappedItem[];
  index: number;
  onClose: () => void;
};
export default function WrappedDetailsModalCards({
  name,
  items,
  index,
  onClose,
}: WrappedDetailsModalCardProps) {
  if (!items) {
    return <div>Loading...</div>;
  }
  const getColorClasses = (index: number) => {
    const colors = ["yellow", "purple", "red", "green"];
    const colorIndex = index % 4 === 0 ? 0 : index % 3 === 0 ? 1 : index % 2 === 0 ? 2 : 3;
    const color = colors[colorIndex];

    return {
      shadow: `wrapped-card-shadow-${color}`,
      underline: `underline-color-${color}`,
    };
  };
  const { shadow, underline } = getColorClasses(index);
  return (
    <div
      className={`relative flex flex-col w-[275px] h-[320px] bg-primary-black rounded-[10px] overflow-hidden ${shadow}`}
    >
      <div className="relative flex justify-center pt-[18px] pb-[10px] flex-shrink-0">
        <h5 className="text-white text-[25px] font-bold leading-5 text-center z-10">
          Your top <br />
          {name}
        </h5>
        <Image
          src="/text-underline-up.svg"
          unoptimized
          width={317}
          height={48}
          alt="Underline for a word"
          className={`absolute w-[120px] top-11 z-9 ${underline}`}
        />
      </div>
      <ol className="flex flex-col flex-1 max-h-[100%] pb-[10px] text-white overflow-y-auto">
        {items.map((item, index) => {
          const artists =
            "artists" in item && typeof item.artists[0].name === "string"
              ? item.artists[0].name
              : "";
          const popularity =
            "popularity" in item
              ? item.popularity
              : "@attr" in item && item["@attr"]
              ? item["@attr"].rank
              : "value" in item
              ? item.value
              : "";
          return (
            <li
              key={item.name}
              className="flex justify-between items-center px-[20px] py-[8px] text-[16px] flex-shrink-0"
            >
              <div className="flex items-center">
                <span className="inline-block text-[18px] w-[20px] mr-[5px]">{index + 1}</span>
                <div className="flex flex-col max-w-[200px]">
                  <p className="text-white leading-tight">{item.name}</p>
                  {artists && <p className="text-white text-[9px]">{artists}</p>}
                </div>
              </div>
              <p className="text-white">{popularity && popularity}</p>
            </li>
          );
        })}
      </ol>
      <button
        className="absolute cursor-pointer top-[10px] right-[7px]"
        onClick={() => {
          onClose();
        }}
      >
        <MdClose className="text-white w-full h-full" />
      </button>
    </div>
  );
}
