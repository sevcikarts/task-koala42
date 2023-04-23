import React, { useMemo } from "react";
import TableCell from "@mui/material/TableCell";
import { IMainData, INemesisData, ISecretData } from "../../../data/types";
import { TableHead, TableRow } from "@mui/material";

interface TableCellHeaderProps {
  data: IMainData | ISecretData | INemesisData;
}

const TableCellHeader = ({ data }: TableCellHeaderProps) => {
  const cells = useMemo(
    () =>
      Object.keys(data)?.map((item, index) => (
        <TableCell
          sx={{
            bgcolor: "primary.light",
            fontWeight: 600,
          }}
          key={index}
          align="right"
        >
          {item}
        </TableCell>
      )),
    [data]
  );

  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            bgcolor: "primary.light",
          }}
        />
        {cells}
        <TableCell
          sx={{
            bgcolor: "primary.light",
            fontWeight: 600,
          }}
          align="right"
        >
          Delete
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableCellHeader;
