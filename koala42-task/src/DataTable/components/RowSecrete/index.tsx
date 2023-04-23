import { useContext } from "react";
import RowWithNestedTable from "../../../components/RowWithNestedTable";
import { DataContext } from "../../../contexts/DataContext";

const RowSecrete = (props: { row: any }) => {
  const { row } = props;
  const { deleteSecrete } = useContext(DataContext);

  return <RowWithNestedTable row={row} onDelete={deleteSecrete}></RowWithNestedTable>;
};
export default RowSecrete;
