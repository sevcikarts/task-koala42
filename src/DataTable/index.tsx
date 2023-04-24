import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import TableCellHeader from "../components/TableCellHeader";
import { IMainData } from "../data/types";
import MainRow from "./components/MainRow";

const DataTable = () => {
  const { records } = useContext(DataContext);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableCellHeader<IMainData> data={records[0]?.data} />
        <TableBody>
          {records.map((row) => (
            <MainRow key={row.data.ID} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
