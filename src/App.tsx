import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Header from "./components/Header";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <Header />
      </>
    </ThemeProvider>
  );
}

export default App;
