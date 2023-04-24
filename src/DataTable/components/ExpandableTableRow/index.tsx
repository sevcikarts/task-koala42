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
import {
  IMainRecord,
  INemesisRecord,
  ISecretRecord,
} from "../../../data/types";
import TableCellHeader from "../../../components/TableCellHeader";
import { useMemo, useState } from "react";
import Button from "../../../components/Button";

interface ExpandableTableRowProps {
  children?: React.ReactNode;
  onDelete: (id: string) => void;
  records?: INemesisRecord[] | ISecretRecord[] | IMainRecord[];
  row: INemesisRecord | ISecretRecord | IMainRecord;
}

const ExpandableTableRow = ({
  row,
  onDelete,
  records,
  children,
}: ExpandableTableRowProps) => {
  const [open, setOpen] = useState(false);

  const cells = useMemo(
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
      <TableRow>
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
        <TableCell sx={{ borderBottom: "none" }} key="onclick" align="right">
          <Button onClick={() => onDelete(row.data.ID)}>x</Button>
        </TableCell>
      </TableRow>
      {children && (
        <TableRow>
          <TableCell sx={{ padding: 0, borderBottom: "none" }} colSpan={6}>
            <Collapse sx={{ paddingLeft: 0 }} in={open} timeout="auto">
              {records && records[0]?.data && (
                <Box sx={{ marginTop: 1, marginLeft: 5 }}>
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
export default ExpandableTableRow;
