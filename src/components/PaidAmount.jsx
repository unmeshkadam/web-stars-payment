import "../assets/styles/paidAmount.css";
import { Box, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import AllOutIcon from "@mui/icons-material/AllOut";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import AppleIcon from "@mui/icons-material/Apple";

const PaidAmount = () => {
  return (
    <Box className="paid-amount-container">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          style={{ fontSize: "10px", fontWeight: 500, color: "#cccccc" }}
        >
          10:48
        </Typography>
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
          <Typography
            sx={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: 400,
              marginLeft: "8px",
            }}
          >
            Payments
          </Typography>
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
      <Box
        sx={{
          m: 1,
          border: "1px solid #6b6a6a",
          borderRadius: "10px",
          p: 3,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "10px", fontWeight: 400, color:'#D3D3D3' }}>
            AMOUNT
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
            <CircleIcon
              sx={{ color: "#cccccc", fontSize: "5px", marginRight: "2px" }}
            />
            <CircleIcon
              sx={{ color: "#cccccc", fontSize: "5px", marginRight: "2px" }}
            />
            <CircleIcon
              sx={{ color: "#cccccc", fontSize: "5px", marginRight: "2px" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "15px", marginRight: 0.4 }}>
              $
            </Typography>
            <Typography
              sx={{ fontSize: "35px", fontWeight: 500, marginRight: 0.6 }}
            >
              178,49
            </Typography>
            <Box
              sx={{
                border: "1px solid #71797E",
                height: "30px",
                width: "1px",
                marginRight: 0.6,
              }}
            ></Box>
            <Typography
              sx={{ fontSize: "15px", color: "gray", fontWeight: 500 }}
            >
              .00
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 0.6,
              px: 1,
              cursor: "pointer",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
              USD
            </Typography>
            <ArrowDropDownIcon sx={{ fontSize: "10px", fontWeight: 500 }} />
            <Box className="country-currency-icon"></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "60%",
            my: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "38px", fontWeight: 500, marginRight: "5px" }}
          >
            Successfully Paid
            <CheckIcon
              sx={{ fontSize: "20px", color: "#71797E", marginLeft: "5px" }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 3,
            px: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="profile-img-icon"></Box>
            <Box
              sx={{
                border: "1px solid #636262",
                height: "30px",
                width: "1px",
                mx: 1.5,
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "9px", color: "#b8bcbe" }}>
                To
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: "#b8bcbe", fontWeight: 500 }}
              >
                Halle Carver
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1.5,
              cursor: "pointer",
              border: "1px solid #5c5c5c",
            }}
          >
            <AppleIcon sx={{ fontSize: "10px", fontWeight: 500 }} />
            <Typography sx={{ fontSize: "8px", fontWeight: 500, mx: "3px" }}>
              Pay
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaidAmount;
