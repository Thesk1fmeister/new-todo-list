import React from "react";
import "../App.css";
import TaskList from "./TaskList";
import { FiTrash2 } from "react-icons/fi";

function TodoList({
  lists,
  handleRemove,
  handleEdit,
  editingChange,
  editingSubmit,
  currentValue,
  handleChange,
  handleSubmit,
  removeList,
}) {

  return (
    <>
      {lists.map((list) => (
        <div className="todo-list" key={list.id}>
          <div className="task-input">
            <form onSubmit={(e) => handleSubmit(e, list)}>
              <input
                type="text"
                placeholder="Add task"
                value={list.value}
                onChange={(e) => handleChange(e, list)}
              />
            </form>
          </div>
          <h2>{list.listName}</h2>

          <ul>
            <TaskList
              list={list.tasks}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
              editingChange={editingChange}
              editingSubmit={editingSubmit}
            />
          </ul>
          <div className="delete-list">
            <FiTrash2 onClick={() => removeList(list)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
