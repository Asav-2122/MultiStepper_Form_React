import { Container, Typography } from "@mui/material";
import React from "react";

const ReviewForm = ({ activeUserData }) => {
  let { firstName, lastName, email, experience, position, department, status } =
    activeUserData;
  return (
    <Container
      className="main-container"
      sx={{
        border: "1px solid black",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        my: 5,
      }}
    >
      <Typography>
        Name: {firstName.charAt(0).toUpperCase() + firstName.slice(1)}{" "}
        {lastName.charAt(0).toUpperCase() + lastName.slice(1)}
      </Typography>
      <Typography>Position: {position}</Typography>
      <Typography>department: {department}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Experience: {experience}</Typography>
      <Typography>Status: {status}</Typography>
    </Container>
  );
};

export default ReviewForm;
