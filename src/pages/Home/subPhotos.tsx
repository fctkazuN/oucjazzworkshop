import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Backdrop from "@material-ui/core/Backdrop";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";

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

const useStyles = makeStyles((theme) => ({
  subPhotos: {
    position: "relative",
    overflow: "hidden",
  },
  gridList: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
    listStyle: "none",
    // overflow: "hidden",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
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
  horizontal: {
    display: "flex",
    flexDirectiom: "row",
    // justifyContent: "flex-start",
    margin: 0,
  },
  imageHover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    opacity: 0,
    "&:hover": {
      opacity: 0.1,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  moveRight0: {
    animation: "$loop0 50s linear infinite",
  },
  moveRight1: {
    animation: "$loop1 50s linear infinite",
  },
  moveRight2: {
    animation: "$loop2 50s linear infinite",
  },
  moveRight3: {
    animation: "$loop3 50s linear infinite",
  },
  moveRight4: {
    animation: "$loop4 50s linear infinite",
  },
  moveRight5: {
    animation: "$loop5 50s linear infinite",
  },
  moveRight6: {
    animation: "$loop6 50s linear infinite",
  },
  moveRight7: {
    animation: "$loop7 50s linear infinite",
  },
  moveRight8: {
    animation: "$loop8 50s linear infinite",
  },
  moveRight9: {
    animation: "$loop9 50s linear infinite",
  },
  "@keyframes loop0": {
    "0%": {
      transform: "translateX(0%)",
    },
    to: {
      transform: "translateX(-900%)",
    },
  },
  "@keyframes loop1": {
    "0%": {
      transform: "translateX(100%)",
    },
    to: {
      transform: "translateX(-800%)",
    },
  },
  "@keyframes loop2": {
    "0%": {
      transform: "translateX(200%)",
    },
    to: {
      transform: "translateX(-700%)",
    },
  },
  "@keyframes loop3": {
    "0%": {
      transform: "translateX(300%)",
    },
    to: {
      transform: "translateX(-600%)",
    },
  },
  "@keyframes loop4": {
    "0%": {
      transform: "translateX(400%)",
    },
    to: {
      transform: "translateX(-500%)",
    },
  },
  "@keyframes loop5": {
    "0%": {
      transform: "translateX(500%)",
    },
    to: {
      transform: "translateX(-400%)",
    },
  },
  "@keyframes loop6": {
    "0%": {
      transform: "translateX(600%)",
    },
    to: {
      transform: "translateX(-300%)",
    },
  },
  "@keyframes loop7": {
    "0%": {
      transform: "translateX(700%)",
    },
    to: {
      transform: "translateX(-200%)",
    },
  },
  "@keyframes loop8": {
    "0%": {
      transform: "translateX(800%)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },
  "@keyframes loop9": {
    "0%": {
      transform: "translateX(900%)",
    },
    to: {
      transform: "translateX(0%)",
    },
  },
}));

const shuffle = () => {
  const array = [
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
  ];
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  let returnArray = [];
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(array[i]);
    if (i % 4 === 3) {
      returnArray.push(tempArray);
      tempArray = [];
    }
  }
  return returnArray;
};

const subPhotoLists = shuffle();
console.log(subPhotoLists);

/**
 *
 * @param props
 */
const SubPhotos: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [backdrop, setBackdrop] = useState({
    open: false,
    index: 0,
    i: 0,
  });
  // const [isScrolling, SetIsScrolling] = useState(false);
  // const [scrollLeft, setScrollLeft] = useState(false);

  const handleFocus = (name: string) => () => {
    props.setFocus(name);
  };

  // // サブ画像変更管理
  const handleSubPhotoNext = () => {
    setBackdrop((prev) => {
      const newI =
        prev.i >= subPhotoLists[prev.index].length - 1 ? 0 : prev.i + 1;
      const newIndex =
        newI !== 0
          ? prev.index
          : prev.index >= subPhotoLists.length - 1
          ? 0
          : prev.index + 1;
      return {
        ...prev,
        index: newIndex,
        i: newI,
      };
    });
  };
  const handleSubPhotoPrev = () => {
    setBackdrop((prev) => {
      const newI =
        prev.i <= 0 ? subPhotoLists[prev.index].length - 1 : prev.i - 1;
      const newIndex =
        prev.i > 0
          ? prev.index
          : prev.index <= 0
          ? subPhotoLists.length - 1
          : prev.index - 1;
      return {
        ...prev,
        index: newIndex,
        i: newI,
      };
    });
  };

  const handleBackdropOpen = (index: number, i: number) => () => {
    console.log(index, i);
    const newIndex = index >= subPhotoLists.length - 1 ? 0 : index;
    setBackdrop({
      open: true,
      index: newIndex,
      i,
    });
  };

  const animationClassName = (index: number) => {
    switch (index) {
      case 0:
        return classes.moveRight0;
      case 1:
        return classes.moveRight1;
      case 2:
        return classes.moveRight2;
      case 3:
        return classes.moveRight3;
      case 4:
        return classes.moveRight4;
      case 5:
        return classes.moveRight5;
      case 6:
        return classes.moveRight6;
      case 7:
        return classes.moveRight7;
      case 8:
        return classes.moveRight8;
      case 9:
        return classes.moveRight9;
      default:
        return classes.moveRight0;
    }
  };

  return (
    <React.Fragment>
      <Paper
        className={classes.subPhotos}
        style={{
          height: props.sm ? 96 : 150,
        }}
        onMouseEnter={handleFocus("subPhotos")}
        onMouseLeave={handleFocus("")}
      >
        {subPhotoLists.concat([subPhotoLists[0]]).map((subPhotoList, index) => {
          return (
            <ul
              key={index}
              className={clsx(classes.gridList, animationClassName(index))}
              style={{
                height: props.sm ? 96 : 150,
                position: "absolute",
                width: "100%",
                animationPlayState:
                  props.focus !== "subPhotos" || backdrop.open
                    ? "paused"
                    : "running",
              }}
            >
              {subPhotoList.map((img, i) => (
                <li
                  key={`${index}-${i}`}
                  style={{
                    height: "100%",
                    width: props.sm ? "50%" : "25%",
                  }}
                  onClick={handleBackdropOpen(index, i)}
                >
                  <div
                    style={{
                      height: "100%",
                      position: "relative",
                      margin: 2,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      width="100%"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                    <div className={classes.imageHover} />
                  </div>
                </li>
              ))}
            </ul>
          );
        })}
      </Paper>
      <Backdrop open={backdrop.open} className={classes.backdrop}>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%", textAlign: "right" }}>
            <IconButton
              style={{ color: "#fff", margin: 8 }}
              onClick={() => setBackdrop((prev) => ({ ...prev, open: false }))}
            >
              <CloseIcon fontSize="large" color="inherit" />
            </IconButton>
          </div>
          <div
            style={{
              height: window.innerHeight - 200,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className={classes.leftSpan} onClick={handleSubPhotoPrev}>
              <ChevronLeftIcon
                className={classes.photoScrollIcon}
                style={{ fontSize: props.sm ? 32 : 64 }}
              />
            </span>
            {backdrop.open ? (
              <img src={subPhotoLists[backdrop.index][backdrop.i]} alt="" />
            ) : null}
            <span className={classes.rightSpan} onClick={handleSubPhotoNext}>
              <ChevronRightIcon
                className={classes.photoScrollIcon}
                style={{ fontSize: props.sm ? 32 : 64 }}
              />
            </span>
          </div>
        </div>
      </Backdrop>
    </React.Fragment>
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
