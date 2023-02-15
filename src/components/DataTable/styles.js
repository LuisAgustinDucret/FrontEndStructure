import styled from "styled-components";
import TableRowUI from "@mui/material/TableRow";
import TableUI from "@mui/material/Table";
import TableHeaderUI from "@mui/material/TableHead";
import TableBodyUI from "@mui/material/TableBody";

import TableCellUI from "@mui/material/TableCell";

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

export const Table = styled(TableUI)``;
export const TableHeader = styled(TableHeaderUI)``;
export const TableBody = styled(TableBodyUI)``;
export const TableRow = styled(TableRowUI)``;
export const TableCell = styled(TableCellUI)``;