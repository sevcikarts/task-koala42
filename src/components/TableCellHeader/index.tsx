import { useMemo } from "react";
import TableCell from "@mui/material/TableCell";
import { TableHead, TableRow } from "@mui/material";
import { greenColor, textLightColor } from "../../constants";

interface TableCellHeaderProps<T> {
  data: T;
}

const TableCellHeader = <T extends {}>({ data }: TableCellHeaderProps<T>) => {
  const cells = useMemo(
    () =>
      Object.keys(data)?.map((item, index) => (
        <TableCell
          sx={{
            bgcolor: greenColor,
            color: textLightColor,
            fontWeight: 600
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
            bgcolor: greenColor,
            color: textLightColor
          }}
        />
        {cells}
        <TableCell
          sx={{
            bgcolor: greenColor,
            color: textLightColor,
            fontWeight: 600
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
