import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";
import Personalinfo from "../stepcontentforms/Personalinfo";
import Contactdetails from "../stepcontentforms/Contactdetails";
import Professionaldetails from "../stepcontentforms/Professionaldetails";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/slice/employeeSlice";
import ReviewForm from "../stepcontentforms/ReviewForm";

const steps = [
  "Personal Info",
  "Contact Details",
  "Professional Details",
  "Summary",
];

const LinearStepper = () => {
  const [activeUserData, setActiveUserData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <Personalinfo />;
      case 1:
        return <Contactdetails />;
      case 2:
        return <Professionaldetails />;
      case 3:
        return <ReviewForm activeUserData={activeUserData} />;
      default:
        return null;
    }
  };
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      state: "",
      city: "",
      email: "",
      phone: "",
      linkedin: "",
      address: "",
      position: "",
      department: "",
      status: "",
      experience: "",
      current_company: "",
    },
  });

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      dispatch(addEmployee(data));
      setActiveStep(activeStep + 1);
    } else if (activeStep === steps.length - 2) {
      setActiveUserData(data);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((lable, index) => {
          return (
            <Step key={index}>
              <StepLabel>{lable}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Container sx={{ mt: 3 }}>
          <Typography variant="h5" align="center">
            Thank You. Your Response Has Been Submitted Successfully.
          </Typography>
        </Container>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
            <Button
              color="primary"
              variant="contained"
              onClick={handlePrevious}
              disabled={activeStep === 0}
            >
              Prev
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              sx={{ mx: 2 }}
            >
              {activeStep === steps.length - 1 ? "Final Submit" : "Next"}
            </Button>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default LinearStepper;
