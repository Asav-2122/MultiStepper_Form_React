import React from "react";
import { Container, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Contactdetails = () => {
  const {control} = useFormContext();
  return (
    <Container className="main-container">
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="linkedin"
        render={({ field }) => (
          <TextField
            id="linkedin"
            label="linkedin URL"
            variant="outlined"
            placeholder="Enter Your linkedin URL"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address"
            size="normal"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
          />
        )}
      />
    </Container>
  );
};

export default Contactdetails;
