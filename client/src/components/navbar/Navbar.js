import * as React from "react";
import "./style.css";
import Select from "./Select";
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
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import Search from "../../common/Search";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ListItemButton sx={{ pt: 2, pb: 2 }}>
        <ListItemAvatar sx={{ width: 60, height: 60 }}>
          <Avatar
            src={`/static/images/avatar/jp.jpg`}
            sx={{ width: 100 + "%", height: 100 + "%" }}
          />
        </ListItemAvatar>
        <ListItemText sx={{ pl: 2 }} primary="Anushka Nalawade" />
      </ListItemButton>
      <Divider />
      <List sx={{ pt: 1 }} className="mobile-menu-list">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PhotoCameraOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Start Selling" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalMallOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Your Orders" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBasketOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="ScrapArt" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ pb: 1 }} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem sx={{ pt: 1 }} disablePadding>
          <ListItemButton>
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
        <Toolbar sx={{ pt: 1, pb: 1 }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ ml: { xs: -2, lg: 3}, pt: 1,  }}>
            <img
              className="brand-img"
              alt="brand"
              src="https://github.com/tanmay2626/Re-commerce/blob/nav-bar/client/src/assets/brand-logo.png?raw=true"
            />
          </Box>
          <Box sx={{ m: "20px 0 10px auto " , mr: -1 , display: { xs: "inline-block" , md: "none" }, float: "right", ml: { lg: 9 } }}>
            <Select />
          </Box>
          
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: { xs: "none", sm: "block" },
              mt: 1,
            }}
          >
            <Button size="large" sx={{ color: "black", textTransform: "none", mr: 2 }}>
              Try ScrapArt!
            </Button>
          <Box sx={{ display: "inline-block", mr: 3 }}>
            <Search />
          </Box>
          <Box sx={{ display: { md: "inline-block" , xs: "none" } , verticalAlign: "middle" }}>
            <Select />
          </Box>
            <Button size="large" startIcon={<PermIdentityOutlinedIcon />} sx={{ color: "black", textTransform: "none", mr: 0.5 }}>
              Account
            </Button>
            <Button size="large" startIcon={<BookmarkBorderOutlinedIcon />} sx={{ color: "black", textTransform: "none", mr: 0.5 }}>
              Order
            </Button>
            <Button size="large" startIcon={<ShoppingCartOutlinedIcon />} sx={{ color: "black", textTransform: "none" }}>
              Cart(0)
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
