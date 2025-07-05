export default function WrappedOverviewList() {
  return (
    <div className="flex flex-col">
      <h4 className="text-[18px] font-semibold">Top tracks</h4>
      <ol>
        <li className="text-[16px]">
          <span className="inline-block w-[20px] mr-[10px]">1.</span>Track Name
        </li>
        <li className="text-[16px]">
          <span className="inline-block w-[20px] mr-[10px]">2.</span>Track Name
        </li>
        <li className="text-[16px]">
          <span className="inline-block w-[20px] mr-[10px]">3.</span>Track Name
        </li>
        <li className="text-[16px]">
          <span className="inline-block w-[20px] mr-[10px]">4.</span>Track Name
        </li>
      </ol>
    </div>
  );
}
