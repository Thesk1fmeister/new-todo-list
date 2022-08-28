import React from "react";
import { FiTrash2, FiEdit, FiPlusCircle } from "react-icons/fi";
import "../App.css";

function TaskList({
  list,
  handleRemove,
  handleEdit,
  editingChange,
  editingSubmit,
}) {
  const dragStartHandler = (e, todo) => {
    console.log("drag", todo);
  };
  const dragEndHandler = () => {};
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = (e, todo) => {
    e.preventDefault();
    console.log("drop", todo);
  };

  return (
    <>
      {list.map((todo) => (
        <li
          key={todo.id}
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, todo)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, todo)}
        >
          {!todo.edit ? (
            <p>{todo.name}</p>
          ) : (
            <form>
              <input className="edit" type="text" onChange={editingChange} />
              <FiPlusCircle
                className="submit-edit"
                onClick={() => {
                  editingSubmit(todo);
                }}
              />
            </form>
          )}
          <span>
            <FiTrash2 onClick={() => handleRemove(todo)} />
            <FiEdit onClick={() => handleEdit(todo)} />
          </span>
        </li>
      ))}
    </>
  );
}

export default TaskList;
