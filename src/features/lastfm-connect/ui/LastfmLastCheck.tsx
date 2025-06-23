import type { LastfmUser } from "@/app/types/lastfm";
export default function LastfmLastCheck(props: { user: LastfmUser }) {
  return (
    <div className="flex flex-col md:gap-[20px]">
      <div className="bg-placeholder rounded-[10px] md:h-[50px] md:w-[400px] md:px-[25px] md:mt-[30px]">
        <p>{props.user.name}</p>
      </div>
      <div className="bg-placeholder rounded-[10px] md:h-[50px] md:w-[400px] md:px-[25px]">
        <p>{props.user.country}</p>
      </div>
    </div>
  );
}
