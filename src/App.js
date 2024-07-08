import { Box } from "@mui/material";
import "./App.css";
import SwapComponent from "./components/SwapComponent";
import Introduction from "./components/Introduction";
import { ThemeProvider } from "@mui/material";
import theme from "./config/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#fff", height: "100vh", display: "flex" }}>
        {/* <Box sx={{ display: "flex", flexDirection: "column", width: '30%' }}> */}
          <Introduction />
          {/* <SwapComponent /> */}
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
