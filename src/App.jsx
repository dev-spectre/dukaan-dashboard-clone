import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Sidebar from "./components/Nav";

function App() {
  return (
    <RecoilRoot>
      <Sidebar />
      <div className="relative h-[100dvh] bg-primary-200 lg:ml-56">
        <Header />
      </div>
    </RecoilRoot>
  );
}

export default App;
