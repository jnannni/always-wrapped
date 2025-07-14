export default function SignInButton(props: {
  text: string;
  className?: string;
  onClickHandler?: () => void;
}) {
  return (
    <button
      type="submit"
      className={`${props.className} px-[15px] py-[5px] rounded-[10px] bg-limegreen text-primary-black font-semibold w-full cursor-pointer`}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
}
