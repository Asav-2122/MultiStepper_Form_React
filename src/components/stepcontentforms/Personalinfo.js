import React from "react";
import "./Personalinfo.css";
import {
  TextField,
  Container,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Controller, useFormContext } from "react-hook-form";

const Personalinfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Container className="main-container">
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: "pls enter your first name",
        }}
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
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={{
          required: "pls enter your last name",
        }}
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
            error={Boolean(errors?.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <FormControl component="fieldset" error={Boolean(errors?.gender)}>
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          control={control}
          name="gender"
          rules={{
            required: "pls select your gender",
          }}
          render={({ field }) => (
            <>
              <RadioGroup row aria-labelledby="gender" {...field}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {errors.gender?.message}
              </FormHelperText>
            </>
          )}
        />
      </FormControl>
      <Controller
        control={control}
        name="state"
        rules={{
          required: "state is required",
        }}
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
            error={Boolean(errors?.state)}
            helperText={errors.state?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="city"
        rules={{
          required: "city is required",
        }}
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
            error={Boolean(errors?.city)}
            helperText={errors.city?.message}
          />
        )}
      />
    </Container>
  );
};

export default Personalinfo;
