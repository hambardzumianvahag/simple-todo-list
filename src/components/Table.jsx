import React from "react";

export default function Table({ table, setTable, handleButtonClick }) {
  let DeleteItem = (index) => {
    let newTable = { ...table };
    newTable.task.splice(index, 1);
    setTable(newTable);
  };
  let moveToFirstPosition = (items, indexToMove) => {
    let itemToMove = items.splice(indexToMove, 1)[0];
    items.unshift(itemToMove);
    let newTable = { ...table };
    return setTable(newTable);
  };
  return (
    <div className="Table">
      {table.task.map((item, index) => {
        return (
          <div className="Each-item" key={index}>
            <h3>{item}</h3>
			<button onClick={() => moveToFirstPosition(table.task, index)} className="Important">
              Important
            </button>
            <button onClick={() => DeleteItem(index)} className="Delete">
              Delete
            </button>
           
          </div>
        );
      })}
      <button className="Add" onClick={handleButtonClick}>
        Add New Task
      </button>
    </div>
  );
}
