import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router"; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from "next/image";
import Button from '@mui/material/Button';


export const Header: React.FC = () => {
  return(
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ mx: 'auto' }}>
              <Link href="/">
                <Image 
                  src="/Tree.svg" 
                  width={100} 
                  height={80} 
                  alt="logo"
                  priority={true}
                  />
              </Link>
              <Button>
                  <Link href="https://www.guardyanconservation.com/guardyan-guidebook">Blog</Link>      
              </Button>
              <Button>
                <Link href="https://www.guardyanconservation.com/faq">FAQ</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )}  
