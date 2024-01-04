import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import ThreeDModel from "../ThreeDModel";

const Main = () => {
  return (
    <Grid
      container
      sx={(theme) => {
        return { padding: theme.spacing(5), height: "100vh" };
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={(theme) => {
          return {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: theme.spacing(3),
          };
        }}
      >
        <Box
          sx={(theme) => ({
            padding: theme.spacing(3),
            bgcolor: "transparent",
            border: "none",
            outline: "none",
          })}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#00B4AB",
              fontWeight: "bold",
            }}
          >
            Blockchain & Token: Powering Tomorrow's Innovations
          </Typography>
          <Typography paragraph color="#D3D3D3">
            Explore the Future with Cutting-Edge Blockchain Technology and Token
            Innovations. Unlock the Power of Decentralization and Seamless
            Transactions on Our Platform.
          </Typography>
          <Button
            // component={Link}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{
              bgcolor: "#3498db",
              marginTop: "1rem",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(3),
        })}
      >
        <Box sx={(theme) => ({ padding: theme.spacing(3) })}>
          <ThreeDModel />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
