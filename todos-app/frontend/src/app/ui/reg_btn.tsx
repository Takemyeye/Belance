import './styles/reg_btn.css';

type ButtonProps = {
  imageUrl: string;
  text: string;
}

export default function RegButton({imageUrl, text}: ButtonProps ) {

  return (
     <button className="reg_btn">
      <img src={imageUrl} style={{ width: "24px", height: "24px"}} alt="image" />
      <h5>{text}</h5>
    </button>
  )
}
