import { Box, Button } from "@mui/material";
import "../assets/styles/introduction.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Introduction = () => {
  return (
    <Box className="intro-container">
      <Box
        sx={{
          color: "#fff",
          fontSize: "20px",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 500,
          fontStyle: "normal",
        }}
      >
        Web Stars
      </Box>
      <Box sx={{ color: "#fff", fontSize: "37px", marginTop: "10px" }}>
        Fast Pay for Payments
      </Box>
      <Box
        sx={{
          color: "#fff",
          fontSize: "9px",
          marginTop: "20px",
          width: "75%",
          fontWeight: 400,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus
        vulputate metus ultrices. Suspendisse in tempor ex. Donec rhoncus, dui a
        congue sodales,
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "54px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            border: "1.2px solid #f6f4f4",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "10px",
            backgroundColor: "#000",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#000",
              borderColor: "#fff",
            },
          }}
        >
          Read More
        </Button>
        <Button
          variant="outlined"
          endIcon={
            <ArrowForwardIcon
              sx={{ transform: "scale(0.7)", marginLeft: "-6px" }}
            />
          }
          sx={{
            color: "#fff",
            border: "1.2px solid #f6f4f4",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "10px",
            backgroundColor: "#000",
            marginLeft: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#000",
              borderColor: "#fff",
            },
          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default Introduction;
