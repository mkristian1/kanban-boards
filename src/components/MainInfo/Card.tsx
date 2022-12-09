import { FC } from "react"
import { CardWrap } from "./card.styles"

interface ICard {
  title: string
  time: string
}

const Card: FC<ICard> = ({ title, time }) => {
  return (
    <CardWrap>
      <p>{title}</p>
      <time>{time}</time>
    </CardWrap>
  )
}

export default Card
