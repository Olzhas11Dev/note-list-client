import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { SubjectOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  linkSection: {
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
  },
});

function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  const MenuItems = [
    {
      text: 'All Notes',
      icon: <SubjectOutlined color="primary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <SubjectOutlined color="primary" />,
      path: '/form',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleDrawer = () => {
    setIsOpen(true);
  };

  const handleRedirect = (path) => {
    history.push(path);
    setIsOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawer} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography style={{ flexGrow: 1 }} />
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={classes.linkSection}>
          <List>
            {MenuItems.map((item, index) => {
              return (
                <ListItem onClick={() => handleRedirect(item.path)} button key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
