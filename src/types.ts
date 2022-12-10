export const ITEM_TYPE = "ITEM"

export interface IItem {
  item: {
    label: string
    time: string
    type: string
    status: number
  }
}
