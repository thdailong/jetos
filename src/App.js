import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
