import { LastfmArtist, LastfmTrack } from "@/shared/types/lastfm";
import { SpotifyArtist, SpotifyTrack } from "@/shared/types/spotify";

type ListProps = {
  listName: string;
  itemNames: SpotifyArtist[] | SpotifyTrack[] | LastfmArtist[] | LastfmTrack[];
  className?: string;
};

export default function WrappedOverviewList({ listName, itemNames, className }: ListProps) {
  return (
    <div className={`flex flex-col ${className} text-white`}>
      <h4 className="text-[18px] font-semibold">{listName}</h4>
      <ol type="1" className="list-decimal pl-4">
        {itemNames.map((item, index) => {
          return (
            <li
              key={index}
              className="text-[15px] leading-tight max-w-[130px] list-item text-ellipsis"
            >
              {item.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
