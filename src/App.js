import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./UI/Theme";
import FormMultiStep from "./Components/MultiStepForm/FormMultiStep";

function App() {

  return (
    <ThemeProvider theme={theme} >

      <div>
        <FormMultiStep />
      </div>
    </ThemeProvider>
  );
}

export default App;
