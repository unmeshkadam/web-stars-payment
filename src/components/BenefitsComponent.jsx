import "../assets/styles/benefitsComponent.css";
import { Box, Typography } from "@mui/material";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const BenefitsComponent = () => {
  return (
    <Box className="benefits-main-container">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", m: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.7,
              backgroundColor: "#000",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            {" "}
            <ControlCameraIcon sx={{ fontSize: "17px", color: "#fff" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.7,
              ml: "-5px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            <AcUnitIcon sx={{ fontSize: "17px", color: "#000" }} />
          </Box>
        </Box>
        <FullscreenIcon
          sx={{ fontSize: "20px", color: "#EBEBEB", m: 1, cursor: "pointer" }}
        />
      </Box>
      <Box sx={{ my: 3, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ fontSize: "13px", color: "#EBEBEB", fontWeight: 500 }}
        >
          BENEFITS
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
          }}
        >
          <Typography sx={{ fontSize: "50px", fontWeight: 600, color: "#fff" }}>
            10.56
          </Typography>
          <Typography
            sx={{ fontSize: "10px", fontWeight: 600, color: "#EBEBEB" }}
          >
            %
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: "13px", color: "#EBEBEB" }}>
          * $48,867.00
        </Typography>
      </Box>
    </Box>
  );
};

export default BenefitsComponent;
