import { Routes, Route } from "react-router";
import MainLayout from "./pages/MainLayout";
import "./App.css";
import Home from "./pages/Home";
import DiaryAddNew from "./components/DiaryAddNew";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/addNew" element={<DiaryAddNew />} />
      </Route>
    </Routes>
  );
};

export default App;
