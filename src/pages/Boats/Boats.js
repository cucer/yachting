import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import classNames from "classnames";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/ParallaxSub";
import BackImg from "../../assets/img/bg4.jpg";
import Footer from "../../components/Footer/Footer";
import { dataUS } from "../../assets/data/boatsUS";
import { dataTR } from "../../assets/data/boatsTR";
import { Context } from "../../components/Wrapper";
import styles from "../../assets/jss/material-kit-react/pages/boats";

const useStyles = makeStyles(styles);

const Boats = (props) => {
  const classes = useStyles();
  const context = useContext(Context);
  const { ...rest } = props;
  const intl = useIntl();
  let translatedData = [];
  let filteredData = [];

  if (
    context.locale === "tr-TR" ||
    context.locale === "tr-tr" ||
    context.locale === "tr" ||
    context.locale === "TR"
  ) {
    translatedData = dataTR;
  } else if (
    context.locale === "en-US" ||
    context.locale === "en-us" ||
    context.locale === "en" ||
    context.locale === "EN"
  ) {
    translatedData = dataUS;
  }

  const [searchInput, setSearchInput] = useState("");
  const itemsPerPage = 24;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeSearch = (event) => {
    if (event.target.validity.valid) {
      setSearchInput(event.target.value);
    }
  };

  const getFilteredData = (data, searchInput) => {
    return (
      data.filter((d) =>
        searchInput !== ""
          ? (d.name &&
              d.name.toLowerCase().includes(searchInput.toLowerCase())) ||
            (d.harbor &&
              d.harbor.toLowerCase().includes(searchInput.toLowerCase()))
          : //   ||
            // (d.cabin && d.cabin.toString().includes(searchInput.toString()))
            true
      ) || []
    );
  };

  filteredData = getFilteredData(translatedData, searchInput);

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
          <div className={classes.search}>
            <Grid container spacing={1} alignItems='flex-end'>
              <TextField
                onChange={handleChangeSearch}
                style={{ margin: 8, color: "#3f51b5", textColor: "#3f51b5" }}
                placeholder={intl.formatMessage({
                  id: "app.boats.search",
                })}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon className={classes.searchIcon} />
                    </InputAdornment>
                  ),
                  className: classes.searchInput,
                }}
              />
            </Grid>
          </div>
        </div>

        <div className={classes.container}>
          <Grid container spacing={4}>
            {filteredData
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <Link to={`/boats/` + card.id} className={classes.link}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.photo}
                        title={card.name}
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {card.name}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>

        <div className={classes.container}>
          <Box component='span'>
            <Pagination
              count={Math.ceil(filteredData.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color='primary'
              size='small'
              showFirstButton
              showLastButton
              classes={{ ul: classes.paginator }}
              shape='rounded'
            />
          </Box>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Boats;
