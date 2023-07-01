import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import Personalinfo from "./stepcontentforms/Personalinfo";
import Contactdetails from "./stepcontentforms/Contactdetails";
import Professionaldetails from "./stepcontentforms/Professionaldetails";
import {useForm,FormProvider} from "react-hook-form"

const steps = ["Personal Info", "Contact Details", "Professional Details"];

const getStepContent = (activeStep) => {
  switch (activeStep) {
    case 0:
      return <Personalinfo />;
    case 1:
      return <Contactdetails />;
    case 2 : 
    return <Professionaldetails/>;
    default:
      return null;
  }
};

const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm({
    defaultValues:{
      firstName:"",
      lastName:"",
      gender:"",
      state:"",
      city:"",
      position:""
    }
  })
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };
  const onSubmit=(data)=>{
     console.log(data)
  }
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
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}
      <Button
        color="primary"
        variant="contained"
        onClick={handlePrevious}
        disabled={activeStep === 0}
      >
        Prev
      </Button>
      <Button color="primary" variant="contained" onClick={handleNext} type="submit">
        Next
      </Button>
      </form>
      </FormProvider>
      
     
    </div>
  );
};

export default LinearStepper;
