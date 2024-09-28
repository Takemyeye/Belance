import "./styles/cardMaket.scss"

export function CardMaket ({img, title, subTitle}) {
  return (
    <div className="cardMaket">
      <img src={img} alt="i'm done" />
      <div className="textMaket">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
    </div>
  )
}