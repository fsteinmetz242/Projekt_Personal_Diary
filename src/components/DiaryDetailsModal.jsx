const DiaryDetailsModal = ({
  diaryDayData,
  setShowDiaryDetails,
  showDiaryDetails,
}) => {
  function closeModal(event) {
    event.preventDefault();
    setShowDiaryDetails(!showDiaryDetails);
  }

  return (
    <dialog
      id={diaryDayData.id}
      className="modal transition ease-in-out duration-400"
    >
      <div className="modal-box flex flex-col w-64 px-5 ">
        <button
          className="btn btn-sm btn-ghost absolute right-2 top-2"
          onClick={(event) => closeModal(event)}
        >
          x
        </button>
        <h1 className="text-xl">{diaryDayData.EntryTitle}</h1>
        <div>
          <figure>
            <img
              className="object-contain rounded shadow-sm"
              src={diaryDayData.EntryImage}
              alt=""
            />
          </figure>
          <h3 className="text-sm pt-2">
            {new Date(diaryDayData.EntryDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h3>
        </div>
        <div className="overflow-auto">
          <textarea
            className="w-full resize-none"
            rows={10}
            disabled={true}
            value={diaryDayData.EntryText}
          />
        </div>
      </div>
    </dialog>
  );
};
export default DiaryDetailsModal;
