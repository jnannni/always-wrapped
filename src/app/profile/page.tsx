import MainProfileSection from "../ui/MainProfileSection";
import WeeklyStats from "../ui/WeeklyStats";
import WrappedOverview from "../ui/WrappedOverview";
export default function Profile() {
  return (
    <main className="mx-[30px] flex flex-col gap-[37px]">
      <MainProfileSection />
      <WeeklyStats />
      <WrappedOverview />
    </main>
  );
}
