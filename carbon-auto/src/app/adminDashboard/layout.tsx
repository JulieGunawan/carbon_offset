import SideNav from "@/app/ui/admin-dashboard/sidenav";
import { AppBar, Box, CssBaseline, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Layout({children}: {children: React.ReactNode} ) {
    const drawerWidth = 240;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                    Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideNav />
            <Toolbar />
            <Divider />  
            <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}