import { CssBaseline, Box, Paper, Container } from "@mui/material";
import LinearStepper from "./components/LinearStepper";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={5}>
        <Paper component={Box} p={4}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;
