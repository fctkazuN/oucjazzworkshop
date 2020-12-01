import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Fade from "@material-ui/core/Fade";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { setFocus } from "../../state/slices/focusSlice";

import subPhoto_1 from "../../assets/images/subPhotos/1.jpg";
import subPhoto_2 from "../../assets/images/subPhotos/2.jpg";
import subPhoto_3 from "../../assets/images/subPhotos/3.jpg";
import subPhoto_4 from "../../assets/images/subPhotos/4.jpg";
import subPhoto_5 from "../../assets/images/subPhotos/5.jpg";
import subPhoto_6 from "../../assets/images/subPhotos/6.jpg";
import subPhoto_7 from "../../assets/images/subPhotos/7.jpg";
import subPhoto_8 from "../../assets/images/subPhotos/8.jpg";
import subPhoto_9 from "../../assets/images/subPhotos/9.jpg";
import subPhoto_10 from "../../assets/images/subPhotos/10.jpg";
import subPhoto_11 from "../../assets/images/subPhotos/11.jpg";
import subPhoto_12 from "../../assets/images/subPhotos/12.jpg";
import subPhoto_13 from "../../assets/images/subPhotos/13.jpg";
import subPhoto_14 from "../../assets/images/subPhotos/14.jpg";
import subPhoto_15 from "../../assets/images/subPhotos/15.jpg";
import subPhoto_16 from "../../assets/images/subPhotos/16.jpg";
import subPhoto_17 from "../../assets/images/subPhotos/17.jpg";
import subPhoto_18 from "../../assets/images/subPhotos/18.jpg";
import subPhoto_19 from "../../assets/images/subPhotos/19.jpg";
import subPhoto_20 from "../../assets/images/subPhotos/20.jpg";
import subPhoto_21 from "../../assets/images/subPhotos/21.jpg";
import subPhoto_22 from "../../assets/images/subPhotos/22.jpg";
import subPhoto_23 from "../../assets/images/subPhotos/23.jpg";
import subPhoto_24 from "../../assets/images/subPhotos/24.jpg";
import subPhoto_25 from "../../assets/images/subPhotos/25.jpg";
import subPhoto_26 from "../../assets/images/subPhotos/26.jpg";
import subPhoto_27 from "../../assets/images/subPhotos/27.jpg";
import subPhoto_28 from "../../assets/images/subPhotos/28.jpg";
import subPhoto_29 from "../../assets/images/subPhotos/29.jpg";
import subPhoto_30 from "../../assets/images/subPhotos/30.jpg";
import subPhoto_31 from "../../assets/images/subPhotos/31.jpg";
import subPhoto_32 from "../../assets/images/subPhotos/32.jpg";
import subPhoto_33 from "../../assets/images/subPhotos/33.jpg";
import subPhoto_34 from "../../assets/images/subPhotos/34.jpg";
import subPhoto_35 from "../../assets/images/subPhotos/35.jpg";
import subPhoto_36 from "../../assets/images/subPhotos/36.jpg";
import subPhoto_37 from "../../assets/images/subPhotos/37.jpg";
import subPhoto_38 from "../../assets/images/subPhotos/38.jpg";
import subPhoto_39 from "../../assets/images/subPhotos/39.jpg";
import subPhoto_40 from "../../assets/images/subPhotos/40.jpg";

const useStyles = makeStyles((theme) => ({
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

const subPhotoList = [
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

const SubPhotos: React.FC<Props> = (props) => {
  const classes = useStyles();

  const handleFocus = (name: string) => () => {
    props.setFocus(name);
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
      if (elem.clientWidth < elem.scrollLeft + 10) {
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
        cols={props.sm ? 4 : 2}
        className={classes.gridList}
        style={{
          height:
            window.innerWidth > window.innerHeight
              ? window.innerHeight * 0.2
              : window.innerWidth * 0.3,
        }}
      >
        {subPhotoList.map((img, index) => (
          <GridListTile key={index}>
            <img src={img} alt={"photo_" + index} />
          </GridListTile>
        ))}
      </GridList>

      <Fade in={props.focus === "subPhotos"}>
        <div className={classes.subPhotoRotate}>
          <span className={classes.leftSpan} onClick={handleSubPhotoPrev}>
            <ChevronLeftIcon
              className={classes.photoScrollIcon}
              style={{ fontSize: props.sm ? 64 : 32 }}
            />
          </span>
          <span className={classes.rightSpan} onClick={handleSubPhotoNext}>
            <ChevronRightIcon
              className={classes.photoScrollIcon}
              style={{ fontSize: props.sm ? 64 : 32 }}
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

export default connect(mapStateProps, mapDispatchToProps)(SubPhotos);
