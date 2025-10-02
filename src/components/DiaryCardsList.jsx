import { useOutletContext } from "react-router";
import { useLocation } from "react-router";

import DiaryCard from "./DiaryCard";

const DiaryCardsList = () => {
  const { diary, setDiary } = useOutletContext();

  const Location = useLocation();
  const addNewLink = document.getElementById("addNew");

  console.log("Pfad: ", location.pathname, "   addNewLink: ", addNewLink);

  if (addNewLink) {
    if (location.pathname === "/addNew") {
      console.log("disable");
      //      addNewLink.disabled = true;
      addNewLink.setAttribute("disabled", true);
    } else {
      console.log("enable");
      //      addNewLink.disabled = false;
      addNewLink.removeAttribute("disabled");
    }
  }

  const createCards = () => {
    if (!diary) {
      console.log("Nix!!");
    } else {
      // {key={element.id} DiaryText={element.message}
      return diary.map((element) => (
        <DiaryCard key={element.id} DiaryText={element.message} />
      ));
    }
  };

  // <div>{createCards()}</div>
  return (
    <div>
      <ul className="flex flex-row gap-4 flex-wrap">{createCards()}</ul>
    </div>
  );
};
export default DiaryCardsList;
