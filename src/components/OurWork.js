import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Link,
  useTheme,
  useMediaQuery,
  Stack,
  Chip,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurWork = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Tours and Travels Agency",
      description: "A full-featured with online booking system website.",
      image: "/images/AshokaProject.jpg",
      link: "https://www.touristaurangabad.com/",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Agency Website",
    },
    {
      title: "Construction Company Website",
      description:
        "Modern Constaruction Company website with dynamic content",
      image: "/images/BuilderProject.jpg",
      link: "",
      technologies: ["React.js "],
      category: "Construction Company",
    },
  ];

  const CustomArrow = ({ direction, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "rgba(255, 255, 255, 0.9)",
        "&:hover": {
          bgcolor: "white",
          transform: "translateY(-50%) scale(1.1)",
        },
        transition: "all 0.3s ease",
        ...(direction === "left"
          ? { left: { xs: -16, md: -20 } }
          : { right: { xs: -16, md: -20 } }),
      }}
    >
      {direction === "left" ? <ArrowBackIcon /> : <ArrowForwardIcon />}
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (i) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: i === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          mt: 4, // Add margin top to dots
        }}
      />
    ),
    dotsClass: "slick-dots",
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#3D5AFE",
        color: "white",
        overflow: "hidden",
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
            Our Work
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              opacity: 0.9,
            }}
          >
            Take a look at some of our recent projects that showcase our
            expertise in web development.
          </Typography>
        </Box>

        {/* Projects Slider */}
        <Box sx={{ px: { xs: 2, md: 4 }, position: "relative" }}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ p: 3 }}>  {/* Increased padding for better spacing */}
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease",
                    borderRadius: 2,
                    overflow: "hidden",
                    mx:0.5,
                    boxShadow: theme.shadows[8],
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: theme.shadows[12],
                    },
                  }}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: "block", position: "relative" }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: "rgba(0,0,0,0.3)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        },
                        "&:hover::after": {
                          opacity: 1,
                        },
                      }}
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1, bgcolor: "white", p: 3 }}>  {/* Increased padding */}
                    <Stack spacing={2.5}>  {/* Increased spacing between elements */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ 
                            color: "text.primary", 
                            fontWeight: "bold",
                            fontSize: "1.25rem"  // Slightly larger font
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconButton 
                            size="small" 
                            sx={{ 
                              color: "#3D5AFE",
                              transition: "transform 0.2s ease",
                              "&:hover": {
                                transform: "scale(1.1)",
                              }
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        </Link>
                      </Box>
                      <Typography
                        variant="body1"  // Changed from body2 for better readability
                        sx={{ color: "text.secondary" }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>  {/* Increased gap */}
                        <Chip
                          label={project.category}
                          sx={{
                            bgcolor: "#3D5AFE",
                            color: "white",
                            fontWeight: "bold",
                            '&:hover': {
                              bgcolor: "#3651E3"
                            }
                          }}
                        />
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            variant="outlined"
                            sx={{ 
                              borderColor: "#3D5AFE", 
                              color: "#3D5AFE",
                              '&:hover': {
                                bgcolor: "rgba(61, 90, 254, 0.1)"
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default OurWork;