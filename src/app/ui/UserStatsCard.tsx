export default function UserStatsCard(props: { name: string }) {
  return (
    <div className="bg-black flex-col text-white w-[198px] h-[123px] content-between rounded-lg shrink-0">
      <h5 className="text-[28px] leading-[22px] px-[15px] pt-[10px] mb-[5px] capitalize">
        {props.name}
      </h5>
      <h4 className="text-[40px] font-bold px-[15px]">Info</h4>
    </div>
  );
}
