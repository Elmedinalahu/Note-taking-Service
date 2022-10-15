import React from "react";

import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import SearchInput from "./SearchInput";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`
const LogOut = styled(Button)({
  position:"absolute",
  right:"15px",
  color: "purple",
  height: 40,
  padding: '0 30px',
  textTransform: 'none',
  fontSize: 'Large'
});

const HeaderBar = ({ open, handleDrawer }) => {
  const logo = '	https://cdn.iconscout.com/icon/free/png-256/google-keep-3627621-3028847.png';
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>NotesService</Heading>
        <SearchInput />

      </Toolbar>
    </Header>
  )
}

export default HeaderBar;