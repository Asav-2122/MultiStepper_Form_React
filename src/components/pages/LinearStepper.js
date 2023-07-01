import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import Personalinfo from "../stepcontentforms/Personalinfo";
import Contactdetails from "../stepcontentforms/Contactdetails";
import Professionaldetails from "../stepcontentforms/Professionaldetails";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/slice/employeeSlice";

const steps = ["Personal Info", "Contact Details", "Professional Details"];

const getStepContent = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <Personalinfo />;
    case 1:
      return <Contactdetails />;
    case 2:
      return <Professionaldetails />;
    default:
      return null;
  }
};

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
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
    if (activeStep === steps.length - 1) {
      dispatch(addEmployee(data));
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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
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
            <Button color="primary" variant="contained" type="submit" sx={{mx:2}}>
              Next
            </Button>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default LinearStepper;
