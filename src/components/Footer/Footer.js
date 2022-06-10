/*eslint-disable*/
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const intl = useIntl();
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to='/about' className={classes.block}>
                <FormattedMessage
                  id='app.footer.about'
                  defaultMessage='Hakkımızda'
                />
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to='/contact' className={classes.block}>
                <FormattedMessage
                  id='app.footer.contact'
                  defaultMessage='İletişim'
                />
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; 2015{" "}
          {intl.formatMessage({
            id: "app.footer.copyright",
          })}
          ,{" "}
          {intl.formatMessage({
            id: "app.footer.by",
          })}{" "}
          <a
            href='https://cagatayucer.com'
            className={classes.a}
            target='_blank'
          >
            cgty
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
