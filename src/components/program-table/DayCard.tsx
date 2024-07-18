type DayCardProps = {
  day: string;
}
export function DayCard({ day }: DayCardProps) {
  return <div className="uppercase text-4xl bg-primary text-white p-6 shadow-box-right font-extrabold text-center px-2">
    {day}
  </div>
}