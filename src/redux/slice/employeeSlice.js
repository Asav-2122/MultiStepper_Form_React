import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
    name:"employee",
    initialState:{
        employeeData : [{
            id:1,
            firstName: 'Aasav',
            lastName: 'Pandya',
            gender: 'male',
            state: 'Gujarat',
            city: 'Botad',
            email: 'asav.pandya@gmail.com',
            phone: '6351998007',
            linkedin: 'abc@gmail.com',
            address: 'Botad-364710',
            position: 'Full Stack Developer',
            department: 'Full Stack Development',
            status: 'Remote',
            experience: '1',
            current_company: 'amazon'
          },
          {
            id:2,
            firstName: 'Milan',
            lastName: 'Kanetiya',
            gender: 'male',
            state: 'Gujarat',
            city: 'Botad',
            email: 'asav.pandya@gmail.com',
            phone: '6351998007',
            linkedin: 'abc@gmail.com',
            address: 'Botad-364710',
            position: 'Full Stack Developer',
            department: 'Full Stack Development',
            status: 'Remote',
            experience: '1',
            current_company: 'amazon'
          }]
    },
    reducers:{
        addEmployee:(state,action)=>{
             state.employeeData.push(action.payload)
        }
    }

})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;