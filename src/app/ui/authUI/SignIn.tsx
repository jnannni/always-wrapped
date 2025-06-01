import { signIn } from "@/auth";
export default function SignIn() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("spotify");
        }}
        className="flex flex-col justify-center border-1 w-fit px-[100px] py-[50px] "
      >
        <p className="mb-[20px] max-w-[200px] text-center">
          To edit your wrapped, please, log in with your Spotify account
        </p>
        <button
          type="submit"
          className="px-[15px] py-[5px] rounded-[5px] bg-black text-white font-semibold w-full cursor-pointer"
        >
          Signin with Spotify
        </button>
      </form>
    </div>
  );
}
