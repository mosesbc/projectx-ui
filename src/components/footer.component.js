import { Grid, Hidden, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

import footerAdornment from "../assets/ad-slash.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width:"100%"
  },
  adornment: {
    width: "25em",
    verticalAlign:"bottom",
    [theme.breakpoints.down("md")]: {
      width:"21em"
    },
    [theme.breakpoints.down("xs")]: {
      width:"15em"
    }
  },
  mainContainer: {
    position:"absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration:'none'
  },
  gridItem: {
    margin:"3em"

  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right:"0.6em"
    }
  }
}))

export const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              We Live In A Society
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              Get To The Choppa
            </Grid>
            <Grid item className={classes.link}>
              I'd Rather Fight For My Life Than Live It
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Put The Bunny In The Box
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              Three years. I promise
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              Pierce Through The Heavens
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              One Day They'll Have Secrets
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Even For You Kakarot
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              A Low Possibility Means It's Not Zero
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              Who Watches The Watchmen
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Ideas Are Bulletproof
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              This Is the End, Friend
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Hidden>
      <img alt="adrment" src={footerAdornment} className={classes.adornment}></img>
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook" src={facebook} className={classes.icon}></img>
        </Grid>
        <Grid item>
          <img alt="twitter" src={twitter} className={classes.icon}></img>
        </Grid>
        <Grid item>
          <img alt="instagram" src={instagram} className={classes.icon}></img>
        </Grid>
      </Grid>
    </footer>
  )
}
