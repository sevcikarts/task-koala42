import { useContext } from "react";
import ExpandableTableRow from "../ExpandableTableRow";
import { DataContext } from "../../../contexts/DataContext";

const SecreteRow = (props: { row: any }) => {
  const { row } = props;
  const { deleteSecreteRecord } = useContext(DataContext);

  return <ExpandableTableRow row={row} onDelete={deleteSecreteRecord}></ExpandableTableRow>;
};
export default SecreteRow;
