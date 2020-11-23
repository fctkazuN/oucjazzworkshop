import React, { useState } from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import Fade from "@material-ui/core/Fade";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import mainPhoto_1 from "../assets/images/mainPhotos/1.jpg";
import mainPhoto_2 from "../assets/images/mainPhotos/2.jpg";
// import mainPhoto_3 from "../assets/images/mainPhotos/3.jpg"
const mainPhotos = [mainPhoto_1, mainPhoto_2];

const useStyles = makeStyles((theme) => ({
  fontColor: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  parentGrid: {
    marginTop: theme.spacing(2),
  },
  content1: {
    padding: theme.spacing(2),
  },
  mainPhotos: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainPhotosNav: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      display: "flex",
      alignItems: "center",
      height: "100%",
      width: "8%",
      // "&:hover": {
      //   backgroundColor: "rgba(255,255,255,0.1)",
      // },
    },
  },
  photo: {
    borderRadius: 10,
    backgroundPositionX: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  leftSpan: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightSpan: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  photoScrollIcon: {
    fontSize: theme.spacing(10),
    color: theme.palette.text.secondary,
    "&:hover": {
      color: "#fff",
    },
  },
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();
  const [focus, setFocus] = useState<string>("");
  const isLarge = useMediaQuery("(min-width:600px)");
  const [dispPhotoId, setDispPhotoId] = useState(0);

  // マウスフォーカス管理
  const handleFocus = (name = "") => () => {
    setFocus(name);
  };

  // メイン画像変更管理
  const handleMainPhotoNext = () => {
    setDispPhotoId((prev) => (prev < mainPhotos.length - 1 ? prev + 1 : 0));
  };
  const handleMainPhotoPrev = () => {
    setDispPhotoId((prev) => (1 < prev ? prev - 1 : mainPhotos.length - 1));
  };

  return (
    <div id="Home">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="mainPhotos" xs={12}>
          <Paper
            className={classes.mainPhotos}
            onMouseEnter={handleFocus("mainPhotos")}
            onMouseLeave={handleFocus()}
          >
            <div
              id="photo"
              className={classes.photo}
              style={{
                height:
                  window.innerWidth > window.innerHeight
                    ? window.innerHeight * 0.5
                    : window.innerWidth * 0.4,
                width: "100%",
                backgroundImage: `url(${mainPhotos[dispPhotoId]})`,
              }}
            >
              <Fade in={focus === "mainPhotos" || !isLarge}>
                <div className={classes.mainPhotosNav}>
                  <span
                    className={classes.leftSpan}
                    onClick={handleMainPhotoPrev}
                  >
                    <ChevronLeftIcon className={classes.photoScrollIcon} />
                  </span>
                  <span
                    className={classes.rightSpan}
                    onClick={handleMainPhotoNext}
                  >
                    <ChevronRightIcon className={classes.photoScrollIcon} />
                  </span>
                </div>
              </Fade>
            </div>
          </Paper>
        </Grid>
        <Grid item id="subPhotos" xs={12}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>サブ写真</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="updates" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>
              あいさつと更新履歴
            </Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="twitter" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>ついった</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="events" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>イベント</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="news" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>ニュース</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;
