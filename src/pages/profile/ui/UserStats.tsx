type UserStatsProps = {
  children: React.ReactNode;
};

export default function UserStats({ children }: UserStatsProps) {
  return (
    <div className="scroll-smooth overflow-x-auto overflow-hidden mb-[38px]">
      <div className="flex flex-col gap-[15px] w-fit">{children}</div>
    </div>
  );
}
