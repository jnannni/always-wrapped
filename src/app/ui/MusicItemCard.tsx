import Image from "next/image";
export default function MusicItemCard() {
  return (
    <div className="flex items-center px-[20px] py-[0.5rem] border border-black rounded-[10px]">
      <span className="inline-block text-[18px] w-[20px] mr-[20px]">1</span>
      <div className="w-[40px] h-[40px] bg-black mr-[15px]"></div>
      <p className="flex flex-col w-[145px] mr-[10px]">
        <span className="inline-block text-[12px]">Track Name</span>
        <span className="inline-block text-[8px]">Artist Name</span>
      </p>
      <span className="text-[12px]">33</span>
      <Image
        src="/more-icon.svg"
        width={512}
        height={512}
        alt="More icon"
        className="w-[16px] ml-auto"
      />
    </div>
  );
}
