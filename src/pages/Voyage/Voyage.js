import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/ParallaxSub";
import BackImg from "../../assets/img/bg4.jpg";
import Footer from "../../components/Footer/Footer";
import styles from "../../assets/jss/material-kit-react/pages/cabinCharter";

const useStyles = makeStyles(styles);

const Voyage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const intl = useIntl();

  return (
    <div>
      <Header
        brand={
          <FormattedMessage id='app.brand' defaultMessage='Uzel Yatçılık' />
        }
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={BackImg}></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h4>
            <strong>
              <FormattedMessage
                id='app.page.voyage.title'
                defaultMessage='MAVİ YOLCULUK NEDİR?'
              />
            </strong>
          </h4>

          {ReactHtmlParser(
            intl.formatMessage({ id: "app.page.voyage.content" })
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Voyage;
