import { AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/projectX.svg'

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
  }
}));

export const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState(0)
  const [clientTabEl, setClientTabEl] = useState(null)
  const [isClientMenuOpen, setClientMenuOpen] = useState(false)
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
  
  const clientMenuOptions = [{text:"Company",link:"company"},{text:"Person Type1",link:"person"},{text:"Person Type2",link:"person2"}]

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
              <Tab label="Home" component={ Link } to="/"></Tab>
              <Tab
                aria-owns={clientTabEl ? "client-menu" : undefined}
                aria-haspopup={clientTabEl ? true : undefined}
                label="Clients"
                component={Link}
                onMouseOver={e => { handleClientMenuOpen(e) }}
                to="/dummypath"
              ></Tab>
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
              classes={{paper:classes.menu}}
              MenuListProps={{ onMouseLeave: handleClientMenuClose }}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {clientMenuOptions.map((option, i) => (
                <MenuItem
                  key={i}
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
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={ ()=>{setActiveTab(0)} } disableRipple>
              <img className={classes.logo} src={logo} alt="Project X" />
            </Button>
            {matches? null:tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offsetDiv}/>
    </>
  )
}