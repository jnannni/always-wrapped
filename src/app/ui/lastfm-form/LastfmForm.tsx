export default function LastfmForm() {
  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        required
        placeholder="Username"
        className="bg-placeholder rounded-[10px] md:h-[50px] md:w-[400px] md:px-[25px] md:mt-[40px]"
      />
    </div>
  );
}
