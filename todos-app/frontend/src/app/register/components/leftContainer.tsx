"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import RegHeader from "./header";
import SwitchAuth from "./switchAuth";
import RegButton from "@/app/ui/reg_btn";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import InputField from "@/app/register/components/inputField";

import '../style/register.css';

export default function LeftContainer() {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const body = isLogin ? { email, password } : { name, email, password };

      const res = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        Cookies.set("token", data.token, { expires: 1 });
        setUser(data.user);
        router.replace('/home');
      }
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <div className="reg_left_container">
      <RegHeader/>
      <div className="reg_form">
        <div className="title">
          <h1>
            {isLogin
              ? "Welcome back to your business"
              : "Keep your online business organized"}
          </h1>
          <h5>{isLogin ? "Log in to continue" : "Sign up to start your business"}</h5>
        </div>

        <RegButton btnType={true} text="Continue with Google" imageUrl="/image/reg_google.svg" />

        <div className="reg_line_container">
          <span className="line"></span>
          <h5>or</h5>
          <span className="line"></span>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
          )}
            <InputField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />

          <RegButton type="submit" btnType={false} text={`${isLogin ? "Login" : "Sign Up"}`}/>
        </form>
        <SwitchAuth isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
}
