import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const signup = () => {
    return (
        <div>
            <h1>sign up to form</h1>
            <Typography variant="h1" component="h2"/>
        
            <Typography variant="h1" component="h2">
                Signup to fb
            </Typography>
            <TextField label='email'variant='standard'/>
            <TextField label='password'variant='filled'type='password'/>


        </div>
    )
}

export default signup
