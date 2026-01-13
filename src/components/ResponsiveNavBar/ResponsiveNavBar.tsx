import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { NAV_PAGES } from "../../types/navigation";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  // This is for your light/dark toggle
  const [darkMode, setDarkMode] = React.useState(false);
  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
    // Here you could also call a function to actually toggle theme
    console.log("Dark mode:", event.target.checked);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" sx={{ bgcolor: "#14274E" }}>
      <Toolbar sx={{ px: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, letterSpacing: ".15rem", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Online Hospital
        </Typography>

        <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
          <IconButton onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {NAV_PAGES.map((page) => (
              <MenuItem
                key={page.label}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
              >
                {page.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            ml: "auto",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          {NAV_PAGES.map((page) => (
            <Button
              key={page.label}
              onClick={() => navigate(page.path)}
              sx={{ color: "white", ml: 2 }}
            >
              {page.label}
            </Button>
          ))}

          {/* The Switch goes here, right after the buttons */}
          <Switch
            checked={darkMode}
            onChange={handleDarkModeToggle}
            color="default"
            sx={{ ml: 2 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
