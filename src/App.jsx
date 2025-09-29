import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  /*
  const testdaten = [
    { id: 1, date: "01.09.2025", message: "Text vom 01.09.2025" },
    { id: 2, date: "02.09.2025", message: "Text vom 02.09.2025" },
    { id: 3, date: "03.09.2025", message: "Text vom 03.09.2025" },
    { id: 4, date: "04.09.2025", message: "Text vom 04.09.2025" },
  ];

  function initData() {
    console.log("initData");
    localStorage.setItem("PersonalDiary", JSON.stringify(testdaten));
  }

  initData();
  */

  return (
    <>
      <div className="">
        <Header />
        <div className="">
          <button onClick="alert(Click)}" className="">
            Add new entry
          </button>
        </div>
        <div className="card"></div>
      </div>
    </>
  );
}

export default App;
