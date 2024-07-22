import { Box } from "@mui/material";
import "../assets/styles/swapComponent.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import LayersIcon from "@mui/icons-material/Layers";
import Button from "@mui/material/Button";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";

const SwapComponent = () => {
  return (
    <Box className="main-container">
      <Box className="swap-item-container">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box className="bnb-text">BNB</Box>
            <DashboardIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </Box>
          <ArrowDropDownIcon sx={{ fontSize: "20px", color: "#fff" }} />
        </Box>
        <Box className="amount-info-container">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#fff", fontSize: "10px" }}>Amount</p>
            <p style={{ color: "#fff", fontSize: "20px", marginTop: "5px" }}>
              40,000
            </p>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#fff", fontSize: "10px" }}>
              [CODEX: 405...340]
            </p>
            <Box
              sx={{
                color: "#fff",
                fontSize: "22px",
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <p
                style={{ color: "#fff", fontSize: "12px", marginRight: "2px" }}
              >
                $
              </p>
              5,409.00
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<SwapCallsIcon />}
          sx={{
            color: "#fff",
            border: "1.2px solid #f6f4f4",
            borderRadius: "20px",
            textTransform: "none",
            my: "-10px",
            fontSize: "14px",
            backgroundColor: "#2a577d",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#1f405b",
              borderColor: "#fff",
            },
          }}
        >
          Swap
        </Button>
      </Box>

      <Box className="swap-item-container">
        <Box
          sx={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#fff", fontSize: "10px" }}>Amount</p>
            <p style={{ color: "#fff", fontSize: "20px", marginTop: "5px" }}>
              13,980
            </p>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#fff", fontSize: "10px" }}>
              [CODEX: 405...340]
            </p>
            <Box
              sx={{
                color: "#fff",
                fontSize: "22px",
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <p
                style={{ color: "#fff", fontSize: "12px", marginRight: "2px" }}
              >
                $
              </p>
              5,809.03
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Box className="bnb-text">SOL</Box>
            <HorizontalSplitIcon
              sx={{ fontSize: "15px", color: "#fff", marginLeft: "5px" }}
            />
          </Box>
          <ArrowDropDownIcon sx={{ fontSize: "20px", color: "#fff" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InfoIcon sx={{ fontSize: "20px", color: "#fff" }} />{" "}
          <p style={{ color: "#fff", fontSize: "13px", marginLeft: "5px" }}>
            Swap plus %0.7 network fee
          </p>
        </Box>
        <LayersIcon
          sx={{ fontSize: "25px", color: "#fff", marginRight: "5px" }}
        />
      </Box>
    </Box>
  );
};

export default SwapComponent;
