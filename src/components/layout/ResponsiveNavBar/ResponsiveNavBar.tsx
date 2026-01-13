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
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_PAGES } from "../../../types/navigation";

import { useAuth } from "../../../auth/useAuth";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isReady } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const hideNav = location.pathname === "/login";
  if (hideNav) return null;

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const isLoggedIn = isReady && !!user;

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

            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                
                if (isLoggedIn){
                  handleLogout(); 
                }
                else {
                  navigate("/login");
                }
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </MenuItem>
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

          {isLoggedIn && (
            <Typography sx={{ color: "white", ml: 3, opacity: 0.9 }}>
              {user!.role}
            </Typography>
          )}

          <Button
            onClick={() => (isLoggedIn ? handleLogout() : navigate("/login"))}
            sx={{ color: "white", ml: 2, border: "1px solid rgba(255,255,255,0.35)" }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>

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
