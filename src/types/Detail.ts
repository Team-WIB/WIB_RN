export interface ListDetailType {
  id: number;
  question: string;
  tag: string;
}

export interface DetailItemType {
  question: string;
  answer: string;
  tag: string;
}

export interface DetailType {
  question: DetailItemType;
}

export interface DetailParams {
  id: number;
}
