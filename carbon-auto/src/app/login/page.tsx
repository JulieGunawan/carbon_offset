"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import {toast} from "react-hot-toast";

export default function LoginPage():React.JSX.Element {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    // const [login, setLogin] = useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onLogin = async () => { 
 
        alert(`Login: ${user.email}, Password: ${user.password}`);
        // try{
        //     setLoading(true);
            // const response = await axios.post("/api/users/login", user);
            // console.log("Login success",response.data);
            // toast.success("Login success");
            //once user succesfully signup, redirect to profile page
        //     router.push("/profile");
        // } catch (error:any) {
        //     console.log("Login failed",error.message);
        //     // toast.error(error.message);
        // } finally {
        //     setLoading(false);
        // }
    }

    // useEffect(() =>{
    //     if(user.email.length>0 &&user.password.length>0){
    //         setButtonDisabled(false);
    //     } else {
    //         setButtonDisabled(true);
    //     }
    // },[user]);

    return (
        <Container component="main" maxWidth="xs">
            <Box component="div" sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography component="h1" variant="h5">{loading ? "Processing..." : "Login"}</Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing ={2}>                       
                    <Grid item xs={12}>
                        <TextField 
                            name="email" 
                            required 
                            fullWidth 
                            id="email" 
                            label="email" 
                            autoFocus
                            value={user.email}
                            onChange={(e) => setUser({...user, email:e.target.value})}
                        />
                      
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="password" 
                            required 
                            fullWidth 
                            id="password" 
                            label="password" 
                            autoFocus
                            value={user.password}
                            onChange={(e) => setUser({...user, password:e.target.value})}
                        />
                    </Grid>
                    
                   
                    </Grid>
                </Box>
                {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={buttonDisabled}
                    onClick={onLogin}
                >{buttonDisabled ? "Incomplete form" : "Login"}
                </Button> */}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={buttonDisabled}
                    onClick={onLogin}
                >   Login
                </Button>
            
            <Link href="/signup" className="text-white">Visit signup page</Link>  
            </Box>      
        </Container>
    )
}