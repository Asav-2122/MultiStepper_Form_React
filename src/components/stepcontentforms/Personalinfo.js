import React from "react";
import "./Personalinfo.css";
import { TextField, Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Controller, useFormContext } from "react-hook-form";

const Personalinfo = () => {
  const { control } = useFormContext();
  return (
    <Container className="main-container">
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
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
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
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
        name="gender"
        render={({ field }) => (
          <>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup row aria-labelledby="gender" {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </>
        )}
      />
      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your State"
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
        name="city"
        render={({ field }) => (
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Current City"
            size="small"
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

export default Personalinfo;
