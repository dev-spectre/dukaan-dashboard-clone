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
    }[cardTitle];
  },
});

export const navAtom = atom({
  key: "navAtom",
  default: false,
})