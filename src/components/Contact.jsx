import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const Contact = () => {
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  };

  const inputLabelStyle = {
    sx: {
      "&.MuiInputLabel-outlined": {
        color: "blue",
      },
    },
  };

  return (
    <Box
      sx={{
        padding: "20px",
        marginTop: "20px",
        boxShadow: 3,
        height: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="justify">
            Have questions or need assistance? Reach out to us using the form
            below:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={textFieldStyle}
            InputLabelProps={inputLabelStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={textFieldStyle}
            InputLabelProps={inputLabelStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            sx={textFieldStyle}
            InputLabelProps={inputLabelStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
