import './styles/reg_btn.css';

type ButtonProps = {
  imageUrl?: string;
  btnType: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function RegButton({imageUrl, btnType, text, type = "button"}: ButtonProps ) {

  return (
     <button type={type} className="reg_btn" style={{ backgroundColor: btnType ? "whitesmoke" : "black" }}>
      {imageUrl && (
        <img src={imageUrl} style={{ width: "24px", height: "24px" }} alt="button icon" />
      )}
      <h5 style={{ color: btnType ? "black" : "whitesmoke" }}>{text}</h5>
    </button>
  )
}
