import React from "react";
import { StyledDelBtn } from "../styles/DeleteSelected.styles";

type DeleteProps = {
  onDelete: () => void;
};

const DeleteSelected: React.FC<DeleteProps> = ({ onDelete }: DeleteProps) => {
  return (
    <>
      <StyledDelBtn onClick={onDelete}>Delete Selected</StyledDelBtn>
    </>
  );
};

export default DeleteSelected;
