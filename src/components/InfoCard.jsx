/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil";
import { RevenueCardFamily } from "../store/atom";

export function NextPayoutCard() {
  const { amount, orderCount } = useRecoilValue(
    RevenueCardFamily("Next Payout"),
  );

  return (
    <div className="bg-secondary-100 hover:bg-secondary-200 flex-grow overflow-hidden rounded-lg text-white shadow-sm">
      <div className="flex items-center gap-1 px-4 pt-4">
        <p>Next Payout</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <p className="text-4xl font-semibold">₹{amount.toLocaleString()}</p>
        <div>
          {orderCount && (
            <>
              <p className="inline text-base underline hover:cursor-pointer">
                {orderCount} Orders
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <div className="bg-secondary-200 flex items-center justify-between gap-2 rounded-lg px-4 py-2">
        <p>Next Payment Date:</p>
        <p>Today, 4:00PM</p>
      </div>
    </div>
  );
}

export function RevenueCard({ cardTitle }) {
  const { amount, orderCount } = useRecoilValue(RevenueCardFamily(cardTitle));

  return (
    <div className="bg-white flex-grow overflow-hidden rounded-lg shadow-sm">
      <div className="flex items-center gap-1 px-4 pt-4">
        <p className="text-grey">{cardTitle}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <p className="text-4xl font-semibold">₹{amount.toLocaleString()}</p>
        <div>
          {orderCount && (
            <>
              <p className="inline text-base font-medium text-primary-100 underline hover:cursor-pointer">
                {orderCount} Orders
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline size-6 text-primary-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
