import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Check as CheckIcon,
  Phone as PhoneIcon,
  Speed as SpeedIcon,
  Palette as PaletteIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const ServicesPricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const plans = [
    {
      title: "Standard Plan",
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      price: "₹4,999",
      features: [
        "5 Pages Website",
        "1 Year Free Hosting ( Unlimited Space )",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "1 Year Free Technical Support For Website",
        "Social Media Integration",
        "Annual Renewal For Hosting Rs.3000",
      ],
      popular: false,
    },
    {
      title: "Premium Plan",
      icon: <PaletteIcon sx={{ fontSize: 40 }} />,
      price: "₹11,999",
      features: [
        "12 Pages Website",
        "1 Year Free Hosting ( Unlimited Space )",
        "Dynamic Website ( Premium Design )",
        "Admin Access",
        "Google Search Console Setup",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "1 Year Free Technical Support For Website",
        "Social Media Integration",
        "Annual Renewal For Hosting Rs.3000",
      ],
      popular: true,
    },
    {
      title: "Custom Plan",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      price: "Custom Quote",
      features: [
        "Pages According to Requirement",
        "1 Year Free Hosting ( Unlimited Space )",
        "Dynamic Website ( Premium Design )",
        "Admin Access​",
        "Google Search Console Setup",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "1 Year Free Technical Support For Website",
        "Social Media Integration",
        "Annual Renewal For Hosting Rs.4000",
        "And Much More...",
      ],
      popular: false,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#3D5AFE",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Choose the perfect plan for your business. Get exactly what you need
            to create a stunning online presence.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                  ...(plan.popular && {
                    borderTop: "4px solid #4CAF50",
                  }),
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: -32,
                      transform: "rotate(45deg)",
                      bgcolor: "#4CAF50",
                      color: "white",
                      px: 4,
                      py: 0.5,
                      fontWeight: "bold",
                    }}
                  >
                    Popular
                  </Box>
                )}

                <Box sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      color: "#3D5AFE",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {plan.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      color: "text.primary",
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#3D5AFE",
                      mb: 3,
                    }}
                  >
                    {plan.price}
                  </Typography>

                  <List sx={{ mb: 4, flexGrow: 1 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon sx={{ color: "#4CAF50" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            "& .MuiListItemText-primary": {
                              color: "text.secondary",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    href="tel:+91 8407913113"
                    sx={{
                      bgcolor: "#3D5AFE",
                      "&:hover": {
                        bgcolor: "#2a3eb1",
                      },
                      px: 4,
                      py: 1.5,
                      width: "100%",
                    }}
                  >
                    Call Us Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 500,
            }}
          >
            Not sure which plan is right for you?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
              px: 4,
              py: 1.5,
            }}
            href="tel:9730416763"
            startIcon={<PhoneIcon />}
          >
            Let's Discuss Your Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPricing;
