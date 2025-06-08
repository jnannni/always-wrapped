import { MdClose, MdInfoOutline } from "react-icons/md";
export default function BodyTemplate(props: {
  children: React.ReactNode;
  className?: string;
  setState: (value: boolean) => void;
}) {
  return (
    <div
      className={`${props.className} z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-primary-text bg-white border-1 rounded-[10px] border-black md:w-[500px] md:h-[390px]`}
    >
      <div className="flex justify-between md:mt-[25px] md:w-[430px]">
        <button data-tooltip-target="info-tooltip" className="cursor-pointer">
          <MdInfoOutline className="w-[25px] h-[25px]" />
        </button>
        <div className="absolute z-15 invisible inline-block bg-foreground text-white transition-opacity duration-300 rounded-[10px] opacity-0 md:text-[15px]"></div>
        <div id="info-tooltip" role="tooltip" className="absolute hidden"></div>
        <button
          className="cursor-pointer"
          onClick={() => props.setState(false)}
        >
          <MdClose className="w-[25px] h-[25px]" />
        </button>
      </div>
      {props.children}
    </div>
  );
}
