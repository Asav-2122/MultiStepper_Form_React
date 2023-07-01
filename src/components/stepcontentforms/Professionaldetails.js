import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {Controller,useFormContext} from "react-hook-form"

const Professionaldetails = () => {
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
   const control = useFormContext()
  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <Container className="main-container">

      <Controller control={control}
       name="position"
       render={({field})=>(
        <FormControl fullWidth margin="normal">
        <InputLabel id="position">Position</InputLabel>
        <Select
          labelId="position"
          id="position"
          // value={position}
          // onChange={handleChange}
          label="Position"
          size="small"
          {...field}
        >
          <MenuItem value={"Designer"}>Designer</MenuItem>
          <MenuItem value={"Web Developer"}>Web Developer</MenuItem>
          <MenuItem value={"Android Developer"}>Android Developer</MenuItem>
          <MenuItem value={"Ios Developer"}>Ios Developer</MenuItem>
          <MenuItem value={"Full Stack Developer"}>
            Full Stack Developer
          </MenuItem>
        </Select>
      </FormControl>
       )}
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={"Marketing"}>Marketing</MenuItem>
          <MenuItem value={"Ios Development"}>Ios Development</MenuItem>
          <MenuItem value={"Android Development"}>Android Development</MenuItem>
          <MenuItem value={"Finance"}>Finance</MenuItem>
          <MenuItem value={"Full Stack Development"}>
            Full Stack Development
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={position}
          label="Status"
          onChange={handleChange}
          size="small"
         
        >
          <MenuItem value={"Full Time"}>Full Time</MenuItem>
          <MenuItem value={"Part Time"}>Part Time</MenuItem>
          <MenuItem value={"Remote"}>Remote</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="experience"
        label="experience"
        variant="outlined"
        placeholder="Experience In Years"
        size="small"
        margin="normal"
        name="experience"
        autoComplete="off"
        fullWidth
      />
      <TextField
        id="Current Company"
        label="Current Company"
        variant="outlined"
        placeholder="Current Company"
        size="small"
        margin="normal"
        name="current company"
        autoComplete="off"
        fullWidth
      />
    </Container>
  );
};

export default Professionaldetails;
