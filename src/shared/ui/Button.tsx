export default function Button(props: {
  text: string;
  className?: string;
  onClickHandler?: () => void;
}) {
  return (
    <button
      className={`block box-borderlowercase text-center cursor-pointer bg-limegreen rounded-[10px] ${props.className}`}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
}
