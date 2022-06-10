/*eslint-disable*/
import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import PoolIcon from "@material-ui/icons/Pool";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "../CustomButtons/Button";
import { Context } from "../Wrapper";
import enLogo from "../../assets/img/EN.png";
import trLogo from "../../assets/img/TR.png";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  const context = useContext(Context);

  let contextLang;
  if (
    context.locale === "tr-TR" ||
    context.locale === "tr-tr" ||
    context.locale === "tr" ||
    context.locale === "TR"
  ) {
    contextLang = "tr-TR";
  } else if (
    context.locale === "en-US" ||
    context.locale === "en-us" ||
    context.locale === "en" ||
    context.locale === "EN"
  ) {
    contextLang = "en-US";
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color='transparent' className={classes.navLink}>
          <Link to='/boats' className={classes.link}>
            <DirectionsBoatIcon className={classes.icons} />{" "}
            <FormattedMessage
              id='app.header.fleet'
              defaultMessage='Teknelerimiz'
            />
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button color='transparent' className={classes.navLink}>
          <Link to='/voyage' className={classes.link}>
            <PoolIcon className={classes.icons} />{" "}
            <FormattedMessage
              id='app.header.voyage'
              defaultMessage='Mavi yolculuk nedir'
            />
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title={
            <FormattedMessage
              id='app.header.facebook'
              defaultMessage='Facebook ta takip edin'
            />
          }
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.facebook.com/uzelyatcilik'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-tooltip'
          title={
            <FormattedMessage
              id='app.header.instagram'
              defaultMessage='Instagram da takip edin'
            />
          }
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color='transparent'
            href='https://www.instagram.com/uzelyachting/'
            target='_blank'
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Select
          disableUnderline
          className={classes.selectLanguage}
          value={contextLang}
          onChange={context.selectLang}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          <MenuItem value='tr-TR'>
            <img src={trLogo} alt='Turkish Logo' />
            &nbsp; TR
          </MenuItem>
          <MenuItem value='en-US'>
            <img src={enLogo} alt='English Logo' />
            &nbsp; EN
          </MenuItem>
        </Select>
      </ListItem>
    </List>
  );
}
