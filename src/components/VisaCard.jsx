import "../assets/styles/visaCard.css";
import { Box, Typography } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import WifiIcon from "@mui/icons-material/Wifi";

const VisaCard = () => {
  return (
    <Box className="visa-card-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <DonutSmallIcon sx={{ color: "#909090", fontSize: "35px" }} />
        <WifiIcon
          sx={{ color: "#363636", fontSize: "20px", rotate: "90deg" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          mx: 1,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "10px", color: "#d3d3d3", mr: 2 }}>
              03/24
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#d3d3d3", ml: 2 }}>
              345
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "30px", color: "#d3d3d3", mr: 1 }}>
              **** 7090
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#9c9c9c",
          }}
        >
          VISA
        </Typography>
      </Box>
    </Box>
  );
};

export default VisaCard;
