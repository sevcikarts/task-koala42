import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import RowMain from "./components/RowMain";
import TableCellHeader from "./components/TableCellHeader";

export default function DataTable() {
  const { records } = useContext(DataContext);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableCellHeader data={records[0]?.data} />
        <TableBody>
          {records.map((row, index) => (
            <RowMain key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}