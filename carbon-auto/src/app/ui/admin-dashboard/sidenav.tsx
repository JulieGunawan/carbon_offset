import Link from 'next/link';
import NavLinks from '@/app/ui/admin-dashboard/nav-links';
import DashboardLogo from '../dashboard-logo';
import { Box, Button, Drawer, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

export default function SideNav() {
  const drawerWidth = 200;
  return (
    <Drawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Link href="/">
        <DashboardLogo />
      </Link>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <NavLinks />
        <form>
          <Button variant='contained'>Sign Out</Button>
        </form>
      </Box>
    </Drawer>
  );
}
