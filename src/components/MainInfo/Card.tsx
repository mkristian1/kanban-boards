import { FC } from "react"
import { CardWrap } from "./card.styles"

interface ICard {
  title: string,
  time: string,
  type: string,
  status: number,
}

const Card: FC<ICard> = ({ title, time, type, status }) => {
  return (
    <CardWrap status={status} type={type}>
      <p>{title}</p>
      <time>{time}</time>
    </CardWrap>
  )
}

export default Card
