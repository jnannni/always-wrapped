export default function Button(props: {
  text: string;
  className?: string;
  onClickHandler?: () => void;
}) {
  return (
    <button
      className={`block box-borderlowercase text-center cursor-pointer ${props.className}`}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
}
