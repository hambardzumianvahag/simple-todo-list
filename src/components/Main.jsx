import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Table from "./Table";

export default function Main() {
  const [inputVal, setInputVal] = useState("");
  const [table, setTable] = useState({
    task: ["Train", "Sleep", "Work"],
  });

  const handleButtonClick = () => {
    if (inputVal === "") {
      alert("Please enter a valid value");
    } else {
      let newTable = { ...table };
      newTable.task.push(inputVal);
      setTable(newTable);
      setInputVal("");
    }
  };
  return (
    <div className="Main">
      <Header />
      <Input inputVal={inputVal} setInputVal={setInputVal} />
      <Table table={table} setTable={setTable} handleButtonClick={handleButtonClick} />
    </div>
  );
}
