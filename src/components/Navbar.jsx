import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Facebook
                    </Typography>
                    <Button  color="inherit">
                    <Link to='/signup'>Signup</Link>

                    </Button>
                    <Button color="inherit">
                        <Link to='/login'>Login</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
