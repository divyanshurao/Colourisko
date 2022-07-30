import React from "react";
import { Paper, Typography, Grid, Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
//import { ReactComponent as Logo } from './Group 726.png';
import Logo from  './Group 726.png';
import './Body.css';
const Read = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    }, 
  });
   return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        {}
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            pl: { md: 10, xs: 3 },
            pt: { md: 10, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { md: 10,xs: 3 },
            textAlign: "center",
            background:"#383838",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "20px",
            }}
            elevation={3}
          >
            
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "center", sx: "center" } }}
            >
              Trusted by Over 40+ Businesses
            </Typography>

            <Avatar class="item2"
            variant={"rounded"}
            alt="The image"
            src={Logo}
            style={{
              paddingLeft:90,
              width: 880,
              height: 75,
              background: "FFFFFF",
            
            }}
          />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Read;
