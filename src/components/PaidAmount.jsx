import "../assets/styles/paidAmount.css";
import { Box, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import AllOutIcon from "@mui/icons-material/AllOut";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const PaidAmount = () => {
  return (
    <Box className="paid-amount-container">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "10px", color: "#cccccc" }}>10:48</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WifiIcon sx={{ fontSize: "15px", color: "#cccccc" }} />
          <Box
            sx={{
              marginLeft: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircleIcon sx={{ color: "#cccccc", fontSize: "6px" }} />
            <CircleIcon sx={{ color: "#cccccc", fontSize: "6px" }} />
            <CircleIcon sx={{ color: "#cccccc", fontSize: "6px" }} />
            <CircleOutlinedIcon sx={{ color: "#cccccc", fontSize: "6px" }} />
            <CircleOutlinedIcon sx={{ color: "#cccccc", fontSize: "6px" }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: "10px",
          py: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShowChartIcon sx={{ fontSize: "15px", color: "#000" }} />
          </Box>
          <p
            style={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: 400,
              marginLeft: "8px",
            }}
          >
            Payments
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#000",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <AllOutIcon sx={{ fontSize: "15px", color: "#fff" }} />
          </Box>
          <Box
            sx={{
              backgroundColor: "blue",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "7px",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "10px",
                lineHeight: 1,
                fontWeight: 600,
              }}
            >
              U
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaidAmount;
