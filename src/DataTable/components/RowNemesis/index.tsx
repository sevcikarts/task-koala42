
import { useContext } from "react";
import RowWithNestedTable from "../../../components/RowWithNestedTable";
import { DataContext } from "../../../contexts/DataContext";
import { INemesisRecord } from "../../../data/types";
import RowSecrete from "../RowSecrete";

const RowNemesis = (props: { row: INemesisRecord }) => {
  const { row } = props;
  const { deleteNemesis } = useContext(DataContext);

  return (
    <RowWithNestedTable
      row={row}
      onDelete={deleteNemesis}
      records={row.children.has_secrete?.records}
      children={row.children.has_secrete?.records.map((row, index) => (
        <RowSecrete key={row.data.ID} row={row} />
      ))}
    />
  );
};
export default RowNemesis;
