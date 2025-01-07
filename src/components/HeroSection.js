import React from "react";
import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        height: { xs: "auto", md: "100vh" },
        bgcolor: "#3D5AFE", // Primary blue background
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Right Column - Hero Image (Shown on top for mobile) */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/HeroImg.png`} // Image path
              alt="Hero Image"
              sx={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "contain",
                scale: { xs: 1, md: 1.3 },
                ml: { xs: 0, md: 6 },
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))", // Adds subtle shadow
              }}
            />
          </Grid>

          {/* Left Column - Hero Text */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                color: "white", // White text for contrast
                mb: 3,
              }}
            >
              Build the Future of Your Business with KPS
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white", // White subheading
                fontWeight: 500,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              We craft high-performance websites that are beautiful, functional,
              and affordable. Let's bring your vision to life today!
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: "#3D5AFE",
                  "&:hover": { bgcolor: "#e0e0e0" },
                }}
                href="tel:+91 8407913113"
                startIcon={<PhoneIcon />}
              >
                call us
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
