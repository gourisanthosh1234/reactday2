import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <h3>log into facebook</h3>
            <input type="text" placeholder="email adddress" name="" id="" />
            <input type="password" placeholder="password" name="" id="" />
            <br>
            </br>
            <Typography variant="h1" component="h2">
                Login to fb
            </Typography>
            <TextField label='email'variant='standard'/>
            <TextField label='password'variant='filled'type='password'/>

        </div>
    )
}

export default Login
