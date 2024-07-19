import { Box } from "@mui/material";
import "./App.css";
import SwapComponent from "./components/SwapComponent";
import Introduction from "./components/Introduction";
import PaidAmount from "./components/PaidAmount";
import MainWallet from "./components/MainWallet";
import BenefitsComponent from "./components/BenefitsComponent";
import InsightsComponent from "./components/InsightsComponent";
import VisaCard from "./components/VisaCard";
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
          <MainWallet />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "25%" }}>
          <BenefitsComponent />
          <InsightsComponent />
          <VisaCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
