import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IMainRecord, INemesisRecord, ISecretRecord } from "../../data/types";
import TableCellHeader from "../../DataTable/components/TableCellHeader";
import { useState } from "react";
import { Button } from "@mui/material";

interface RowWithNestedTableProps {
  children?: React.ReactNode;
  onDelete: (id: string) => void;
  records?: Array<INemesisRecord> | Array<ISecretRecord> | Array<IMainRecord>;
  row: INemesisRecord | ISecretRecord | IMainRecord;
}

const RowWithNestedTable = ({
  row,
  onDelete,
  records,
  children,
}: RowWithNestedTableProps) => {
  const [open, setOpen] = useState(false);

  const cells = React.useMemo(
    () =>
      Object.values(row.data)?.map((item, index) => (
        <TableCell key={index} align="right">
          {item}
        </TableCell>
      )),
    [row.data]
  );

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {records && records?.length > 0 && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        {cells}
        <TableCell key="onclick" align="right">
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.light",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={() => onDelete(row.data.ID)}
          >
            x
          </Button>
        </TableCell>
      </TableRow>
      {children && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto">
              {records && records[0]?.data && (
                <Box sx={{ margin: 1 }}>
                  <Table size="small">
                    <TableCellHeader data={records[0]?.data} />
                    <TableBody>{children}</TableBody>
                  </Table>
                </Box>
              )}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
export default RowWithNestedTable;
