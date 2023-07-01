import { Container, TextField } from '@mui/material'
import React from 'react'

const Contactdetails = () => {
  return (
    <Container className="main-container">
    <TextField
      id="Email"
      label="Email"
      variant="outlined"
      placeholder="Enter Your Email"
      size="small"
      margin="normal"
      name="Email"
      autoComplete="off"
      fullWidth
    />
    <TextField
      id="phone"
      label="Phone"
      variant="outlined"
      placeholder="Enter Your Phone Number"
      size="small"
      margin="normal"
      name="phone"
      autoComplete="off"
      fullWidth
    />
    <TextField
      id="linkedin"
      label="linkedin URL"
      variant="outlined"
      placeholder="Enter Your linkedin URL"
      size="small"
      margin="normal"
      name="linkedin"
      autoComplete="off"
      fullWidth
    />
    <TextField
      id="Address"
      label="Address"
      variant="outlined"
      placeholder="Enter Your Address"
      size="normal"
      margin="normal"
      name="Address"
      autoComplete="off"
      fullWidth
    />
  </Container>
  )
}

export default Contactdetails