import { Box } from "@mui/material";
import "./App.css";
import SwapComponent from "./components/SwapComponent";
import Introduction from "./components/Introduction";
import PaidAmount from "./components/PaidAmount";
import { ThemeProvider } from "@mui/material";
import theme from "./config/themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#000", height: "100%", display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
          <Introduction />
          <SwapComponent />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "45%" }}>
          <PaidAmount />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
