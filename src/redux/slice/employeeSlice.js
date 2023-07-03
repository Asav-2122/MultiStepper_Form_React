import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeeData: [
      {
        firstName: "Aasav",
        lastName: "Pandya",
        gender: "male",
        state: "Gujarat",
        city: "Botad",
        email: "asav.pandya@gmail.com",
        phone: "6351998007",
        linkedin: "abc@gmail.com",
        address: "Botad-364710",
        position: "Full Stack Developer",
        department: "Full Stack Development",
        status: "Remote",
        experience: "1",
        current_company: "amazon",
      },
      {
        firstName: "Barak",
        lastName: "Obama",
        gender: "male",
        state: "Washigton",
        city: "New-York",
        email: "obama@gmail.com",
        phone: "6351998007",
        linkedin: "abc@gmail.com",
        address: "Botad-364710",
        position: "Web Developer",
        department: "Finance",
        status: "Part Time",
        experience: "8",
        current_company: "amazon",
      },
      {
        firstName: "john",
        lastName: "deo",
        gender: "male",
        state: "Maharstra",
        city: "Mumbai",
        email: "john@gmail.com",
        phone: "6351998007",
        linkedin: "abc@gmail.com",
        address: "Botad-364710",
        position: "Designer",
        department: "Marketing",
        status: "Remote",
        experience: "3",
        current_company: "amazon",
      },
      {
        firstName: "john",
        lastName: "walker",
        gender: "female",
        state: "Gujarat",
        city: "Botad",
        email: "illiana@gmail.com",
        phone: "6351998007",
        linkedin: "abc@gmail.com",
        address: "Botad-364710",
        position: "Full Stack Developer",
        department: "Full Stack Development",
        status: "Full Time",
        experience: "2",
        current_company: "amazon",
      },
    ],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employeeData.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
