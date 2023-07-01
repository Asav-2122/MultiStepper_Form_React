import { CssBaseline, Box, Paper, Container } from "@mui/material";
import LinearStepper from "./components/pages/LinearStepper";
import { createBrowserRouter, Outlet } from "react-router-dom";
import EmployeeList from "./components/pages/EmployeeList";
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Outlet />
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <CssBaseline />
            <Container component={Box} p={5}>
              <Paper component={Box} p={4}>
                <LinearStepper />
              </Paper>
            </Container>
          </>
        ),
      },

      {
        path: "/employeelist",
        element: <EmployeeList />,
      },
    ],
  },
]);
export default App;
