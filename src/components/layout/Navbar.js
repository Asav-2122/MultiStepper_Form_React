import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
        <Link to={"/"} style={{color:"white",textDecoration:"none"}}>
          Aimbrill TechInfo
          </Link>
        </Typography>
        
       <Button variant='outlined' sx={{border:"1px solid white"}} > <Link to={"/employeelist"} style={{color:"black",textDecoration:"none"}}>Employee List</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar