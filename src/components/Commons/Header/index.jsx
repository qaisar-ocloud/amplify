import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const { user,signOut, authStatus } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut()
    navigate('/login')
  }
  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Amplify
          </Typography>

          {authStatus === "authenticated" ?
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
            :
            <Button color="inherit" onClick={navigate('/login')}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
