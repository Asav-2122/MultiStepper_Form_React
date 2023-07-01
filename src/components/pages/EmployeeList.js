import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employeelist = useSelector((store) => store.employee.employeeData);
  const [searchQuery, setSearchQuery] = useState("");
  const [employeeData, setEmployeeData] = useState(employeelist || []);
  const [isEmployeeFound, setIsEmployeeFound] = useState(true);
  const [btn, setButton] = useState([]);
  const [startId, setStartId] = useState({ start: 0, end: 5 });
  const generateButton = () => {
    let btn = [];
    for (let i = 1; i <= Math.ceil(employeeData.length / 5); i++) {
      btn.push(i);
    }
    setButton([...btn]);
  };
  useEffect(() => {
    generateButton();
  }, []);
  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery.length < 2) {
      setEmployeeData(employeelist);
      setIsEmployeeFound(true);
    }
  };
  const handleSearchEmployee = (searchQuery) => {
    const filterData = employeeData.filter(
      (ele) =>
        ele.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ele.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ele.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filterData.length === 0) {
      setIsEmployeeFound(false);
    } else {
      setEmployeeData(filterData);
      setIsEmployeeFound(true);
    }
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleOnChange}
        placeholder="search employee"
        size="small"
        margin="normal"
        autoComplete="off"
      />
      <Button
        variant="contained"
        onClick={() => handleSearchEmployee(searchQuery)}
        sx={{ mt: 2, ml: 1 }}
      >
        Search
      </Button>
      <TableContainer component={Paper} sx={{ my: 3 }}>
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
            {!isEmployeeFound ? (
              <Typography variant="h5" align="center">
                No Employee Found
              </Typography>
            ) : (
              employeeData
                .slice(startId.start, startId.end)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <TableCell>{index+1}</TableCell> */}
                    <TableCell component="th" scope="row">
                      {row.firstName + " " + row.lastName}
                    </TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    <TableCell align="right">{row.department}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.experience}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Container sx={{display:"flex",justifyContent:"space-evenly"}}>
      <Button variant="contained" disabled={startId.start===0}>Prev</Button>
      {btn.map((btn) => {
        return (
         
            <Button
              variant="outlined"
              key={btn}
              onClick={() =>
                setStartId({ startId, start: btn * 5 - 5, end: btn * 5 })
              }
            >
              {btn}
            </Button>
         
        );
      })}
      <Button variant="contained">Next</Button>
      </Container>
    </div>
  );
};

export default EmployeeList;
