import { Container, Typography } from "@mui/material";
import React from "react";

const ReviewForm = ({ activeUserData }) => {
  let { firstName, lastName, gender, email, experience, position } =
    activeUserData;
  return (
    <Container
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
        Name: {firstName.toUpperCase()} {lastName.toUpperCase()}
      </Typography>
      <Typography>Gender: {gender.toUpperCase()}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Experience: {experience}</Typography>
      <Typography>Position: {position}</Typography>
    </Container>
  );
};

export default ReviewForm;
