import React, { useState } from "react";
import "./style.css";
import SelectLocation from "../filters/SelectLocation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import Search from "../../common/Search";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [{user}] = useStateValue();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ListItemButton  component={Link} to={user? "/profile" : "/login" }  sx={{ pt: 2, pb: 2 }}>
        <ListItemAvatar sx={{ width: 60, height: 60 }}>
          <Avatar
            src={`/static/images/avatar/jp.jpg`}
            sx={{ width: 100 + "%", height: 100 + "%" }}
          />
        </ListItemAvatar>
        <ListItemText sx={{ pl: 2 }} primary={user ? `Hello, ${user.username}` : "Login" } />
      </ListItemButton>
      <Divider />
      <List sx={{ pt: 1 }} className="mobile-menu-list">
        <ListItem  disablePadding>
          <ListItemButton component={Link} to="/sell" >
            <ListItemIcon>
              <PhotoCameraOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Start Selling" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={user? "/wishlist" : "/login" } >
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pb: 2 }} component={Link} to="/scrapart" >
            <ListItemIcon>
              <ShoppingBasketOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ScrapArt" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem sx={{ pt: 1 }} disablePadding>
          <ListItemButton component={Link} to="/help" >
            <ListItemIcon>
              <HelpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar elevation={0} sx={{ bgcolor: "#fff" }} component="nav">
        <Toolbar sx={{ pt: 0 }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component={Link} to="/"  sx={{ ml: { xs: -2, lg: 3}, pt: 1,  }}>
            <img
              className="brand-img"
              alt="brand"
              src="https://github.com/tanmay2626/Re-commerce/blob/nav-bar/client/src/assets/brand-logo.png?raw=true"
            />
          </Box>
          <Box sx={{ m: "20px 0 10px auto " , mr: -1 , display: { xs: "inline-block" , md: "none" }, float: "right", ml: { md: 9 } }}>
            <SelectLocation />
          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: { xs: "none", sm: "block" },
              mt: 1,
            }}
          >
            <Button size="large" component={Link} to="/scrapart" sx={{ color: "black", textTransform: "none", mr: 2 }}>
              Try ScrapArt!
            </Button>
          <Box sx={{ display: "inline-block", mr: 3 }}>
            <Search />
          </Box>
          <Box sx={{ display: { md: "inline-block" , xs: "none" } , verticalAlign: "middle", mr: 0.5 }}>
            <SelectLocation />
          </Box>
            <Button component={Link} to={user? "/profile" : "/login" }  size="large" startIcon={<PermIdentityOutlinedIcon />} sx={{ color: "black", textTransform: "none", mr: 0.5 }}>
            {user ? `Hello, ${user.username}` : "Login" } 
            </Button>
            <Button size="large" component={Link} to={user? "/wishlist" : "/login" }  startIcon={<FavoriteBorderIcon />} sx={{ color: "black", textTransform: "none", mr: 1 }}>
            Wishlist
            </Button>
            <Button size="medium" variant="outlined" component={Link} to={user? "/sell" : "/login" }  startIcon={<PhotoCameraOutlinedIcon />} sx={{ color: "black", textTransform: "none", bgcolor: "#8BF5FA" , border: 2,  borderColor: "black" , p: 1, width: 90+"px", borderRadius: 5 }}>
              Sell
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 75 + "%" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
