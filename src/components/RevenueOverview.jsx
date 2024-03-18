import { useRecoilValue } from "recoil";
import { transactionReportPeriodAtom } from "../store/atom";
import { RevenueCard, NextPayoutCard } from "./InfoCard";
import { Button } from "./utilities";

export default function RevenueOverview() {
  const transactionReportPeriod = useRecoilValue(transactionReportPeriodAtom);

  return (
    <section className="p-5">
      <div className="my-3 flex justify-between">
        <h2 className="text-xl font-semibold tracking-wider">Overview</h2>
        <Button className="mb-5 flex gap-2 rounded-md border border-zinc-300 px-2 py-1">
          <p>{transactionReportPeriod}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="ml-auto inline size-6 rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
      <div className="flex flex-wrap items-start gap-5">
        <NextPayoutCard />
        <RevenueCard cardTitle={"Amount Pending"} />
        <RevenueCard cardTitle={"Amount Processed"} />
      </div>
    </section>
  );
}
