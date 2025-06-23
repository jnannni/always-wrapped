import MainProfileSection from "../ui/MainProfileSection";
import WeeklyStats from "../ui/WeeklyStats";
import WrappedOverview from "../ui/WrappedOverview";
export default function SpotifyView() {
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
