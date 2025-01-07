import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerStyles, setHeaderStyles] = useState({
    color: "white",
    backgroundColor: "transparent",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "About Us", "Our Work", "Services", "Contact Us"];

  // Handles drawer toggle for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Smooth scrolling to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // Close drawer on section selection
  };

  // Dynamic header styles based on the section background color
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        const isWhiteBg =
          window.getComputedStyle(section).backgroundColor ===
          "rgb(255, 255, 255)";
        setHeaderStyles({
          color: isWhiteBg ? "white" : "blue",
          backgroundColor: isWhiteBg ? "#1539ed" : "white",
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item}
            onClick={() => scrollToSection(item.replace(" ", "").toLowerCase())}
            sx={{ color: "black" }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
        <ListItem button sx={{ color: "black" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ color: "black" }} />
            <ListItemText primary="9730416763" />
          </Stack>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: headerStyles.backgroundColor,
        boxShadow: 0,
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: headerStyles.color,
                textAlign: "center",
                transition: "color 0.3s",
              }}
            >
              KPS Web Dev
            </Typography>
            <IconButton
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: headerStyles.color }}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: headerStyles.color,
                transition: "color 0.3s",
              }}
            >
              KPS Web Dev
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.replace(" ", "").toLowerCase())
                  }
                  sx={{
                    color: headerStyles.color,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              href="tel:+91 8407913113"
              startIcon={<PhoneIcon sx={{ color: headerStyles.color }} />}
              sx={{
                color: headerStyles.color,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              9730416763
            </Button>
          </>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
