import React, { FC, ReactElement } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { RxTrash } from "react-icons/rx";
import EditForm from "./Editform";
import { StyledPageBtn } from "../styles/Pagination.styles";
import { UserType } from "../App";
import {
  GridStyles,
  HeaderCellStyles,
  TableCellStyles,
} from "../styles/Grid.styles";

type GridProps = {
  users: UserType[];
  deleteUser: (id: string) => void;
  handleOnSelect: (id: string) => void;
  selectAll: boolean;
  selectAllUsers: () => void;
  editUser: (id: string, updatedUser: UserType) => void;
};

const Grid: FC<GridProps> = ({
  users,
  deleteUser,
  handleOnSelect,
  selectAllUsers,
  selectAll,
  editUser,
}: GridProps): ReactElement => {
  return (
    <TableContainer sx={GridStyles}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={HeaderCellStyles}>
              {" "}
              <input
                type="checkbox"
                checked={selectAll}
                onChange={selectAllUsers}
              />
            </TableCell>
            <TableCell sx={HeaderCellStyles}>NAME</TableCell>
            <TableCell sx={HeaderCellStyles}>EMAIL</TableCell>
            <TableCell sx={HeaderCellStyles}>ROLE</TableCell>
            <TableCell sx={{ ...HeaderCellStyles, textAlign: "right" }}>
              ACTIONS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: UserType) => {
            return (
              <TableRow key={user.id} selected={user.selected}>
                <TableCell sx={TableCellStyles}>
                  <input
                    type="checkbox"
                    checked={user.selected}
                    onChange={() => handleOnSelect(user.id)}
                  />
                </TableCell>
                <TableCell sx={TableCellStyles}>{user.name}</TableCell>
                <TableCell sx={TableCellStyles}>{user.email}</TableCell>
                <TableCell sx={TableCellStyles}>{user.role}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    ...TableCellStyles,
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "row-reverse",
                  }}
                >
                  <EditForm id={user.id} user={user} editUser={editUser} />
                  <StyledPageBtn onClick={() => deleteUser(user.id)}>
                    <RxTrash className="delete-icon" />
                  </StyledPageBtn>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grid;
