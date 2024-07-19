import "../assets/styles/mainWallet.css";
import { Box, Typography } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import AlbumIcon from "@mui/icons-material/Album";
import CircleIcon from "@mui/icons-material/Circle";

const MainWallet = () => {
  return (
    <Box className="main-wallet-container">
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <LayersIcon sx={{ color: "#fff", fontSize: "25px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1.5,
              py: 0.5,
              cursor: "pointer",
              border: "1px solid #5c5c5c",
              mr: 1,
              color: "#d3d3d3",
            }}
          >
            <Typography sx={{ fontSize: "8px", fontWeight: 500, mx: "3px" }}>
              Day
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#3671a3",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1.5,
              py: 0.5,
              cursor: "pointer",
              border: "1px solid #5c5c5c",
              mr: 1,
            }}
          >
            <Typography sx={{ fontSize: "8px", fontWeight: 500, mx: "3px" }}>
              Week
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1.5,
              py: 0.5,
              cursor: "pointer",
              border: "1px solid #5c5c5c",
              color: "#d3d3d3",
            }}
          >
            <Typography sx={{ fontSize: "8px", fontWeight: 500, mx: "3px" }}>
              Month
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: 2,
          p: 1,
        }}
      >
        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
          MAIN WALLET
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#2a2b2e",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 0.5,
                cursor: "pointer",
                border: "1px solid #5c5c5c",
                mr: 0.5,
                color: "#d3d3d3",
              }}
            >
              <Typography sx={{ fontSize: "10px", fontWeight: 600, mx: "3px" }}>
                14%
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "7px", color: "#d3d3d3", m: 1 }}>
              Daily
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #3671a3, #d9551c)",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 0.5,
                cursor: "pointer",
                border: "1px solid #5c5c5c",
                mr: 0.5,
                color: "#d3d3d3",
              }}
            >
              <Typography sx={{ fontSize: "10px", fontWeight: 600, mx: "3px" }}>
                23%
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "7px", color: "#d3d3d3", m: 1 }}>
              Save
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "#2a2b2e",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "20%",
                  py: 0.5,
                  cursor: "pointer",
                  borderTop: "1px solid #343434",
                  borderBottom: "1px solid #343434",
                  borderLeft: "1px solid #343434",
                  color: "#d3d3d3",
                }}
              >
                <Typography
                  sx={{ fontSize: "10px", fontWeight: 600, mx: "5px" }}
                >
                  63%
                </Typography>
              </Box>
              <Box className="strips-black-box"></Box>
              <Box className="strips-gray-box"></Box>
              <Box
                sx={{
                  backgroundColor: "#2a2b2e",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10%",
                  py: 0.5,
                  cursor: "pointer",
                  borderTop: "1px solid #343434",
                  borderBottom: "1px solid #343434",
                  borderLeft: "1px solid #343434",
                  color: "#d3d3d3",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "2px",
                  }}
                >
                  <Box className="small-dot"></Box>
                  <Box className="small-dot"></Box>
                  <Box className="small-dot"></Box>
                </Box>
              </Box>
            </Box>
            <Typography sx={{ fontSize: "7px", color: "#d3d3d3", m: 1 }}>
              House and food
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "10%",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <AlbumIcon sx={{ color: "#d3d3d3", fontSize: "25px", ml: "3px" }} />
            <Typography sx={{ fontSize: "7px", color: "#d3d3d3", m: 1 }}>
              10-25 Jun
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mx: 2,
          mt: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography sx={{ fontSize: "60px", fontWeight: 600 }}>
            2,192
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            .00
          </Typography>
          <Box sx={{ display: "flex", ml: 2, alignItems: "center" }}>
            <Box className="wallet-country-currency-icon"></Box>
            <Typography sx={{ fontSize: "8px", ml: 0.3, fontWeight: 500 }}>
              USD
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.7,
              cursor: "pointer",
              border: "1px solid #292929",
              color: "#d3d3d3",
            }}
          >
            <CircleIcon sx={{ color: "#dd3d3", fontSize: "5px", mr: 0.3 }} />
            <CircleIcon sx={{ color: "#434343", fontSize: "5px", mr: 0.3 }} />
            <CircleIcon sx={{ color: "#434343", fontSize: "5px" }} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#2a2b2e",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: 1.5,
              cursor: "pointer",
              border: "1px solid #292929",
              color: "#8B8D98",
              ml: 1,
            }}
          >
            <CircleIcon sx={{ color: "#dd3d3", fontSize: "15px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainWallet;
