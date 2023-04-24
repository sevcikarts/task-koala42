import { FC, ReactNode, createContext, useState, useCallback } from "react";
import dataJSON from "../data/example-data.json";
import {
  IMainRecord,
  INemesisData,
  IMainData,
  ISecretData,
} from "../data/types";

interface DataContextProps {
  children: ReactNode;
}

interface DataContextType {
  records: IMainRecord[];
  deleteNemesisRecord: (id: INemesisData["ID"]) => void;
  deleteSecreteRecord: (id: ISecretData["ID"]) => void;
  deleteMainRecord: (id: IMainData["ID"]) => void;
}

export const DataContext = createContext({} as DataContextType);

export const DataContextProvider: FC<DataContextProps> = ({ children }) => {
  const dataJson = dataJSON;

  const removeMainDataDuplicatesById = (
    arr: IMainRecord[],
    prop: IMainData["ID"]
  ) => {
    return arr.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.data[prop] === obj.data[prop])
    );
  };

  const [records, setRecords] = useState<IMainRecord[]>(
    removeMainDataDuplicatesById(dataJson, "ID")
  );

  const deleteMainRecord = useCallback(
    (id: IMainData["ID"]) => {
      const filteredRecords = records.filter((record) => record.data.ID !== id);
      setRecords(filteredRecords);
    },
    [records]
  );

  const deleteNemesisRecord = useCallback(
    (id: INemesisData["ID"]) => {
      const newData = records.map((item) => {
        if (item.children.has_nemesis) {
          const filteredRecords = item.children.has_nemesis.records.filter(
            (record) => record.data.ID !== id
          );
          return {
            ...item,
            children: {
              has_nemesis: {
                ...item.children.has_nemesis,
                records: filteredRecords,
              },
            },
          };
        }
        return item;
      });

      setRecords(newData);
    },
    [records]
  );

  const deleteSecreteRecord = useCallback(
    (id: ISecretData["ID"]) => {
      const newData = records.map((item) => {
        if (item.children.has_nemesis) {
          const newRecords = item.children.has_nemesis.records.map((record) => {
            if (record.children.has_secrete) {
              const filteredSecretes =
                record.children.has_secrete.records.filter(
                  (secrete) => secrete.data.ID !== id
                );
              return {
                ...record,
                children: {
                  has_secrete: {
                    ...record.children.has_secrete,
                    records: filteredSecretes,
                  },
                },
              };
            }
            return record;
          });
          return {
            ...item,
            children: {
              has_nemesis: {
                ...item.children.has_nemesis,
                records: newRecords,
              },
            },
          };
        }
        return item;
      });
      setRecords(newData);
    },
    [records]
  );

  const value = { records, deleteNemesisRecord, deleteSecreteRecord, deleteMainRecord };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
