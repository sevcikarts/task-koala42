import { useContext } from "react";
import ExpandableTableRow from "../ExpandableTableRow";
import { DataContext } from "../../../contexts/DataContext";
import { IMainRecord } from "../../../data/types";
import NemesisRow from "../NemesisRow";

const MainRow = (props: { row: IMainRecord }) => {
  const { row } = props;
  const { deleteMainRecord } = useContext(DataContext);

  return (
    <ExpandableTableRow
      row={row}
      onDelete={deleteMainRecord}
      records={row.children?.has_nemesis?.records}
      children={row.children?.has_nemesis?.records.map((row) => (
        <NemesisRow key={row.data.ID} row={row} />
      ))}
    />
  );
};
export default MainRow;
