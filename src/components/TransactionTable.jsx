import { useRecoilValue } from "recoil";
import { transactionHistoryAtom } from "../store/atom";

export function TransactionTable() {
  const transactionHistory = useRecoilValue(transactionHistoryAtom);

  return (
    <table className="mt-7 w-full text-zinc-700 shadow-sm text-sm sm:text-base">
      <thead className="bg-stone-100 text-left text-grey">
        <th className="px-3 py-2">Order ID</th>
        <th className="px-3 py-2">Status</th>
        <th className="px-3 py-2">Transaction ID</th>
        <th className="px-3 py-2">Refund Date</th>
        <th className="px-3 py-2 text-right">Order Amount</th>
      </thead>
      <tbody className="divide-black">
        {transactionHistory.map((transaction, index) => {
          return (
            <tr className="relative text-xs sm:text-sm" key={transaction.transactionId}>
              <td className="px-3 py-2 font-semibold text-primary-100">
                {transaction.orderId}
              </td>
              <td className="px-3 py-2 text-center md:text-left">
                {transaction.status === "Successful" ? (
                  <span className="mr-1 inline-block size-[10px] rounded-full bg-emerald-500"></span>
                ) : (
                  <span className="mr-1 inline-block size-[10px] rounded-full bg-zinc-500"></span>
                )}
                <span className="hidden md:inline">{transaction.status}</span>
              </td>
              <td className="px-3 py-2">{transaction.transactionId}</td>
              <td className="px-3 py-2 whitespace-nowrap">{transaction.refundDate}</td>
              <td className="px-3 py-2 text-right">
                {transaction.orderAmount}
              </td>
              {index + 1 !== transactionHistory.length && (
                <span className="absolute bottom-0 left-0 ml-[10px] box-border h-[1px] w-[calc(100%-20px)] bg-zinc-300 rounded-lg"></span>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
