import { DataContextProvider } from "./contexts/DataContext";
import DataTable from "./DataTable";

const App: React.FC = () => {
  return (
    <DataContextProvider>
      <DataTable />
    </DataContextProvider>
  );
};

export default App;
