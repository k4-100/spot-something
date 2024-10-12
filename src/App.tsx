import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Main from "./components/Main";
import PlayerMenu from "./components/PlayerMenu";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{
        maxHeight: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
        <Header />
        <Main />
        <PlayerMenu />
      </Box>
    </ThemeProvider>
  );
}

export default App;
