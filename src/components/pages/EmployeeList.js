import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';


const EmployeeList = () => {
  const employeelist = useSelector((store)=>store.employee.employeeData)  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeelist.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName+" "+row.lastName}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.experience}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default EmployeeList