import { LastfmArtist, LastfmTrack } from "@/shared/types/lastfm";
import { SpotifyArtist, SpotifyTrack } from "@/shared/types/spotify";

type ListProps = {
  listName: string;
  itemNames: SpotifyArtist[] | SpotifyTrack[] | LastfmArtist[] | LastfmTrack[];
};

export default function WrappedOverviewList({
  listName,
  itemNames,
}: ListProps) {
  return (
    <div className="flex flex-col">
      <h4 className="text-[18px] font-semibold">{listName}</h4>
      <ol>
        {itemNames.map((item, index) => {
          return (
            <li key={index} className="text-[16px]">
              <span className="inline-block w-[20px] mr-[10px]">
                {index + 1}.
              </span>
              {item.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
