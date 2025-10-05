import { useEffect, useState } from "react";
import DiaryDetailsModal from "./DiaryDetailsModal";

const DiaryCard = ({ diaryDayData }) => {
  const [showDiaryDetails, setShowDiaryDetails] = useState(false);
  let detailsElement = document?.getElementById(diaryDayData.id);

  useEffect(() => {
    if (!showDiaryDetails) {
      detailsElement?.close();
    }
  }, [showDiaryDetails]);

  return (
    <div
      className="card bg-base-100 w-64 shadow-sm"
      onClick={() => setShowDiaryDetails(!showDiaryDetails)}
    >
      <figure>
        <img
          src={diaryDayData.EntryImage}
          alt=""
          className="object-contain w-full rounded"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{diaryDayData.EntryTitle}</h2>
        <h3>{diaryDayData.EntryDate}</h3>
        <p> {diaryDayData.EntryText}</p>
      </div>
      <DiaryDetailsModal
        diaryDayData={diaryDayData}
        setshowDiaryDetails={setShowDiaryDetails}
        showDiaryDetails={showDiaryDetails}
      />
      {showDiaryDetails ? detailsElement?.showModal() : null}
    </div>
  );
};

export default DiaryCard;
