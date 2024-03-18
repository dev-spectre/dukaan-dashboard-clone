import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Sidebar from "./components/Nav";
import RevenueOverview from "./components/RevenueOverview";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <RecoilRoot>
      <Sidebar />
      <div className="relative bg-primary-200 lg:ml-56">
        <Header />
        <RevenueOverview />
        <TransactionHistory />
        <footer className="text-sm mt-5 bg-zinc-100 pt-2 pb-3 text-center font-semibold">
          Made by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/dev-spectre"
          >
            Abhishek Dallas
          </a>
          , using{" "}
          <a
            className="underline"
            target="_blank"
            href="https://dashboard-clone-dukaan.vercel.app/"
          >
            Dukaan clone made by Bigyan Patel
          </a>{" "}
          as reference.
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
