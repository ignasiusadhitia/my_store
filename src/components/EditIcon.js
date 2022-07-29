import React from "react";
import PenIcon from "../styles/images/pen-to-square-solid.svg";

function EditIcon({ id, onEdit }) {
  return (
    <figure onClick={() => onEdit(id)}>
      <img src={PenIcon} alt="edit" />{" "}
    </figure>
  );
}

export default EditIcon;
