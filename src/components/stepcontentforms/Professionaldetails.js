import React from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Professionaldetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Container className="main-container">
      <Controller
        control={control}
        name="position"
        rules={{
          required: "pls select your position",
        }}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="position">Position</InputLabel>
            <Select
              labelId="position"
              id="position"
              label="Position"
              size="small"
              {...field}
              error={Boolean(errors?.position)}
            >
              <MenuItem value={"Designer"}>Designer</MenuItem>
              <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
              <MenuItem value={"Android Developer"}>Android Developer</MenuItem>
              <MenuItem value={"Ios Developer"}>Ios Developer</MenuItem>
              <MenuItem value={"Full Stack Developer"}>
                Full Stack Developer
              </MenuItem>
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {errors.position?.message}
            </FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="department"
        rules={{
          required: "pls select your department",
        }}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="department">Department</InputLabel>
            <Select
              labelId="department"
              id="department"
              label="Department"
              size="small"
              {...field}
            >
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"Ios Development"}>Ios Development</MenuItem>
              <MenuItem value={"Android Development"}>
                Android Development
              </MenuItem>
              <MenuItem value={"Finance"}>Finance</MenuItem>
              <MenuItem value={"Full Stack Development"}>
                Full Stack Development
              </MenuItem>
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {errors.department?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="status"
        rules={{
          required: "pls select your status",
        }}
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              label="Status"
              size="small"
              {...field}
            >
              <MenuItem value={"Full Time"}>Full Time</MenuItem>
              <MenuItem value={"Part Time"}>Part Time</MenuItem>
              <MenuItem value={"Remote"}>Remote</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {errors.status?.message}
            </FormHelperText>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="experience"
        rules={{
          required: "enter your total experience",
        }}
        render={({ field }) => (
          <TextField
            id="experience"
            label="experience"
            type="number"
            variant="outlined"
            placeholder="Experience In Years"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
            error={Boolean(errors?.experience)}
            helperText={errors.experience?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="current_company"
        rules={{
          required: "enter your current company",
        }}
        render={({ field }) => (
          <TextField
            id="current_company"
            label="Current Company"
            variant="outlined"
            placeholder="Current Company"
            size="small"
            margin="normal"
            autoComplete="off"
            fullWidth
            {...field}
            error={Boolean(errors?.current_company)}
            helperText={errors.current_company?.message}
          />
        )}
      />
    </Container>
  );
};

export default Professionaldetails;
