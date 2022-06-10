import React from "react";
import Carousel from "react-slick";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {
  makeStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Card from "./Card/Card";
import styles from "../assets/jss/material-kit-react/views/componentsSections/carouselStyle";

const useStyles = makeStyles(styles);

export default function SectionCarousel({ data }) {
  const classes = useStyles();
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={classes.container}>
      <Link
        style={{ color: "rgb(85, 85, 85)", fontWeight: "bold" }}
        to='/boats'
      >
        <FormattedMessage id='app.carousel.link' defaultMessage='Geri Dön' />
      </Link>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              <div>
                <img
                  src={data.photo}
                  alt='First slide'
                  className='slick-image'
                />
              </div>
              {data.gallery.map((image, i) => (
                <div key={i}>
                  <img src={image} alt='Second slide' className='slick-image' />
                </div>
              ))}
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
      <Typography variant='h4'>{data.name}</Typography>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
          <List className={classes.root}>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.category'
                    defaultMessage='Kategori'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.category ? data.category : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.harbor'
                    defaultMessage='Liman'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.harbor ? data.harbor : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.crew'
                    defaultMessage='Mürettebat'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.crew ? data.crew : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.length'
                    defaultMessage='Uzunluk'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.length ? data.length + "m" : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.width'
                    defaultMessage='Genişlik'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.width ? data.width + "m" : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.capacity'
                    defaultMessage='Kapasite'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.capacity ? data.capacity : "-"}
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
          <List className={classes.root}>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.cabin'
                    defaultMessage='Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.cabin ? data.cabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.mastercabin'
                    defaultMessage='Master Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.masterCabin ? data.masterCabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.doublecabin'
                    defaultMessage='Double Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.doubleCabin ? data.doubleCabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.triplecabin'
                    defaultMessage='Triple Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.tripleCabin ? data.tripleCabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.twincabin'
                    defaultMessage='Twin Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.twinCabin ? data.twinCabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <FormattedMessage
                    id='app.carousel.vipcabin'
                    defaultMessage='Vip Kabin'
                  />
                }
              />
              <ListItemSecondaryAction>
                {data.vipCabin ? data.vipCabin : "-"}
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </GridItem>

        <div
          style={{
            margin: "10px",
          }}
        >
          <Typography variant='h6'>
            <FormattedMessage
              id='app.carousel.price'
              defaultMessage='Fiyatlar'
            />
          </Typography>
          <strong>
            <FormattedMessage id='app.carousel.april' defaultMessage='Nisan' />
          </strong>{" "}
          {data.aprilPrice ? data.aprilPrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage id='app.carousel.may' defaultMessage='Mayıs' />
          </strong>{" "}
          {data.mayPrice ? data.mayPrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage id='app.carousel.june' defaultMessage='Haziran' />
          </strong>{" "}
          {data.junePrice ? data.junePrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage id='app.carousel.july' defaultMessage='Temmuz' />
          </strong>{" "}
          {data.julyPrice ? data.julyPrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage
              id='app.carousel.august'
              defaultMessage='Ağustos'
            />
          </strong>{" "}
          {data.augustPrice ? data.augustPrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage
              id='app.carousel.september'
              defaultMessage='Eylül'
            />
          </strong>{" "}
          {data.septemberPrice ? data.septemberPrice : "-"}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>
            <FormattedMessage id='app.carousel.october' defaultMessage='Ekim' />
          </strong>{" "}
          {data.octoberPrice ? data.octoberPrice : "-"}
          <Typography variant='body1'>
            <FormattedMessage
              id='app.carousel.currency'
              defaultMessage='*Fiyatlarımız tüm tekne için Günlük/EURO olarak belirtilmiştir.'
            />
          </Typography>
        </div>

        <div
          style={{
            margin: "10px",
          }}
        >
          <Typography variant='h6'>
            <FormattedMessage
              id='app.carousel.equipments'
              defaultMessage='Tekne Ekipmanları'
            />
          </Typography>
          <Typography variant='body2'>
            {data.equipments ? data.equipments : "-"}
          </Typography>
        </div>
        <div
          style={{
            margin: "10px",
          }}
        >
          <Typography variant='h6'>
            <FormattedMessage
              id='app.carousel.other'
              defaultMessage='Diğer Detaylar'
            />
          </Typography>
          <Typography variant='body2'>
            {data.other ? data.other : "-"}
          </Typography>
        </div>
      </GridContainer>
    </div>
  );
}
