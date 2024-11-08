import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { NAVIGATES } from "lib/constants";
import NotFoundPage from "page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={MainLayout}>
          {NAVIGATES.map((Item) => (
            <Route
              key={Item.label}
              path={Item.path}
              element={<Item.Component />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
