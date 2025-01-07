import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Speed as SpeedIcon,
  Brush as BrushIcon,
  AttachMoney as MoneyIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: "Beautiful Design",
      description:
        "We create visually stunning websites that capture your brand essence.",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "High Performance",
      description:
        "Fast, responsive websites that provide seamless user experiences.",
    },
    {
      icon: <MoneyIcon sx={{ fontSize: 40 }} />,
      title: "Affordable Rates",
      description: "Quality web development solutions that fit your budget.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Expert Development",
      description: "Clean, efficient code that powers your digital presence.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Main About Content */}
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "bold",
                color: "#3D5AFE",
                mb: 3,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 500,
                color: "text.primary",
                mb: 3,
              }}
            >
              Turning Ideas into Digital Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              At KPS, we create beautiful, high-performing websites at
              affordable rates. Our mission is to turn your ideas into
              captivating digital experiences that reflect your brand and drive
              success. Whether you're a startup or an established business, we
              blend creativity with functionality to help you thrive online.
              With us, affordability meets excellence.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#3D5AFE",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Let's build something amazing together!
            </Typography>
          </Grid>

          {/* Right Column - Feature Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={10}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      height: "100%",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Box sx={{ color: "#3D5AFE" }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "text.primary",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Stats Section */}
        {/* <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 2,
            bgcolor: "#3D5AFE",
            color: "white",
          }}
        >
          <Grid container spacing={4}>
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Stack
                  alignItems="center"
                  spacing={1}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default AboutUs;
