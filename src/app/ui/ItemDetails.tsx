export default function ItemDetails(props: { visible: boolean }) {
  return (
    <div
      className={`absolute bg-black flex flex-col items-center rounded-[10px] w-[125px] top-5 right-5 ${
        props.visible ? "block" : "hidden"
      }`}
    >
      <button>
        <p className="text-[10px] text-white px-[10px] py-[10px] leading-3">
          Remove from wrapped
        </p>
      </button>
      <button>
        <p className="text-[10px] text-white px-[10px] py-[10px]">
          Remove from playlist
        </p>
      </button>
    </div>
  );
}
