import SignIn from "../src/features/navigation/auth/SignIn";

export default async function Home() {
  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <SignIn />
    </main>
  );
}
