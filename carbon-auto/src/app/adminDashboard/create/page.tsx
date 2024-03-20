"use client"

import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Button } from "@mui/material";

interface Props {}

export default function CreateForm():React.JSX.Element {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [isLoading, setIsLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedFile, setSelectedFile] = useState<File>();

    return (
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Upload</h2>
            <input 
                type="file" 
                hidden 
                onChange={({ target }) => {
                    if (target.files) {
                        const file = target.files[0];
                        setSelectedImage(URL.createObjectURL(file));
                        setSelectedFile(file);
                    }
                }}    
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {selectedImage ? (
                    <img src={selectedImage} alt="" /> 
                    ) : ( 
                    <span>"Select Image"</span>
                    )   
                }
            </Box>

            <Button 
                disabled={uploading}
                style={{ opacity: uploading ? 0.5 : 1 }}
                variant="contained" 
                component="label"
            >
                {uploading ? "Uploading..." : "Upload"}
            </Button>
            router.push("/create");
        </Box>
    );
}
