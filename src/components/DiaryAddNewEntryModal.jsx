import { useActionState, useEffect } from "react";
import ValidateForm from "../utils/ValidateForm";
import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
} from "../utils/handleData";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function action(_prevState, formData) {
  const validateData = Object.fromEntries(formData);
  const formErrors = await ValidateForm(validateData);
  await sleep(Math.random * 1000);
  if (Object.keys(formErrors).length === 0) {
    const DiaryData = (await getDataFromLocalStorage("PersonalDiary")) ?? [];
    let idOldMax = 0;
    DiaryData.map(function (objDiary) {
      if (objDiary.id > idOldMax) idOldMax = objDiary.id;
    });

    validateData.id = idOldMax + 1;
    setDataOnLocalStorage("PersonalDiary", [validateData, ...DiaryData]);
    alert("Your entry is successful saved.");
    return { errors: null, input: null, reset: true };
  }
  return { errors: formErrors, input: null, reset: false };
}

const DiaryAddNewEntryModal = ({ stateAddModal, setAddNewEntryModalMode }) => {
  const [state, formAction, isPending] = useActionState(action, {
    errors: null,
    input: null,
    reset: true,
  });

  useEffect(() => {
    async function saveDiaryEntry() {
      if (state.reset) {
        setAddNewEntryModalMode(false);
      }
    }
    saveDiaryEntry();
  }, [state]);

  function closeModal(event) {
    event.preventDefault();
    setAddNewEntryModalMode(false);
  }

  return (
    <>
      <dialog className="modal" id="diaryAddNewModal">
        <div className="modal-box  place-items-center">
          <h3>Enter a new entry</h3>
          <div className="modal-action justify-center">
            <form action={formAction}>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={(event) => closeModal(event)}
              >
                x
              </button>
              {/* Titel des Eintrages */}
              <label htmlFor="EntryTitle">
                <p>Titel</p>

                <input
                  type="text"
                  name="EntryTitle"
                  id="EntryTitle"
                  className="input input-primary"
                />
              </label>
              {state.errors?.EntryTitle && (
                <p className="text-red-600 mt-1 font-semibold">
                  {state.errors.EntryTitle}
                </p>
              )}

              {/* Datum des Eintrages */}

              <label htmlFor="EntryDate">
                <p>Date</p>

                <input
                  type="date"
                  name="EntryDate"
                  id="EntryDate"
                  className="input input-primary"
                />
              </label>
              {state.errors?.EntryDate && (
                <p className="text-red-600 mt-1 font-semibold">
                  {state.errors.EntryDate}
                </p>
              )}

              {state.errors?.duplicate && (
                <p className="text-red-600 mt-1 font-semibold">
                  {state.errors.duplicate}
                </p>
              )}

              {/* Bild zum Eintrages */}

              <label htmlFor="EntryImage">
                <p>Picture</p>

                <input
                  type="text"
                  name="EntryImage"
                  id="EntryImage"
                  className="input input-primary"
                />
              </label>
              {state.errors?.EntryImage && (
                <p className="text-red-600 mt-1 font-semibold">
                  {state.errors.EntryImage}
                </p>
              )}

              {/* Text des Eintrages */}
              <label htmlFor="EntryText">
                <p>Your Entry</p>
                <textarea
                  name="EntryText"
                  id="EntryText"
                  className="block textarea textarea-primary"
                  rows="8"
                ></textarea>
              </label>
              {state.errors?.EntryText && (
                <p className="text-red-600 mt-1 font-semibold">
                  {state.errors.EntryText}
                </p>
              )}

              {/* Button zum absenden */}
              <button
                type="submit"
                className="btn btn-md btn-outline btn-success mt-5"
              >
                {isPending ? "Saving new entry ..." : "Submit"}
              </button>
              {/* ------------------- */}
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DiaryAddNewEntryModal;
