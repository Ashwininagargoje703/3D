import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const About = () => {
  const companyName = "Blockchain & Token";
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#1976D2",
              fontWeight: "bold",
              fontSize: "5rem",
            }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "2rem",
            pl: 10,
            pr: 10,
          }}
        >
          <Typography variant="body1" align="justify">
            Welcome to {companyName}, where innovation meets blockchain
            brilliance. Our journey began with a passion for revolutionizing the
            digital landscape through cutting-edge blockchain technology. As
            fervent believers in the power of decentralization, we embarked on a
            mission to redefine the way industries operate, transactions occur,
            and trust is established.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "2rem",
            pl: 10,
            pr: 10,
          }}
        >
          <Typography variant="body1" align="justify">
            At {companyName}, we are committed to being at the forefront of the
            blockchain revolution, constantly pushing the boundaries of what's
            possible. Our team of dedicated experts brings a wealth of knowledge
            and experience to the table, ensuring that we remain pioneers in the
            ever-evolving blockchain space.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "2rem",
            pl: 10,
            pr: 10,
          }}
        >
          <Typography variant="body1" align="justify">
            What sets us apart is not just our expertise but our unwavering
            dedication to transparency, security, and innovation. We believe in
            creating solutions that not only meet the needs of today but
            anticipate the challenges of tomorrow. Whether you're a seasoned
            blockchain enthusiast or just taking your first steps into this
            transformative technology, {companyName} is your trusted partner on
            the path to a decentralized future.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "2rem",
            pl: 10,
            pr: 10,
          }}
        >
          <Typography variant="body1" align="justify">
            Join us as we explore new frontiers, unlock the potential of tokens,
            and build a future where blockchain is not just a technology but a
            cornerstone of progress. ${companyName} - Shaping Tomorrow's
            Blockchain Landscape, Today.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
