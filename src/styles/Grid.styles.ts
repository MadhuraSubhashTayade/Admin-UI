import styled from "styled-components";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const StyledHeaderCell = styled(TableCell)`
  font-weight: bold;
  font-size: 5rem;
  background-color: tomato;
`;

export const StyledCell = styled(TableCell)`
  :nth-last-child() {
    background-color: yellow;
  }
`;

export const StyledRow = styled(TableRow)`
  .Mui-selected {
    background-color: yellow;
  }
`;

export const GridStyles = {
  backgroundImage: "linear-gradient(to right bottom, #fff5f5,#fff)",
  padding: "0 5rem",
  width: "90vw",

  "@media (max-width: 48.5em)": {
    width: "100vw",
  },
  "@media (max-width: 37.5em)": {
    width: "100vw",
    height: "90vh",
    padding: "0 3rem",
  },
};
export const HeaderCellStyles = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  paddingLeft: "0.8rem",
};
export const TableCellStyles = {
  fontSize: "1.8rem",
  height: "auto",
  padding: "0.8rem",
};
