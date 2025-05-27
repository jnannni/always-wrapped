import WrappedCard from "./WrappedCard";
export default function WrappedOverview() {
  return (
    <div className="flex flex-col gap-[10px] items-center -mx-[30px]">
      <hr className="w-full border-2 border-black" />
      <h3 className="text-[30px] capitalize mt-[11px]">Your wrapped</h3>
      <div className="flex gap-[23px] w-full  overflow-hidden overflow-scroll">
        <WrappedCard />
        <WrappedCard />
        <WrappedCard />
      </div>
    </div>
  );
}
