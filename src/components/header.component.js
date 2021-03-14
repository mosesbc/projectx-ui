import { AppBar, Button, IconButton, List, ListItem, ListItemText, Menu, MenuItem, SwipeableDrawer, Tab, Tabs, Toolbar, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/projectx-white.svg'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  offsetDiv: {
    ...theme.mixins.toolbar
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }

  },
  logo: {
    height: "3em",
    color: "white",
    [theme.breakpoints.down("md")]: {
      height:"2em"
    },
    [theme.breakpoints.down("xs")]: {
      height:"1.5em"
    }
  },
  button: {
    marginLeft: "auto",
    color:"white"
  },
  tabsContainer: {
    margin:"0 auto"
  },
  menu: {
    color:"black"
  },
  menuItem: {
    opacity: 0.7,
    "&:hover": {
      opacity:1
    }
  },
  drawerIcon: {
    height: "50px",
    width:"50px"
  },
  drawerIconContainer: {
    color:"white",
    marginLeft:"auto",
    "&:hover": {
      backgroundColor:"transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color:"white"
  },
  appbar: {
    zIndex:theme.zIndex.modal+1
  }
}));

export const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [activeTab, setActiveTab] = useState(0)
  const [clientTabEl, setClientTabEl] = useState(null)
  const [isClientMenuOpen, setClientMenuOpen] = useState(false)
  const [openDrawer,setOpenDrawer] = useState(false)


  const handleTabChange = (e,index) => {
    setActiveTab(index)
  }
  const handleClientMenuOpen = (e) => { 
    setClientTabEl(e.currentTarget)
    setClientMenuOpen(true)
  }
  const handleClientMenuClose = (e) => { 
    setClientTabEl(null)
    setClientMenuOpen(false)
  }
  
  const clientMenuOptions = [{ text: "Company", link: "company" }, { text: "Person", link: "person" }]
  
  useEffect(() => {
    if (window.location.pathname === "/" && activeTab !== 0) {
      setActiveTab(0)
    } else if (window.location.pathname === "/client" && activeTab !== 1) { 
      setActiveTab(1)
    } else if (window.location.pathname === "/about" && activeTab !== 2) { 
      setActiveTab(2)
    } else if (window.location.pathname === "/contact" && activeTab !== 3) { 
      setActiveTab(3)
    }
  }, [activeTab])

  const tabs = (<>
    <Tabs value={activeTab} onChange={handleTabChange} className={ classes.tabsContainer }>
      <Tab label="Home" component={Link} to="/"></Tab>
      <Tab
        aria-owns={clientTabEl ? "client-menu" : undefined}
        aria-haspopup={clientTabEl ? true : undefined}
        label="Clients"
        component={Link}
        onMouseOver={e => { handleClientMenuOpen(e) }}
        to="/dummypath"
      />
      <Tab label="About Us" component={ Link } to="/about"></Tab>
      <Tab label="Contact Us" component={ Link } to="/contact"></Tab>
      </Tabs>
      <Button className={ classes.button}>
        Login
      </Button>
      <Menu
        id="client-menu"
        anchorEl={clientTabEl}
        open={isClientMenuOpen}
        onClose={handleClientMenuClose}
        classes={{ paper: classes.menu }}
        style={{zIndex:1302}}
        MenuListProps={{ onMouseLeave: handleClientMenuClose }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        keepMounted
      >
        {clientMenuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{root:classes.menuItem}}
            onClick={event => {
              setActiveTab(1);
              handleClientMenuClose()
            }}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
  </>)

  const drawer = (
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
        classes={{paper:classes.drawer}}
      >
        <div className={classes.offsetDiv}/>
        <List disablePadding>
          <ListItem onClick={() => { setOpenDrawer(false) }} divider button component={Link} to="/" className={ classes.drawerItem}>
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick={() => {setOpenDrawer(false)}} divider button component={Link} to="/client" className={ classes.drawerItem}>
            <ListItemText disableTypography>Client</ListItemText>
          </ListItem>
          <ListItem onClick={() => {setOpenDrawer(false)}} divider button component={Link} to="/about" className={ classes.drawerItem}>
            <ListItemText disableTypography>About</ListItemText>
          </ListItem>
          <ListItem onClick={() => {setOpenDrawer(false)}} divider button component={Link} to="/contact" className={ classes.drawerItem}>
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon/>
      </IconButton>
    </>
  )
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={ ()=>{setActiveTab(0)} } disableRipple>
              <img className={classes.logo} src={logo} alt="Project X" />
            </Button>
            {matches? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offsetDiv}/>
    </>
  )
}
