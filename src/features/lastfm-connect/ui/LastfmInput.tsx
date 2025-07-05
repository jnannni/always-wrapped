export default function LastfmInput(props: { isConfirmed: boolean }) {
  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        required
        placeholder="Username"
        className={`bg-placeholder rounded-[10px] ${
          props.isConfirmed && "cursor-none"
        } md:h-[50px] md:w-[400px] md:px-[25px] md:mt-[40px]`}
        readOnly={props.isConfirmed}
      />
    </div>
  );
}
