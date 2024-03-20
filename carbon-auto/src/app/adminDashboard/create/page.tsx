"use client"

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

interface Props {}

export default function CreateForm():React.JSX.Element {
    // const router = useRouter();
    
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();

    const [vehicle,setVehicle] = React.useState(
        {
            make: "",
            model: ""
        });


    const onCreate = async () => {    
        try{
            setUploading(true);
            // const response = await axios.post("/api/users/signup", user);
            // console.log("Signup success", response.data);
            //once user succesfully signup, redirect to login page
            // router.push("/login");
        } catch (error: any){
            console.log("Sign up failed", error.message);
            // toast.error(error.message);
        } finally {
            setUploading(false);
        }
    }
        
    useEffect(() => {
        if(vehicle.make.length>0 && vehicle.model.length>0){
            setButtonDisabled(false);
            console.log("vehicle make =", vehicle.make);
        }else{
            setButtonDisabled(true);
            console.log("doodooodoo");
        }
    },[vehicle]);

    return (
        <Container component="main" maxWidth="xs">
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography component="h1" variant="h5">{uploading ? "Processing..." : ""}</Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing ={2}>
                    <Grid item xs={12}>
                        <TextField 
                            name="make" 
                            required 
                            fullWidth 
                            id="make" 
                            label="make" 
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="model" 
                            required 
                            fullWidth 
                            id="model" 
                            label="model" 
                            autoFocus
                        />
                    </Grid>
                
                    {/* <input 
                        type="file" 
                        hidden 
                        onChange={({ target }) => {
                            if (target.files) {
                                const file = target.files[0];
                                setSelectedImage(URL.createObjectURL(file));
                                setSelectedFile(file);
                            }
                        }}    
                    /> */}
                    <Grid container direction="column" alignItems="center" sx={{ border: "1px solid black", borderRadius: "5px", p: 2, mt: 3 }}>
                        <Grid item >
                            {selectedImage ? (
                                <img src={selectedImage} alt="" /> 
                                ) : ( 
                                <img src="/blank.jpg" alt="" />
                                )   
                            }
                        </Grid>
                        <Button 
                        disabled={buttonDisabled}
                        style={{ opacity: uploading ? 0.5 : 1 }}
                        variant="contained" 
                        component="label"
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </Button>
                    </Grid>
                    
                </Grid>
                {/* router.push("/create"); */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={buttonDisabled}
                    onClick={onCreate}
                >{buttonDisabled ? "Incomplete form" : "Signup"}
                </Button>
            </Box>
        </Box>
        </Container>
    );
}
