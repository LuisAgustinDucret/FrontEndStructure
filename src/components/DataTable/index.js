import * as React from "react";
import { getKeys } from "../../utils"
import EditIcon from '@mui/icons-material/Edit'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Table, TableRow, TableHeader, TableCell, TableBody } from "./styles";


export default function DataTable({
  data,
  columns,
  cantForPagpages,
  onEditClick,
  onDeleteClick,
  onShowClick,
}) {
  const renderColumns = () => {
    const columnsMap = columns.map((column,index) => {
      //index andando bien.
      return (
        <TableCell key={`${column.field+index}`}>{column.field}</TableCell>
      );
    });

    columnsMap.push(<TableCell key={`actions`}>{"Acciones"}</TableCell>);

    return columnsMap;
  };

  const renderRows = () => {
    const rows = data.map((item, index) => {
      //a este data le esta llegando el id, y solo el evento
      const row = getKeys(item).map((rowValue) => {
        //index esta andando bien
        return <TableCell key={`${item.id+item[rowValue]}`}>{item[rowValue]}</TableCell>;
      });

      row.push(
        <TableCell key={`${item.id}-buttons`}>
          <IconButton key={`${item.id}-buttonEdit`}
            onClick={() => {
              onEditClick(index);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton key={`${item.id}-buttonDelete`}
            onClick={() => {
              onDeleteClick(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton key={`${item.id}-buttonShow`}
            onClick={() => {
              onShowClick(index);
            }}
          >
            <VisibilityIcon />
          </IconButton>
        </TableCell>
      );

      return <TableRow key={item.id}>{row}</TableRow>;
    });

    return rows;
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>{renderColumns()}</TableRow>
      </TableHeader>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
}