import MainProfileSection from "../ui/profile-ui/MainProfileSection";
import WeeklyStats from "../ui/profile-ui/WeeklyStats";
import WrappedOverview from "../ui/profile-ui/WrappedOverview";
export default function Profile() {
  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <div className="md:flex md:gap-[80px] xl:gap-[150px]">
        <MainProfileSection />
        <WeeklyStats />
      </div>
      <WrappedOverview />
    </main>
  );
}
