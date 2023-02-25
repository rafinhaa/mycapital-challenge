import {storageAction} from '../../storage/action/types';

export type SectionActionData = {
  date: string;
  data: storageAction[];
};

export type TotalActionsValuesByData = {
  [date: string]: number;
};
