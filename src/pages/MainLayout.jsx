import { Outlet } from "react-router";
import { useState } from "react";
import DiaryNavBar from "../components/DiaryNavBar";

const MainLayout = () => {
  const [diary, setDiary] = useState(
    () => JSON.parse(localStorage.getItem("PersonalDiary")) || []
  );

  return (
    <>
      <DiaryNavBar />
      <main>
        <Outlet context={{ diary, setDiary }} />
      </main>
    </>
  );
};

export default MainLayout;
