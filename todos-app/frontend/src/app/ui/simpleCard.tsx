import './styles/simple_card.css'; 

type SimpleCarProps = {
  icon: string;
  text: string[];
  description: string[];
}

export default function SimpleUiCard({ icon, text, description }: SimpleCarProps) {

  return(
    <div className="simple_card">
      <img src={icon} alt="icon" />
      <div className="column">
        <h5>{text[0]}</h5>
        <span>{description[0]}</span>
      </div>
      <div className="column">
        <h5>{text[1]}</h5>
        <span>{description[1]}</span>
      </div>
    </div>
  )
}