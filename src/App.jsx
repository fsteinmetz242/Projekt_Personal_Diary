import DiaryCardsList from "./components/DiaryCardsList";

import "./App.css";

import DiaryAddNewEntryModal from "./components/DiaryAddNewEntryModal";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from ".";
import DiaryCard from "./components/DiaryCard";

const App = () => {
  const [stateAddModal, setAddNewEntryModalMode] = useState(false);
  const [diaryEntries, setDiaryDataState] = useState([]);
  const modalDialog = document.getElementById("diaryAddNewModal");

  useEffect(() => {
    if (!stateAddModal) {
      modalDialog?.close();
      async function getDiaryData() {
        let DiaryData = await getDataFromLocalStorage("PersonalDiary");
        setDiaryDataState(DiaryData);
      }
      getDiaryData();
    }
  }, [stateAddModal]);

  function setModalOn() {
    setAddNewEntryModalMode(true);
  }

  return (
    <div className="py-5 space-y-5">
      <div className="flex flex-col border rounded-3xl border-blue-800 ">
        <div className="flex flex-row justify-around">
          <a href="/" className="btn btn-xl btn-outline btn-primary mt-5">
            Personal Diary
          </a>
          <button
            className="btn btn-xl btn-outline btn-primary mt-5"
            onClick={() => {
              setModalOn();
            }}
          >
            Add new entry
          </button>
        </div>
        <div className="card"></div>
      </div>

      <div>
        <DiaryAddNewEntryModal
          stateAddModal={stateAddModal}
          setAddNewEntryModalMode={setAddNewEntryModalMode}
        />
        {stateAddModal ? modalDialog.showModal() : null}
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {diaryEntries &&
          diaryEntries
            ?.sort(function (a, b) {
              if (a.EntryDate < b.EntryDate) {
                return -1;
              }
              if (a.EntryDate > b.EntryDate) {
                return 1;
              }
              return 0;
            })
            .reverse()
            .map((diaryDayData) => (
              <DiaryCard key={diaryDayData.id} diaryDayData={diaryDayData} />
            ))}
      </div>
    </div>
  );
};

export default App;
