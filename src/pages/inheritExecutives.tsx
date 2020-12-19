import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

import pyuta from "../assets/images/temp/pyu.jpg";
import pashi from "../assets/images/temp/pashi.jpg";
import bene from "../assets/images/temp/bene.jpg";
import ikemen from "../assets/images/temp/ikemen.jpg";
import chai from "../assets/images/temp/chai.jpg";
import ryui from "../assets/images/temp/ryui.jpg";
import monme from "../assets/images/temp/monme.jpg";
import pashi2 from "../assets/images/temp/pashi2.jpg";

import "../components/Customs/fireworkCanvas/fireworkCanvas.scss";

import { connect } from "react-redux";
import { RootState } from "../state/store";
import {
  Member,
  setMember,
  SetMemberPayload,
} from "../state/slices/memberSlice";

import getMemberApi from "../components/Customs/getMemberApi";

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
    minWidth: theme.spacing(30),
  },
  fatDivider: {
    backgroundColor: theme.palette.primary.main,
    padding: 2,
    marginBottom: theme.spacing(2),
  },
  memberList: {
    maxWidth: theme.spacing(70),
    paddingLeft: theme.spacing(1),
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  textGradation: {
    // backgroundColor: "#fff",
    margin: "4px 0",
    background: "-webkit-linear-gradient(60deg, #f00, #FFF)", //背景色にグラデーションを指定
    WebkitBackgroundClip: "text", //テキストでくり抜く
    WebkitTextFillColor: "transparent", //くり抜いた部分は背景を表示
  },
}));

const InheritExecutivesPage: React.FC<Props> = (props) => {
  const classes = useStyles();

  useEffect(() => {
    if (!props.memberIsSet) {
      getMemberApi({
        success: props.setMember,
        failure: () => {
          console.log("failure");
        },
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id="InheritExecutives" className="canvas">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="members" xs={12}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              ４役交代
            </Typography>
            <Divider
              variant="fullWidth"
              className={classes.fatDivider}
              style={{ width: "50%" }}
            />
            <div style={{ textAlign: "center" }}>
              <div>
                <h1 className={classes.textGradation}>部長： 久保田 花梨</h1>
                <img src={pyuta} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>副部長： 若林 佑太郎</h1>
                <img src={pashi} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>会計： 大島 菜瑚</h1>
                <img src={bene} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>PA隊長： 長井 颯冬</h1>
                <img src={ikemen} alt="" width="60%" />
              </div>
              <h1
                style={{
                  fontFamily: "Impact",
                  fontSize: 40,
                }}
              >
                1年間お疲れ様でした！！！！！！！！！
              </h1>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <br />
              <h1
                style={{
                  fontFamily: "Impact",
                  fontSize: 40,
                }}
              >
                そして...
              </h1>
              <br />
              <h1
                style={{
                  fontFamily: "Impact",
                  fontSize: 40,
                }}
              >
                そしてこれから１年よろしく！！！！！！！！
              </h1>
              <div>
                <h1 className={classes.textGradation}>
                  新部長： {props.member["４役"].部長.name}
                </h1>
                <img src={chai} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>
                  新副部長： {props.member["４役"].副部長.name}
                </h1>
                <img src={ryui} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>
                  新会計： {props.member["４役"].会計.name}
                </h1>
                <img src={monme} alt="" width="60%" />
              </div>
              <div>
                <h1 className={classes.textGradation}>
                  新PA隊長： {props.member["４役"].PA隊長.name}
                </h1>
                <img src={pashi2} alt="" width="60%" />
              </div>
              <h1
                style={{
                  fontFamily: "Impact",
                  fontSize: 40,
                }}
              >
                大変な時期だけど
                <br />
                みんなで乗り越えていこう！！
              </h1>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

type Props = {
  memberIsSet: boolean;
  member: Member;
  setMember: React.Dispatch<SetMemberPayload>;
};

const mapStateProps = (state: RootState) => ({
  memberIsSet: state.member.set,
  member: state.member.member,
});

const mapDispatchToProps = {
  setMember,
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(InheritExecutivesPage);
