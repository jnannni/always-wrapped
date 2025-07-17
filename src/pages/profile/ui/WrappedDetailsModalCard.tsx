import Image from "next/image";
import { LastfmArtist, LastfmTrack } from "@/shared/types/lastfm";
import { SpotifyArtist, SpotifyTrack } from "@/shared/types/spotify";
import { MdClose } from "react-icons/md";

type WrappedDetailsModalCardProps = {
  name: string;
  items:
    | SpotifyArtist[]
    | SpotifyTrack[]
    | LastfmArtist[]
    | LastfmTrack[]
    | { name: string; value: number }[];
  onClose: () => void;
};
export default function WrappedDetailsModalCard({
  name,
  items,
  onClose,
}: WrappedDetailsModalCardProps) {
  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative w-[275px] h-[320px] bg-primary-black rounded-[10px]">
      <div className="relative">
        <p>Your top {name}</p>
        <Image
          src="/text-underline-up.svg"
          width={317}
          height={48}
          alt="Underline for a word"
          className="absolute -z-1"
        />
      </div>
      <ol>
        {items.map((item, index) => {
          const artist = "artist" in item ? item.artist : "";
          const popularity =
            "popularity" in item
              ? item.popularity
              : "@attr" in item && item["@attr"]
              ? item["@attr"].rank
              : "value" in item
              ? item.value
              : "";
          return (
            <li key={item.name}>
              <p className="text-white">{item.name}</p>
              {artist && <p className="text-white">{artist}</p>}
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
