import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { setFocus } from "../../state/slices/focusSlice";

import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import mainPhoto_1 from "../../assets/images/mainPhotos/1.jpg";
import mainPhoto_2 from "../../assets/images/mainPhotos/2.jpg";
import mainPhoto_3 from "../../assets/images/mainPhotos/3.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

  const handleFocus = (name: string) => () => {
    props.setFocus(name);
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

  return (
    <Paper
      className={classes.mainPhotos}
      onMouseEnter={handleFocus("mainPhotos")}
      onMouseLeave={handleFocus("")}
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
        <Fade in={props.focus === "mainPhotos" || !props.sm}>
          <div className={classes.mainPhotosNav}>
            <span className={classes.leftSpan} onClick={handleMainPhotoPrev}>
              <ChevronLeftIcon
                className={classes.photoScrollIcon}
                style={{ fontSize: props.sm ? 64 : 32 }}
              />
            </span>
            <span className={classes.rightSpan} onClick={handleMainPhotoNext}>
              <ChevronRightIcon
                className={classes.photoScrollIcon}
                style={{ fontSize: props.sm ? 64 : 32 }}
              />
            </span>
          </div>
        </Fade>
      </div>
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
