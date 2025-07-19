"use client";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import WrappedDetailsModalCards from "./WrappedDetailsModalCards";
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
    {
      type: "genres",
      items: items.genres,
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

  const getCardClass = (index: number) => {
    let diff = index - currentModalIndex;
    if (diff > categories.length / 2) {
      diff -= categories.length;
    } else if (diff < -(categories.length / 2)) {
      diff += categories.length;
    }
    if (diff === 0) return "carousel-center";
    if (diff === 1) return "carousel-right";
    if (diff === -1) return "carousel-left";
    return "carousel-hidden";
  };
  return (
    <div className="fixed inset-0 flex justify-center bg-primary-black/30 z-[100] backdrop-blur-xs">
      <button
        className="absolute flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-black top-1/2 left-[15px] z-100"
        onClick={onPrevIndex}
      >
        <MdArrowBackIos className="text-white" size={20} title="Previous" />
      </button>
      <button
        className="absolute flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-black top-1/2 right-[13px] z-100"
        onClick={onNextIndex}
      >
        <MdArrowForwardIos className="text-white" size={20} title="Next" />
      </button>
      <ul className="flex flex-1 relative overflow-hidden items-center">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`absolute w-full flex justify-center transition-all duration-500 ease-in-out ${getCardClass(
                index
              )}`}
            >
              <WrappedDetailsModalCards
                name={category.type}
                items={category.items}
                index={index + 1}
                onClose={onClose}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
