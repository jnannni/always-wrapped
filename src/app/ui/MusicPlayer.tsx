import Image from "next/image";
export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center border-1 border-black rounded-[10px] py-[30px] md:max-h-[150px] md:border-none">
      <div className="flex gap-[40px] mb-[14px] md:gap-[11px]">
        <button>
          <Image
            src="/player-rewind-icon.svg"
            width={512}
            height={512}
            alt="Rewind backward player icon"
            className="w-[37px] h-[37px]"
          />
        </button>
        <button>
          <Image
            src="/player-play-icon.svg"
            width={512}
            height={512}
            alt="Play player icon"
            className="w-[40px] h-[40px]"
          />
        </button>
        <button>
          <Image
            src="/player-rewind-icon.svg"
            width={512}
            height={512}
            alt="Rewind forward player icon"
            className="w-[37px] h-[37px] rotate-180"
          />
        </button>
      </div>
      <p className="inline-block text-[12px] mb-[10px]">Name of the song</p>
      <div className="w-[270px] h-[8px] border-1 border-black md:w-[150px]">
        <div></div>
      </div>
    </div>
  );
}
