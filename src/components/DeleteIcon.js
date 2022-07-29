import React from "react";
import TrashIcon from "../styles/images/trash-can-solid.svg";

function DeleteIcon({ id, onDelete }) {
  return (
    <figure onClick={() => onDelete(id)}>
      <img src={TrashIcon} alt="delete" />
    </figure>
  );
}

export default DeleteIcon;
