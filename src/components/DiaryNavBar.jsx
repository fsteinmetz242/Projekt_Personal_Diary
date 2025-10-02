import { useState } from "react";
import { Link } from "react-router";

const DiaryNavBar = () => {
  return (
    <div className="flex flex-col border rounded-3xl border-blue-800 ">
      <div className="flex flex-row justify-around">
        <Link to="/" className="btn btn-xl btn-outline btn-primary mt-5">
          Personal Diary
        </Link>

        <Link
          to="/addNew"
          className=" btn btn-xl btn-outline btn-success mt-5"
          id="addNew"
        >
          Add new enty
        </Link>
      </div>
      <div className="card"></div>
    </div>
  );
};

export default DiaryNavBar;
