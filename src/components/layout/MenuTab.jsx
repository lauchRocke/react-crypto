import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {BasicMenu} from './BasicMenu';

export function PrimarySearchAppBar1() {

    const [mobileMoreTabAnchorEl, setMobileMoreTabAnchorEl] = React.useState(null);
  

    const isMobileMenuTabOpen = Boolean(mobileMoreTabAnchorEl);
  
    const handleMobileMenuTabClose = () => {
      setMobileMoreTabAnchorEl(null);
    };
  
    const handleMobileMenuTabOpen = (event) => {
      setMobileMoreTabAnchorEl(event.currentTarget);
    };
  
    const mobileMenuTabId = 'primary-search-account-menu-mobile';
    const renderMobileMenuTab = (
      <Menu
        anchorEl={mobileMoreTabAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        id={mobileMenuTabId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuTabOpen}
        onClose={handleMobileMenuTabClose}
      >
  
        {/* <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem> */}
        <MenuItem>
          <AccountCircle />
          <p  style={{padding: '5px', margin: '5px'}}>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                aria-label="show more"
                // aria-controls={mobileMenuTabId}
                // aria-haspopup="true"
                onClick={handleMobileMenuTabOpen}
                color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <PopoverPopupState /> */}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

            </Box>

          </Toolbar>
        </AppBar>

        {renderMobileMenuTab}
      </Box>
    );
  }