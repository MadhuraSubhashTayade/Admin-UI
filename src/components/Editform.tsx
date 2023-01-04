import React, { useRef, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import { RxPencil2 } from "react-icons/rx";
import { StyledPageBtn } from "../styles/Pagination.styles";
import {
  EditFormStyles,
  StyledButton,
  StyledForm,
  StyledHeading,
} from "../styles/Editform.styles";
import { UserType } from "../App";

type ModalProps = {
  id: string;
  user: UserType;
  editUser: (id: string, updatedUser: UserType) => void;
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const EditForm: React.FC<ModalProps> = ({
  id,
  user,
  editUser,
}: ModalProps): React.ReactElement => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const styleobj = {
    ...modalStyle,
    ...EditFormStyles,
  };

  const [updatedUser, setUpdatedUser] = useState<UserType>(user);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveUpdatedUser = () => {
    editUser(updatedUser.id, updatedUser);
    handleClose();
  };

  const body = (
    <div style={modalStyle} className="editform-container">
      <StyledHeading id="simple-modal-title">Edit user details</StyledHeading>
      <StyledForm>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          className="name"
          type="text"
          value={updatedUser.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdatedUser((prevState) => {
              return {
                ...prevState,
                name: e.target.value,
              };
            });
          }}
        />
        <br />
        <label htmlFor="email">Email </label>
        <input
          id="email"
          className="email"
          type="text"
          value={updatedUser.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdatedUser((prevState) => {
              return {
                ...prevState,
                email: e.target.value,
              };
            });
          }}
        />
        <br />

        <input
          id="member-role"
          type="radio"
          name="role"
          value="member"
          checked={user.role === "member"}
          onChange={() => {}}
        />
        <label htmlFor="member-role"> Member </label>

        <input
          id="admin-role"
          type="radio"
          name="role"
          value="admin"
          checked={user.role === "admin"}
          onChange={() => {}}
        />
        <label htmlFor="admin-role"> Admin</label>
        <br />
        <StyledButton onClick={saveUpdatedUser}>Update User</StyledButton>
      </StyledForm>
    </div>
  );

  return (
    <div>
      <StyledPageBtn onClick={handleOpen}>
        <RxPencil2 className="action-icon" />
      </StyledPageBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default EditForm;
