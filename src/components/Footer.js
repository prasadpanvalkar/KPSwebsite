import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const companyLinks = ["Home", "About Us", "Our Work", "Contact Us"];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1A237E",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 4 : 8}>
          {/* Company Column */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Company
            </Typography>
            <Stack spacing={2}>
              {companyLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="none"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Get In Touch Column */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Link
                  href="tel:+91 8407913113"
                  underline="none"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  +91 8407913113
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Link
                  href="mailto:work1prasad@gmail.com"
                  underline="none"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "rgba(255,255,255,0.8)",
                    },
                  }}
                >
                  work1prasad@gmail.com
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright Text */}
        <Typography
          variant="body2"
          sx={{
            mt: 6,
            textAlign: "right",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 2,
          }}
        >
          © Copyright KPS Web Dev.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
