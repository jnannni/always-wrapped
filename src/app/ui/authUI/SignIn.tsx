import { signIn } from "@/auth";
import SignInButton from "./SignInButton";
export default function SignIn() {
  return (
    <div className="border-1 px-[100px] py-[100px] w-fit">
      <form
        action={async () => {
          "use server";
          await signIn("spotify", { redirectTo: "/profile" });
        }}
        className="flex flex-col border-box justify-center w-[250px] items-center"
      >
        <h3 className="mb-[20px] max-w-[200px] text-center">
          To edit your wrapped, please, log in with your Spotify account
        </h3>
        <SignInButton text="Signin with Spotify" />
      </form>
    </div>
  );
}
