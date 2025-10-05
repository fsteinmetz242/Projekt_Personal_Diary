import { getDataFromLocalStorage } from "./handleData";

const ValidateForm = async ({
  EntryTitle,
  EntryDate,
  EntryImage,
  EntryText,
}) => {
  const existingEntries =
    (await getDataFromLocalStorage("PersonalDiary")) || [];
  const validationErrors = {};

  if (!EntryTitle.trim()) {
    validationErrors.EntryTitle = "Title is required";
  }
  if (!EntryDate.trim()) {
    validationErrors.EntryDate = "Date is required";
  } else {
    existingEntries.map((oneDay) => {
      if (
        (oneDay.EntryDate !== undefined) | null &&
        oneDay.EntryDate === EntryDate
      ) {
        validationErrors.duplicate = "There is always an entry existing.";
      }
    });
  }
  if (!EntryImage.trim()) {
    validationErrors.EntryImage = "An image is required";
  }
  if (!EntryText.trim()) {
    validationErrors.EntryText = "You must make an entry.";
  }
  return validationErrors;
};
export default ValidateForm;
