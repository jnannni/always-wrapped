export default function Button(props: { text: string; className?: string }) {
  return (
    <button
      className={`block box-borderlowercase text-center cursor-pointer ${props.className}`}
    >
      {props.text}
    </button>
  );
}
