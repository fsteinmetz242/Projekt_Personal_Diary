import DiaryCardsList from "../components/DiaryCardsList";
import DiaryAddNewEntryModal from "../components/DiaryAddNewEntryModal";

const Home = () => {
  return (
    <div className="py-5 space-y-5">
      <h1>Home</h1>
      <DiaryCardsList />
      <DiaryAddNewEntryModal />
    </div>
  );
};

export default Home;
