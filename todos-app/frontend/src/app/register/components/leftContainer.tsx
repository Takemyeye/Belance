import Link from "next/link";
import Cookies from 'js-cookie';
import { useState } from 'react';
import RegButton from "@/app/ui/reg_btn";
import { useUser } from "@/app/context/UserContext";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeftContainer() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // context
    const { setUser } = useUser();
  
    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
  
      try {
        const res = await fetch('http://localhost:3001/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
  
        if (res.ok) {
          const data = await res.json();
          Cookies.set('token', data.token, { expires: 1 });
          setUser(data.user);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }

  return(
     <div className='reg_left_container'>
      <div className='reg_header'>
        <Link href='/home'>
          <FontAwesomeIcon 
            icon={faAlignLeft} 
            size="2x" 
            color="#ffffff" 
            style={{ width: "24px", height: "24px" }}
          />
          <h2>Belance</h2>
        </Link>
      </div>
      <div className="reg_form">
        <div className="title">
          <h1>Keep your online business organized</h1>
          <h5>Sign up to start your business</h5>
        </div>
      <RegButton text="sign in with Google" imageUrl="/image/reg_google.svg"/>
        <div className="reg_line_container">
        <span className="line"></span>
        <h5>or</h5>
        <span className="line"></span>
        </div>
      </div>
    </div>
  )
}