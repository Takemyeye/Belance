import './styles/regBtn.css';

type ButtonProps = {
  imageUrl?: string;
  btnType: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void; 
}

export default function RegButton({imageUrl, btnType, text, onClick, type = "button"}: ButtonProps ) {

  return (
     <button 
      type={type} 
      className="reg_btn" 
      style={{ backgroundColor: btnType ? "whitesmoke" : "black" }}
      onClick={onClick}
    >
      {imageUrl && (
        <img src={imageUrl} style={{ width: "24px", height: "24px" }} alt="button icon" />
      )}
      <h5 style={{ color: btnType ? "black" : "whitesmoke" }}>{text}</h5>
    </button>
  )
}
