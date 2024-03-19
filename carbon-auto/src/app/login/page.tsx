"use client"
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
// import axios from "axios";
// import {toast} from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onLogin = async () => { 
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success",response.data);
            // toast.success("Login success");
            //once user succesfully signup, redirect to profile page
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed",error.message);
            // toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        if(user.email.length>0 &&user.password.length>0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-black text-center">
            <h1 className="text-white text-2xl">{loading? "Processing":"Login"}</h1>
            <hr/>
            <label htmlFor="email" className="text-white text-2xl">Email</label>
            <input
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password" className="text-white text-2xl">Password</label>
            <input
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                placeholder="password"
            />
            <button 
                onClick={onLogin}
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-2xl"
            >
                {buttonDisabled ? "Incomplete form" : "Login Here"}
            </button>    
            <Link href="/signup" className="text-white">Visit signup page</Link>        
        </div>
    )
}