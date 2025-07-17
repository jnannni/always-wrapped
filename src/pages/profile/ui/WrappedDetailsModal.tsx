"use client";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import WrappedDetailsModalCard from "./WrappedDetailsModalCard";
import { SpotifyWrappedResType } from "@/shared/types/spotify";
import { LastfmWrappedResType } from "@/shared/types/lastfm";
type WrappedDetailsModalProps = {
  currentModalIndex: number;
  setCurrentModalIndex: (value: number) => void;
  onClose: () => void;
  items: SpotifyWrappedResType | LastfmWrappedResType;
};
export default function WrappedDetailsModal({
  currentModalIndex,
  setCurrentModalIndex,
  onClose,
  items,
}: WrappedDetailsModalProps) {
  const categories = [
    {
      type: "tracks",
      items: items.tracks,
    },
    {
      type: "artists",
      items: items.artists,
    },
  ];
  const onNextIndex = () => {
    const maxIndex = categories.length - 1;
    if (currentModalIndex === maxIndex) {
      setCurrentModalIndex(0);
    } else {
      setCurrentModalIndex(currentModalIndex + 1);
    }
  };
  const onPrevIndex = () => {
    const maxIndex = categories.length - 1;
    if (currentModalIndex === 0) {
      setCurrentModalIndex(maxIndex);
    } else {
      setCurrentModalIndex(currentModalIndex - 1);
    }
  };
  return (
    <div className="fixed inset-0 flex justify-center bg-primary-black/30 z-[100] backdrop-blur-xs">
      <button
        className="absolute flex items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-black top-1/2 left-[15px]"
        onClick={onPrevIndex}
      >
        <MdArrowBackIos className="text-white w-full h-full" />
      </button>
      <button
        className="absolute cursor-pointer w-[30px] h-[30px] rounded-full bg-black top-1/2 right-[13px]"
        onClick={onNextIndex}
      >
        <MdArrowForwardIos className="text-white w-full h-full" />
      </button>
      <ul className="flex flex-1 relative overflow-hidden items-center">
        {categories.map((category, index) => {
          if (index === currentModalIndex) {
            return (
              <div key={index} className="w-full flex justify-center">
                <WrappedDetailsModalCard
                  name={category.type}
                  items={category.items}
                  onClose={onClose}
                />
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
