import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Stack,
  useTheme,
} from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const WhyChooseUs = () => {
  const theme = useTheme();

  const points = [
    {
      title: "Client-Focused Approach",
      description: "We tailor every project to your specific business needs.",
    },
    {
      title: "Affordable, High-Quality Solutions",
      description:
        "Providing budget-friendly services without compromising quality.",
    },
    {
      title: "SEO Optimized ",
      description:
        "We implement best practices in SEO from the start, helping your website rank higher on search engines and attract more visitors.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Using modern tools and frameworks to ensure high performance.",
    },
    {
      title: "24/7 Support",
      description: "Our team is available around the clock for assistance.",
    },
    {
      title: "Responsive Design",
      description:
        "All our websites are mobile-friendly, ensuring a seamless experience for users across all devices",
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
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
            color: "#3D5AFE",
            mb: 6,
            textAlign: "center",
          }}
        >
          Why Choose KPS Web Dev?
        </Typography>

        {/* Points List */}
        <Grid container spacing={8}>
          {points.map((point, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={2}
                sx={{
                  p: 3,
                  bgcolor: "#3D5AFE",
                  color: "white",
                  height: "100%",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Stack direction="row" spacing={4} alignItems="center">
                  <CheckCircleIcon sx={{ fontSize: 40 }} />
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "white" }}
                    >
                      {point.title}
                    </Typography>
                    <Typography variant="body2">{point.description}</Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
