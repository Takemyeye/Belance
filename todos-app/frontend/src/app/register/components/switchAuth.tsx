"use client";

interface SwitchAuthProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

export default function SwitchAuth({ isLogin, setIsLogin }: SwitchAuthProps) {
  return (
    <div className="switch_auth">
      {isLogin ? (
        <div className="reg_switch_container">
          <h5>Don’t have an account? </h5>
          <button style={{ cursor: "pointer" }} type="button" onClick={() => setIsLogin(false)}>Sign up here</button>
        </div>
      ) : (
        <div className="reg_switch_container">
          <h5>Already have an account? </h5>
          <button style={{ cursor: "pointer" }} type="button" onClick={() => setIsLogin(true)}>Login here</button>
        </div>
      )}
    </div>
  );
}
