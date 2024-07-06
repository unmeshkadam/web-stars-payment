import { Box } from "@mui/material";
import "./App.css";
import SwapComponent from "./components/SwapComponent";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000", height: "100vh", display: "flex" }}>
      <SwapComponent />
    </Box>
  );
}

export default App;
