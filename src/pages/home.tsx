import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Fade from "@material-ui/core/Fade";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import mainPhoto_1 from "../assets/images/mainPhotos/1.jpg";
import mainPhoto_2 from "../assets/images/mainPhotos/2.jpg";
import mainPhoto_3 from "../assets/images/mainPhotos/3.jpg";
import subPhoto_1 from "../assets/images/subPhotos/1.jpg";
import subPhoto_2 from "../assets/images/subPhotos/2.jpg";
import subPhoto_3 from "../assets/images/subPhotos/3.jpg";
import subPhoto_4 from "../assets/images/subPhotos/4.jpg";
import subPhoto_5 from "../assets/images/subPhotos/5.jpg";
import subPhoto_6 from "../assets/images/subPhotos/6.jpg";
import subPhoto_7 from "../assets/images/subPhotos/7.jpg";
import subPhoto_8 from "../assets/images/subPhotos/8.jpg";
import subPhoto_9 from "../assets/images/subPhotos/9.jpg";
import subPhoto_10 from "../assets/images/subPhotos/10.jpg";
import subPhoto_11 from "../assets/images/subPhotos/11.jpg";
import subPhoto_12 from "../assets/images/subPhotos/12.jpg";
import subPhoto_13 from "../assets/images/subPhotos/13.jpg";
import subPhoto_14 from "../assets/images/subPhotos/14.jpg";
import subPhoto_15 from "../assets/images/subPhotos/15.jpg";
import subPhoto_16 from "../assets/images/subPhotos/16.jpg";
import subPhoto_17 from "../assets/images/subPhotos/17.jpg";
import subPhoto_18 from "../assets/images/subPhotos/18.jpg";
import subPhoto_19 from "../assets/images/subPhotos/19.jpg";
import subPhoto_20 from "../assets/images/subPhotos/20.jpg";
import subPhoto_21 from "../assets/images/subPhotos/21.jpg";
import subPhoto_22 from "../assets/images/subPhotos/22.jpg";
import subPhoto_23 from "../assets/images/subPhotos/23.jpg";
import subPhoto_24 from "../assets/images/subPhotos/24.jpg";
import subPhoto_25 from "../assets/images/subPhotos/25.jpg";
import subPhoto_26 from "../assets/images/subPhotos/26.jpg";
import subPhoto_27 from "../assets/images/subPhotos/27.jpg";
import subPhoto_28 from "../assets/images/subPhotos/28.jpg";
import subPhoto_29 from "../assets/images/subPhotos/29.jpg";
import subPhoto_30 from "../assets/images/subPhotos/30.jpg";
import subPhoto_31 from "../assets/images/subPhotos/31.jpg";
import subPhoto_32 from "../assets/images/subPhotos/32.jpg";
import subPhoto_33 from "../assets/images/subPhotos/33.jpg";
import subPhoto_34 from "../assets/images/subPhotos/34.jpg";
import subPhoto_35 from "../assets/images/subPhotos/35.jpg";
import subPhoto_36 from "../assets/images/subPhotos/36.jpg";
import subPhoto_37 from "../assets/images/subPhotos/37.jpg";
import subPhoto_38 from "../assets/images/subPhotos/38.jpg";
import subPhoto_39 from "../assets/images/subPhotos/39.jpg";
import subPhoto_40 from "../assets/images/subPhotos/40.jpg";
import { Link } from "react-router-dom";

const mainPhotos = [mainPhoto_1, mainPhoto_2, mainPhoto_3];

