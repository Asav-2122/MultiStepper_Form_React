import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
    name:"employee",
    initialState:{
        employeeData : []
    },
    reducers:{
        addEmployee:(state,action)=>{
             state.employeeData.push(action.payload)
        }
    }

})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;