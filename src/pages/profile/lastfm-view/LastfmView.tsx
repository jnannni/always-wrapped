import UserHeaderSection from "../ui/UserHeaderSection";
import WeeklyStats from "../ui/UserListeningTrends";
import WrappedOverview from "../ui/WrappedOverview";
import LastfmUserStats from "./ui/LastfmUserStats";
export default function LastfmView() {
  return (
    <main className="mx-[30px] flex flex-col gap-[37px] xl:mx-[80px]">
      <div className="md:flex md:gap-[80px] xl:gap-[150px]">
        <section className="flex flex-col gap-[25px]">
          <UserHeaderSection />
          <LastfmUserStats />
        </section>
        <WeeklyStats />
      </div>
      <WrappedOverview />
    </main>
  );
}
