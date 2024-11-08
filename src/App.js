import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import DashboardPage from "page/Dashboard";
import Transactions from "page/Transactions";
import Wallet from "page/Wallet";
import Analytics from "page/Analytics";
import Personal from "page/Personal";
import MessagePage from "page/Message";
import SettingPage from "page/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
