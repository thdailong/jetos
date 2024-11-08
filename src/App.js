import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import DashboardPage from "page/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
