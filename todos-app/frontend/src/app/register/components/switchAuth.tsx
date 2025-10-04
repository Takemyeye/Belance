"use client";

import { useEffect } from "react";

interface SwitchAuthProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

useEffect (() => {
  throw new Error("Ошибка в useEffect")
}, [])

export default function SwitchAuth({ isLogin, setIsLogin }: SwitchAuthProps) {
  return (
    <div className="switch_auth">
      {isLogin ? (
        <div className="reg_switch_container">
          <h5>Don’t have an account? </h5>
          <button style={{ cursor: "pointer", color: "#d4f6ed" }} type="button" onClick={() => setIsLogin(false)}>Sign up here</button>
        </div>
      ) : (
        <div className="reg_switch_container">
          <h5>Already have an account? </h5>
          <button style={{ cursor: "pointer", color: "#d4f6ed" }} type="button" onClick={() => setIsLogin(true)}>Login here</button>
        </div>
      )}
    </div>
  );
}
