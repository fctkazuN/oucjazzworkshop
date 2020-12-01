import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { connect } from "react-redux";
import { RootState } from "../state/store";
import {
  Member,
  setMember,
  SetMemberPayload,
  levels,
  MemberType,
} from "../state/slices/memberSlice";

import getMemberApi from "../components/Customs/getMemberApi";
import { Link } from "react-router-dom";

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
}));

const MemberPage: React.FC<Props> = (props) => {
  const classes = useStyles();

  const createMemberList = (members: MemberType[]) => {
    return members.map((m) => (
      <ListItem key={m.name} className={classes.spaceBetween}>
        <span>{m.name}</span>
        <span>
          {m.inst}
          {m.role ? ", " + m.role : null}
        </span>
      </ListItem>
    ));
  };

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
    <div id="Member">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="members" xs={12}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Member
            </Typography>
            <Divider
              variant="fullWidth"
              className={classes.fatDivider}
              style={{ width: "50%" }}
            />
            <List className={classes.memberList}>
              {props.memberIsSet
                ? levels.map((level) => (
                    <React.Fragment key={level}>
                      <div id="memberLevelTitle" className={classes.horizontal}>
                        <Typography variant="h5">{level}</Typography>
                        {level !== "４役" && props.member[level].memo.length ? (
                          <Typography variant="body2">
                            （{props.member[level].memo.join(",")}を除く）
                          </Typography>
                        ) : null}
                      </div>
                      <List>
                        {level === "４役" ? (
                          <React.Fragment>
                            <ListItem className={classes.spaceBetween}>
                              <span>{props.member[level].部長.name}</span>
                              <span>
                                {props.member[level].部長.inst}
                                {props.member[level].部長.role
                                  ? ", " + props.member[level].部長.role
                                  : null}
                              </span>
                            </ListItem>
                            <ListItem className={classes.spaceBetween}>
                              <span>{props.member[level].副部長.name}</span>
                              <span>
                                {props.member[level].副部長.inst}
                                {props.member[level].副部長.role
                                  ? ", " + props.member[level].副部長.role
                                  : null}
                              </span>
                            </ListItem>
                            <ListItem className={classes.spaceBetween}>
                              <span>{props.member[level].会計.name}</span>
                              <span>
                                {props.member[level].会計.inst}
                                {props.member[level].会計.role
                                  ? ", " + props.member[level].会計.role
                                  : null}
                              </span>
                            </ListItem>
                            <ListItem className={classes.spaceBetween}>
                              <span>{props.member[level].PA隊長.name}</span>
                              <span>
                                {props.member[level].PA隊長.inst}
                                {props.member[level].PA隊長.role
                                  ? ", " + props.member[level].PA隊長.role
                                  : null}
                              </span>
                            </ListItem>
                          </React.Fragment>
                        ) : (
                          createMemberList(props.member[level].member)
                        )}
                      </List>
                      {level !== "１年生" ? (
                        <Divider
                          variant="fullWidth"
                          className={classes.fatDivider}
                        />
                      ) : null}
                    </React.Fragment>
                  ))
                : null}
              <br />
              <Typography>
                新型コロナウイルスの感染拡大防止のため当面の間新入生の勧誘ができませんが、再開後多くの新入生の入部をお待ちしております。
              </Typography>
              <br />
              <Typography variant="h6">
                いつでも大歓迎！
                <Link to="/contact/" className={classes.fontColor}>
                  入部希望はこちらから！
                </Link>
              </Typography>
            </List>
          </Paper>
        </Grid>
      </Grid>
      <br />
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

export default connect(mapStateProps, mapDispatchToProps)(MemberPage);
