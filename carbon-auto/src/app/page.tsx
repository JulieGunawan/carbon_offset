import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./ui/Header";
import HomePage  from "./ui/HomePage";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardMedia, Link } from "@mui/material";

const card = (
  <React.Fragment>
    

  </React.Fragment>
);

export default function Home() {
  return (
    <main className={styles.main}>  
      <Header />
      <HomePage />
      <Card sx={{display: 'flex', justifyContent: 'center'}}>
        <CardMedia
          component="img"
          image="/mountain-drive.jpg"
          alt="Photo by Chase Yaws: https://www.pexels.com/photo/car-driving-through-road-in-mountains-11513527/"
          sx={{ width: 680, height: 800 }}
        />
        <Card sx={{ maxWidth: 345, justifyContent: 'center' }} variant="outlined">
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h2" color="text.secondary" gutterBottom>
              Welcome to Carbon Offset
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              the place where you can contribute to our carbon footprint reduction
            </Typography>
          </CardContent>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </Card>
        
      </Card>
      
    </main>
  );
}