const subPhotos = [
  subPhoto_1,
  subPhoto_2,
  subPhoto_3,
  subPhoto_4,
  subPhoto_5,
  subPhoto_6,
  subPhoto_7,
  subPhoto_8,
  subPhoto_9,
  subPhoto_10,
  subPhoto_11,
  subPhoto_12,
  subPhoto_13,
  subPhoto_14,
  subPhoto_15,
  subPhoto_16,
  subPhoto_17,
  subPhoto_18,
  subPhoto_19,
  subPhoto_20,
  subPhoto_21,
  subPhoto_22,
  subPhoto_23,
  subPhoto_24,
  subPhoto_25,
  subPhoto_26,
  subPhoto_27,
  subPhoto_28,
  subPhoto_29,
  subPhoto_30,
  subPhoto_31,
  subPhoto_32,
  subPhoto_33,
  subPhoto_34,
  subPhoto_35,
  subPhoto_36,
  subPhoto_37,
  subPhoto_38,
  subPhoto_39,
  subPhoto_40,
];

const useStyles = makeStyles((theme) => ({
  fontColor: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  subTitle: {
    fontWeight: "bold",
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
      width: "8%",
      // "&:hover": {
      //   backgroundColor: "rgba(255,255,255,0.1)",
      // },
    },
  },
  photo: {
    borderRadius: 10,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  leftSpan: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    pointerEvents: "auto",
  },
  rightSpan: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    pointerEvents: "auto",
  },
  photoScrollIcon: {
    // fontSize: 32,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: "#fff",
    },
  },
  subPhotos: {
    display: "flex",
    position: "relative",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    margin: theme.spacing(0, 5),
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflow: "hidden",
  },
  subPhotoRotate: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    pointerEvents: "none",
  },
  fatDivider: {
    padding: 2,
    backgroundColor: theme.palette.primary.main,
    width: "50%",
  },
  dottedDivider: {
    border: 0,
    borderTop: 2,
    borderStyle: "dotted",
    borderColor: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
  welcomeText: {
    fontSize: "14px",
  },
  multiline: {
    whiteSpace: "pre-line",
  },
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();
  const [focus, setFocus] = useState<string>("");
  const isLarge = useMediaQuery("(min-width:600px)");
  const [dispMainPhotoId, setDispMainPhotoId] = useState(0);
  const [intervalId, setIntervalId] = useState<any>();

  // マウスフォーカス管理
  const handleFocus = (name = "") => () => {
    setFocus(name);
  };

  // メイン画像変更管理
  const handleMainPhotoNext = () => {
    setDispMainPhotoId((prev) => (prev < mainPhotos.length - 1 ? prev + 1 : 0));
  };
  const handleMainPhotoPrev = () => {
    setDispMainPhotoId((prev) =>
      1 <= prev ? prev - 1 : mainPhotos.length - 1
    );
  };

  // サブ画像変更管理
  const handleSubPhotoNext = () => {
    const elem = document.getElementById("subPhoto-gridList");
    if (elem) {
      if (elem.scrollLeft <= elem.scrollWidth - elem.clientWidth - 10) {
        elem.scrollBy({ top: 0, left: elem.clientWidth, behavior: "smooth" });
      } else {
        elem.scroll({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };
  const handleSubPhotoPrev = () => {
    const elem = document.getElementById("subPhoto-gridList");
    if (elem) {
      if (elem.clientWidth <= elem.scrollLeft) {
        elem.scrollBy({ top: 0, left: -elem.clientWidth, behavior: "smooth" });
      } else {
        elem.scroll({
          top: 0,
          left: elem.scrollWidth - elem.clientWidth,
          behavior: "smooth",
        });
      }
    }
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
                backgroundImage: `url(${mainPhotos[dispMainPhotoId]})`,
              }}
            >
              <Fade in={focus === "mainPhotos" || !isLarge}>
                <div className={classes.mainPhotosNav}>
                  <span
                    className={classes.leftSpan}
                    onClick={handleMainPhotoPrev}
                  >
                    <ChevronLeftIcon
                      className={classes.photoScrollIcon}
                      style={{ fontSize: isLarge ? 64 : 32 }}
                    />
                  </span>
                  <span
                    className={classes.rightSpan}
                    onClick={handleMainPhotoNext}
                  >
                    <ChevronRightIcon
                      className={classes.photoScrollIcon}
                      style={{ fontSize: isLarge ? 64 : 32 }}
                    />
                  </span>
                </div>
              </Fade>
            </div>
          </Paper>
        </Grid>

        {/* TODO サイズ感が難しい 保留 */}
        <Grid item id="subPhotos" xs={12}>
          <Paper
            className={classes.subPhotos}
            style={{
              height:
                window.innerWidth > window.innerHeight
                  ? window.innerHeight * 0.2
                  : window.innerWidth * 0.3,
            }}
            onMouseEnter={handleFocus("subPhotos")}
            onMouseLeave={handleFocus("")}
          >
            <GridList
              id="subPhoto-gridList"
              cols={isLarge ? 4 : 2}
              className={classes.gridList}
              style={{
                height:
                  window.innerWidth > window.innerHeight
                    ? window.innerHeight * 0.2
                    : window.innerWidth * 0.3,
              }}
            >
              {subPhotos.map((img, index) => (
                <GridListTile key={img}>
                  <img src={img} alt={"photo_" + index} />
                </GridListTile>
              ))}
            </GridList>
            {focus === "subPhotos" ? (
              <div className={classes.subPhotoRotate}>
                <span className={classes.leftSpan} onClick={handleSubPhotoPrev}>
                  <ChevronLeftIcon
                    className={classes.photoScrollIcon}
                    style={{ fontSize: isLarge ? 64 : 32 }}
                  />
                </span>
                <span
                  className={classes.rightSpan}
                  onClick={handleSubPhotoNext}
                >
                  <ChevronRightIcon
                    className={classes.photoScrollIcon}
                    style={{ fontSize: isLarge ? 64 : 32 }}
                  />
                </span>
              </div>
            ) : null}
          </Paper>
        </Grid>
        <Grid item id="updates" xs={12} sm={8}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Infomation
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle2" className={classes.multiline}>
                {
                  "小樽商科大学ジャズ研究会のホームページにようこそ！\n商大ジャズ研では毎週火曜日に行われている定期セッションに加え、札幌、小樽市内を中心にライブ活動をさせて頂いています。その他にも学校祭出店、夏合宿、定期演奏会など楽しいイベントが盛り沢山です！\nまた、道内他大学のジャズ研との交流も深く一緒にライブ活動などを行っています。\n入部希望、また演奏依頼などありましたらこちらのフォームからお気軽にお問い合わせください。"
                }
              </Typography>
            </div>
            <Divider variant="fullWidth" className={classes.dottedDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle1" className={classes.subTitle}>
                What's New ?
              </Typography>
              <List disablePadding>
                {[{ date: "20.12.1", text: "ホームページリニューアル" }].map(
                  (row) => (
                    <ListItem dense>
                      <Typography
                        align="left"
                        variant="subtitle2"
                        style={{ minWidth: 80 }}
                      >
                        {row.date}
                      </Typography>
                      <Typography align="left" variant="subtitle2">
                        {row.text}
                      </Typography>
                    </ListItem>
                  )
                )}
              </List>
            </div>
          </Paper>
        </Grid>
        <Grid item id="twitter" xs={12} sm={4}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>ついった</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="events" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Event
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle1" className={classes.multiline}>
                {"直近のイベントはありません"}
              </Typography>
            </div>
            <Divider variant="fullWidth" className={classes.dottedDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle2" className={classes.multiline}>
                その他個人のライブなどの情報は
                <Link to="/schedule/" style={{ color: "#fff" }}>
                  Schedule
                </Link>
                をご確認ください。
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item id="news" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              News
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle1">
                {"定期演奏会の中止について"}
              </Typography>
              <Typography variant="subtitle2" className={classes.multiline}>
                {
                  "12月に開催を予定しておりました第40回小樽商科大学jazz研究会定期演奏会は、北海道における新型コロナウイルス感染症の現在の状況を考慮し、感染拡大防止のため、やむなく中止を決定いたしました。\n\n​何卒ご理解のほどよろしくお願い申し上げます。"
                }
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;
