import React from "react";
import { FormattedMessage } from "react-intl";
import classNames from "classnames";
import { makeStyles, Grid, Typography, ButtonBase } from "@material-ui/core/";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/ParallaxMain";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import BackImg from "../../assets/img/bg1.jpg";
import YatchImg from "../../assets/img/yatch.png";
import RouteImg from "../../assets/img/route.png";
import FishImg from "../../assets/img/fish.png";
import Footer from "../../components/Footer/Footer";
import styles from "../../assets/jss/material-kit-react/pages/main";

const useStyles = makeStyles(styles);

const Main = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const images = [
    {
      url: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide1' defaultMessage='Snorkeling' />,
      width: "30%",
    },
    {
      url: "https://images.unsplash.com/photo-1501714797423-c3a4ab6b37a2?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide2' defaultMessage='Dinner' />,
      width: "35%",
    },
    {
      url: "https://images.unsplash.com/photo-1414545819777-8db0ae6bc266?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide3' defaultMessage='Trekking' />,
      width: "35%",
    },
    {
      url: "https://images.unsplash.com/photo-1562791681-bd6aecadf861?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide4' defaultMessage='Fishing' />,
      width: "38%",
    },
    {
      url: "https://images.unsplash.com/photo-1578403881636-6f4a77a6f9cc?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide5' defaultMessage='Diving' />,
      width: "38%",
    },
    {
      url: "https://images.unsplash.com/photo-1463704131914-97e5aaa0e339?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide6' defaultMessage='Yoga' />,
      width: "24%",
    },
    {
      url: "https://images.unsplash.com/photo-1597175971918-76e969f42f74?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide7' defaultMessage='Paddling' />,
      width: "35%",
    },
    {
      url: "https://images.unsplash.com/photo-1519802149876-61aa4479fa8d?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide8' defaultMessage='Enjoy' />,
      width: "35%",
    },
    {
      url: "https://images.unsplash.com/photo-1474149609615-ce5628f98c80?auto=format&fit=crop&w=400&q=80",
      title: <FormattedMessage id='app.slide9' defaultMessage='Reading' />,
      width: "30%",
    },
  ];

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
      <Parallax image={BackImg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  <FormattedMessage
                    id='app.content.title'
                    defaultMessage='Neden Mavi Yolculuk Yapmalı?'
                  />
                </h1>
                <h3 className={classes.subtitle}>
                  <FormattedMessage
                    id='app.content.subtitle'
                    defaultMessage='Mavi Tur sırasında modern hayatın getirdiği tüm baskı ve sorumluluklardan uzaklaşabilirsiniz.'
                  />
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img className={classes.image} src={YatchImg} alt={YatchImg} />
                <Typography variant='h6' className={classes.gridTitle}>
                  <FormattedMessage
                    id='app.content.boats'
                    defaultMessage='EN İYİ TEKNELER'
                  />
                </Typography>
                <Typography variant='h5' className={classes.gridContent}>
                  <FormattedMessage
                    id='app.content.boats.description'
                    defaultMessage='EN İYİ TEKNELER description'
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img className={classes.image} src={RouteImg} alt={RouteImg} />
                <Typography variant='h6' className={classes.gridTitle}>
                  <FormattedMessage
                    id='app.content.routes'
                    defaultMessage='KEŞFEDİLMEMİŞ ROTALAR'
                  />
                </Typography>
                <Typography variant='h5' className={classes.gridContent}>
                  <FormattedMessage
                    id='app.content.routes.description'
                    defaultMessage='KEŞFEDİLMEMİŞ ROTALAR description'
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img className={classes.image} src={FishImg} alt={FishImg} />
                <Typography variant='h6' className={classes.gridTitle}>
                  <FormattedMessage
                    id='app.content.experiences'
                    defaultMessage='YENİ DENEYİMLER'
                  />
                </Typography>
                <Typography variant='h5' className={classes.gridContent}>
                  <FormattedMessage
                    id='app.content.experiences.description'
                    defaultMessage='YENİ DENEYİMLER description'
                  />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <div className={classes.images}>
            {images.map((image) => (
              <ButtonBase
                disableTouchRipple
                key={image.url}
                className={classes.imageWrapper}
                style={{
                  width: image.width,
                }}
              >
                <div
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  <Typography
                    component='h3'
                    variant='h6'
                    color='inherit'
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <div className={classes.imageMarked} />
                  </Typography>
                </div>
              </ButtonBase>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
