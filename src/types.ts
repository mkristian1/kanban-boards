export const ITEM_TYPE = 'ITEM';

export interface IItem {
  id: number;
  label: string;
  time: string;
  type: string;
  status: string;
}

export interface IDragingItem extends IItem {
  index: number;
}
