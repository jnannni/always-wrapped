export default function SignInButton(props: {
  text: string;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`${props.className} px-[15px] py-[5px] rounded-[10px] bg-limegreen text-primary-black font-semibold w-full cursor-pointer`}
    >
      {props.text}
    </button>
  );
}
