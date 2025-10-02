import { useLocation } from "react-router";

const DiaryAddNew = () => {
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

  return <h1>Hallo</h1>;
};

export default DiaryAddNew;
