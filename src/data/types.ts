export interface IMainRecord {
  data: IMainData;
  children: {
    has_nemesis?: {
      records: INemesisRecord[];
    };
  };
}

export interface IMainData {
  ID: string;
  Name: string;
  Gender: string;
  Ability: string;
  "Minimal distance": string;
  Weight: string;
  Born: string;
  "In space since": string;
  "Beer consumption (l/y)": string;
  "Knows the answer?": string;
}

export interface INemesisRecord {
  data: INemesisData;
  children: {
    has_secrete?: {
      records: ISecretRecord[];
    };
  };
}

export interface INemesisData {
  ID: string;
  "Character ID": string;
  "Is alive?": string;
  Years: string;
}

export interface ISecretRecord {
  data: ISecretData;
  children: object;
}

export interface ISecretData {
  ID: string;
  "Nemesis ID": string;
  "Secrete Code": string;
}
