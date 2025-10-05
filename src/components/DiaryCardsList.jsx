import { useOutletContext } from "react-router";
import DiaryCard from "./DiaryCard";

const DiaryCardsList = () => {
  const { diary, setDiary } = useOutletContext();

  const createCards = () => {
    if (!diary) {
      console.log("Keine Daten!!");
    } else {
      // {key={element.id} DiaryText={element.message}
      diary.sort(() => {});
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
