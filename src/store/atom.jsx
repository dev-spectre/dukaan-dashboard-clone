import { atom, atomFamily } from "recoil";

export const RevenueCardFamily = atomFamily({
  key: "RevenueCard",
  default: (cardTitle) => {
    return {
      "Amount Pending": {
        orderCount: 13,
        amount: 92312.2,
      },
      "Amount Processed": {
        amount: 2392312.19,
      },
      "Next Payout": {
        amount: 2312.23,
        orderCount: 23,
      },
    }[cardTitle];
  },
});

export const navAtom = atom({
  key: "isNavOpen",
  default: false,
});

export const transactionReportPeriodAtom = atom({
  key: "transactionReportPeriod",
  default: "This Month",
});

export const transactionHistoryAtom = atom({
  key: "transactionHistory",
  default: [
    {
      orderId: "#281209",
      status: "Successful",
      transactionId: "TRX123456",
      refundDate: "Today, 8:45 PM",
      orderAmount: "₹1125.00",
    },
    {
      orderId: "#281210",
      status: "Processing",
      transactionId: "TRX634631",
      refundDate: "Tomorrow, 10:00 AM",
      orderAmount: "₹935.00",
    },
    {
      orderId: "#281211",
      status: "Successful",
      transactionId: "TRX625673",
      refundDate: "Yesterday, 3:30 PM",
      orderAmount: "₹750.00",
    },
    {
      orderId: "#281212",
      status: "Successful",
      transactionId: "TRX625470",
      refundDate: "Today, 11:20 AM",
      orderAmount: "₹2000.00",
    },
    {
      orderId: "#281213",
      status: "Processing",
      transactionId: "TRX624635",
      refundDate: "Tomorrow, 9:00 AM",
      orderAmount: "₹1800.00",
    },
    {
      orderId: "#281214",
      status: "Processing",
      transactionId: "TRX534639",
      refundDate: "Yesterday, 6:45 PM",
      orderAmount: "₹500.00",
    },
    {
      orderId: "#281215",
      status: "Successful",
      transactionId: "TRX695678",
      refundDate: "Today, 8:00 PM",
      orderAmount: "₹3000.00",
    },
    {
      orderId: "#281216",
      status: "Processing",
      transactionId: "TRX630634",
      refundDate: "Yesterday, 9:45 PM",
      orderAmount: "₹1200.00",
    },
    {
      orderId: "#281217",
      status: "Processing",
      transactionId: "TRX684630",
      refundDate: "Yesterday, 4:00 PM",
      orderAmount: "₹900.00",
    },
    {
      orderId: "#281218",
      status: "Successful",
      transactionId: "TRX804283",
      refundDate: "Today, 9:45 AM",
      orderAmount: "₹1500.00",
    },
  ],
});
