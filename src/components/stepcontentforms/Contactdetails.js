import React from "react";
import { Container, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Contactdetails = () => {
  const {
    control,
    formState:{ errors },
  } = useFormContext();
  return (
    <Container className="main-container">
      <Controller
        control={control}
        name="email"
        rules={{
          required:"pls enter your email",
          validate: {
            maxLength: (v) =>
              v.length <= 50 || "The email should have at most 50 characters",
            matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          },
        }}
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
            error={Boolean(errors?.email)}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        rules={{
          required:"enter your phone number",
        }}
        render={({ field }) => (
          <TextField
            id="phone"
            label="Phone"
            type="number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
            error={Boolean(errors?.phone)}
            helperText={errors.phone?.message}
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
        rules={{
          required: "address is required",
        }}
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
            error={Boolean(errors?.address)}
            helperText={errors.address?.message}
          />
        )}
      />
    </Container>
  );
};

export default Contactdetails;
