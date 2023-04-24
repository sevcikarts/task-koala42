import { useContext } from "react";
import RowWithNestedTable from "../RowWithNestedTable";
import { DataContext } from "../../../contexts/DataContext";
import { IMainRecord } from "../../../data/types";
import RowNemesis from "../RowNemesis";

const RowMain = (props: { row: IMainRecord }) => {
  const { row } = props;
  const { deleteMain } = useContext(DataContext);

  return (
    <RowWithNestedTable
      row={row}
      onDelete={deleteMain}
      records={row.children?.has_nemesis?.records}
      children={row.children?.has_nemesis?.records.map((row) => (
        <RowNemesis key={row.data.ID} row={row} />
      ))}
    />
  );
};
export default RowMain;
