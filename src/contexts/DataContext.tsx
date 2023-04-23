import { FC, ReactNode, createContext, useState } from "react";
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
  deleteNemesis: (id: INemesisData["ID"]) => void;
  deleteSecrete: (id: ISecretData["ID"]) => void;
  deleteMain: (id: IMainData["ID"]) => void;
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

  const deleteMain = (id: IMainData["ID"]) => {
    const filteredRecords = records.filter((record) => record.data.ID !== id);
    setRecords(filteredRecords);
  };

  const deleteNemesis = (id: INemesisData["ID"]) => {
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
  };

  const deleteSecrete = (id: ISecretData["ID"]) => {
    const newData = records.map((item) => {
      if (item.children.has_nemesis) {
        const newRecords = item.children.has_nemesis.records.map((record) => {
          if (record.children.has_secrete) {
            const filteredSecretes = record.children.has_secrete.records.filter(
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
  };

  const value = { records, deleteNemesis, deleteSecrete, deleteMain };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
