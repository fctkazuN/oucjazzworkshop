import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { setFocus } from "../../state/slices/focusSlice";

import mainPhoto_1 from "../../assets/images/mainPhotos/1.jpg";
import mainPhoto_2 from "../../assets/images/mainPhotos/2.jpg";
import mainPhoto_3 from "../../assets/images/mainPhotos/3.jpg";

const useStyles = makeStyles((theme) => ({
  mainPhotos: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  mainPhotosNav: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    "& > *": {
      width: "8%",
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
}));

const mainPhotos = [mainPhoto_1, mainPhoto_2, mainPhoto_3];

const MainPhotos: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [dispMainPhotoId, setDispMainPhotoId] = useState(0);
  const [fading, setFading] = useState(false);

  const handleFocus = (name: string) => () => {
    props.setFocus(name);
  };

  // メイン画像変更管理
  const handleMainPhotoNext = () => {
    if (!fading) {
      setFading(true);
      setTimeout(() => {
        setFading(false);
        setDispMainPhotoId((prev) =>
          prev < mainPhotos.length - 1 ? prev + 1 : 0
        );
      }, 1000);
    }
  };
  const handleMainPhotoPrev = () => {
    if (!fading) {
      setFading(true);
      setTimeout(() => {
        setFading(false);
        setDispMainPhotoId((prev) =>
          1 <= prev ? prev - 1 : mainPhotos.length - 1
        );
      }, 1000);
    }
  };

  return (
    <Paper
      className={classes.mainPhotos}
      onMouseEnter={handleFocus("mainPhotos")}
      onMouseLeave={handleFocus("")}
    >
      <img
        alt="メイン写真"
        src={mainPhotos[dispMainPhotoId]}
        id="mainPhoto1"
        style={{
          height: props.sm ? 154 : 380,
          // height:
          //   window.innerWidth > window.innerHeight
          //     ? window.innerHeight * 0.5
          //     : window.innerWidth * 0.4,
          width: "100%",
          objectFit: "cover",
        }}
      />
      <img
        alt="メイン写真"
        src={
          dispMainPhotoId < mainPhotos.length - 1
            ? mainPhotos[dispMainPhotoId + 1]
            : mainPhotos[0]
        }
        id="mainPhoto2"
        style={{
          height: props.sm ? 154 : 380,
          // height:
          //   window.innerWidth > window.innerHeight
          //     ? window.innerHeight * 0.5
          //     : window.innerWidth * 0.4,
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          transition: fading ? "1s" : "0s",
          opacity: fading ? 1 : 0,
        }}
      />
      <Fade
        in={props.focus === "mainPhotos" || props.sm}
        style={{ width: "100%" }}
      >
        <div className={classes.mainPhotosNav}>
          <span className={classes.leftSpan} onClick={handleMainPhotoPrev}>
            <ChevronLeftIcon
              className={classes.photoScrollIcon}
              style={{ fontSize: props.sm ? 32 : 64 }}
            />
          </span>
          <span className={classes.rightSpan} onClick={handleMainPhotoNext}>
            <ChevronRightIcon
              className={classes.photoScrollIcon}
              style={{ fontSize: props.sm ? 32 : 64 }}
            />
          </span>
        </div>
      </Fade>
    </Paper>
  );
};

type Props = {
  sm: boolean;
  focus: string;
  setFocus: React.Dispatch<string>;
};

const mapStateProps = (state: RootState) => ({
  focus: state.focus,
});

const mapDispatchToProps = {
  setFocus,
};

export default connect(mapStateProps, mapDispatchToProps)(MainPhotos);
