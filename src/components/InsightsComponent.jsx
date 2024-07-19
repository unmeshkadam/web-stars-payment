import { Box, Typography } from "@mui/material";
import "../assets/styles/insightsComponent.css";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InsightsChart from "./InsightsChart";

const InsightsComponent = () => {
  return (
    <Box className="insights-main-container">
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography
          style={{ fontSize: "10px", fontWeight: 500, color: "#cccccc" }}
        >
          10:48
        </Typography>
        <Box
          sx={{
            marginLeft: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <CircleIcon sx={{ color: "#cccccc", fontSize: "5px", mr: 0.2 }} />
          <CircleIcon sx={{ color: "#cccccc", fontSize: "5px", mr: 0.2 }} />
          <CircleIcon sx={{ color: "#cccccc", fontSize: "5px" }} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Typography
          sx={{ fontSize: "10px", color: "#d3d3d3", fontWeight: 500 }}
        >
          AMOUNT
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline", mt: 1 }}>
          <Typography sx={{ fontSize: "12px" }}>$</Typography>
          <Typography sx={{ fontSize: "30px", ml: "5px" }}>954.309</Typography>
        </Box>
      </Box>
      <Box className="insights-chart">
        <InsightsChart />
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0.7,
            backgroundColor: "#323232",
            borderRadius: "50%",
            cursor: "pointer",
            mr: 1,
          }}
        >
          {" "}
          <ExpandLessIcon sx={{ fontSize: "17px", color: "#fff" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0.7,
            backgroundColor: "#fff",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <ExpandMoreIcon sx={{ fontSize: "17px", color: "#000" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default InsightsComponent;
