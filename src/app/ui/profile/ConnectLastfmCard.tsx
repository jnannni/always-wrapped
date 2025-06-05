import Button from "../Button";
export default function ConnectLastfmCard() {
  return (
    <div className="bg-black flex-col text-white w-[198px] h-[135px] content-between rounded-lg shrink-0 relative">
      <h5 className="text-[28px] leading-[22px] px-[15px] pt-[10px] mb-[5px] capitalize">
        lastfm
      </h5>
      <div className="flex flex-col px-[15px] mt-[15px]">
        <Button
          text="Connect to lastfm"
          className="px-[15px] w-full bg-white text-black py-[10px] h-fit rounded-[10px]"
        />
        <Button text="Why?" />
      </div>
    </div>
  );
}
