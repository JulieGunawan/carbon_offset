"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';

// import axios from "axios";
// import {toast} from "react-hot-toast";
export default function SignupPage():React.JSX.Element {
    //once the user sign up, it will be redirected to login page, using router to do that
    const router = useRouter();
    const [user,setUser] = React.useState(
        {
            username: "",
            email: "",
            password: "",
        });
    //setting to false will not make the button disabled
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {    
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            //once user succesfully signup, redirect to login page
            router.push("/login");
        } catch (error: any){
            console.log("Sign up failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
     
    useEffect(() => {
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <Container component="main" maxWidth="xs">
            <Box component="div" sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography component="h1" variant="h5">{loading ? "Processing..." : "Sign Up"}</Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing ={2}>
                        <Grid item xs={12}>
                            <TextField 
                                name="username" 
                                required 
                                fullWidth 
                                id="username" 
                                label="Username" 
                                autoFocus
                            />
                            {/* <input 
                                id="username" 
                                type="text" 
                                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                                value={user.username} 
                                onChange={(e) => setUser({...user, username: e.target.value})}
                                placeholder="username"
                            /> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                name="firstName" 
                                required 
                                fullWidth 
                                id="firstName" 
                                label="First Name" 
                                autoFocus
                            />
                            {/* <input 
                                id="username" 
                                type="text" 
                                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                                value={user.username} 
                                onChange={(e) => setUser({...user, username: e.target.value})}
                                placeholder="username"
                            /> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                name="lastName" 
                                required 
                                fullWidth 
                                id="lastName" 
                                label="Last Name" 
                                autoFocus
                            />
                            {/* <input 
                                id="username" 
                                type="text" 
                                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                                value={user.username} 
                                onChange={(e) => setUser({...user, username: e.target.value})}
                                placeholder="username"
                            /> */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                name="email" 
                                required 
                                fullWidth 
                                id="email" 
                                label="email" 
                                autoFocus
                            />
                            {/* <input 
                                id="email" 
                                type="text" 
                                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                                value={user.email} 
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                placeholder="email"
                            /> */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                name="password" 
                                required 
                                fullWidth 
                                id="password" 
                                label="password" 
                                autoFocus
                            />
                        </Grid>
                       
                        {/* <input 
                            id="password" 
                            type="password" 
                            className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                            value={user.password} 
                            onChange={(e) => setUser({...user, password: e.target.value})}
                            placeholder="password"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={buttonDisabled}
                            onClick={onSignup}
                        >{buttonDisabled ? "Incomplete form" : "Signup"}
                        </Button>
                        <Link href="/login" className="text-white">Visit login page</Link>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )

}