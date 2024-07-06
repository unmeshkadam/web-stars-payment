import { Box } from "@mui/material";
import "../assets/styles/swapComponent.css";

const SwapComponent = () => {
  return (
    <Box className="main-container">
      <Box className="bnb-container">
        <Box>
          <p className="bnb-text">BNB</p>
        </Box>
        <Box className="amount-info-container">
          <Box sx={{display: "flex", flexDirection: 'column'}}>
            <p style={{ color: "#fff", fontSize: "15px" }}>Amount</p>
            <p style={{ color: "#fff", fontSize: "10px", marginTop: '5px' }}>$40,000</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SwapComponent;
