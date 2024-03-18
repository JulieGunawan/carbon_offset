import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router"; 
import AppBar from '@mui/material/AppBar';
// import logo from '../../assets/Tree.jpeg';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from "next/image";

export const Header: React.FC = () => (
    <>
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Image 
                src="/Tree.svg" 
                width={100} 
                height={80} 
                alt="logo"
                priority={true}
                />
            </Link>
            <Box sx={{ mx: 'auto' }}>
              <ul className="navigation">
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Sign up</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
)