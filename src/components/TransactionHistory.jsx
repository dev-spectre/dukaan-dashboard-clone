import { useRecoilValue } from "recoil";
import { transactionReportPeriodAtom } from "../store/atom";
import { Button, RoundButton } from "./utilities";
import { TransactionTable } from "./TransactionTable";
import Search from "./Search";

export default function TransactionHistory() {
  const TransactionHistoryPeriod = useRecoilValue(transactionReportPeriodAtom);

  return (
    <section className="p-5">
      <h2 className="mb-3 mt-2 text-lg font-semibold tracking-wide">
        Transactions | {TransactionHistoryPeriod}{" "}
      </h2>
      <div className="mb-5 flex gap-2">
        <RoundButton>Payouts (22)</RoundButton>
        <RoundButton isSelected={true}>Refund (6)</RoundButton>
      </div>
      <div className="rounded-sm bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <Search placeholder={"Order ID or transactions ID"} type="outline" />
          <div className="flex gap-2">
            <Button>
              <p>Sort</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="my-auto size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </Button>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="overflow-y-scroll">
          <TransactionTable />
        </div>
      </div>
    </section>
  );
}
