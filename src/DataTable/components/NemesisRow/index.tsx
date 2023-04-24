import { useContext } from "react";
import ExpandableTableRow from "../ExpandableTableRow";
import { DataContext } from "../../../contexts/DataContext";
import { INemesisRecord } from "../../../data/types";
import SecreteRow from "../SecreteRow";

const NemesisRow = (props: { row: INemesisRecord }) => {
  const { row } = props;
  const { deleteNemesisRecord } = useContext(DataContext);

  return (
    <ExpandableTableRow
      row={row}
      onDelete={deleteNemesisRecord}
      records={row.children.has_secrete?.records}
      children={row.children.has_secrete?.records.map((row) => (
        <SecreteRow key={row.data.ID} row={row} />
      ))}
    />
  );
};
export default NemesisRow;
