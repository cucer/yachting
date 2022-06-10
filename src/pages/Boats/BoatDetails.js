import React, { useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/ParallaxSub";
import BackImg from "../../assets/img/bg4.jpg";
import Footer from "../../components/Footer/Footer";
import { dataUS } from "../../assets/data/boatsUS";
import { dataTR } from "../../assets/data/boatsTR";
import { Context } from "../../components/Wrapper";
import SectionCarousel from "../../components/SectionCarousel";
import styles from "../../assets/jss/material-kit-react/pages/boatDetails";

const useStyles = makeStyles(styles);

const BoatDetails = (props) => {
  const { id } = useParams();
  const classes = useStyles();
  const context = useContext(Context);
  const { ...rest } = props;
  let translatedData = [];

  if (
    context.locale === "tr-TR" ||
    context.locale === "tr-tr" ||
    context.locale === "tr" ||
    context.locale === "TR"
  ) {
    translatedData = dataTR.filter((d) => d.id === parseInt(id));
  } else if (
    context.locale === "en-US" ||
    context.locale === "en-us" ||
    context.locale === "en" ||
    context.locale === "EN"
  ) {
    translatedData = dataUS.filter((d) => d.id === parseInt(id));
  }

  return (
    <>
      {translatedData.length === 0 ? (
        <Redirect to='/404' />
      ) : (
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
              <SectionCarousel data={translatedData[0]} />
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default BoatDetails;
