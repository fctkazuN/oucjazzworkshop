import React, { useEffect } from "react";
import dayjs from "dayjs";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { EventType, setEvents } from "../../state/slices/eventsSlice";

import getSchedule from "../../components/Customs/getScheduleApi";

const useStyles = makeStyles((theme) => ({
  content1: {
    padding: theme.spacing(2),
  },
  subTitle: {
    fontWeight: "bold",
  },
  fatDivider: {
    padding: 2,
    backgroundColor: theme.palette.primary.main,
    width: "50%",
  },
  eventListItemAction: {
    top: "0%",
  },
  dottedDivider: {
    border: 0,
    borderTop: 2,
    borderStyle: "dotted",
    borderColor: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
  multiline: {
    whiteSpace: "pre-line",
  },
}));

// ホーム画面のイベントに表示したい大イベント名のリスト
// イベント欄に表示したいものを適宜追加
const bigEventList = ["新歓ライブ", "緑丘祭", "定期演奏会", "４役交代式"];

const EventComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  // 大イベントの有無をチェックする関数
  const eventCheck = () => {
    // return true;
    // イベントの中に大イベントがあればtrueを返す
    for (let i = 0; i < props.events.length; i++) {
      for (let j = 0; j < bigEventList.length; j++) {
        // イベント名に大イベントのキーワードが入っているか
        if (props.events[i].title.match(RegExp(bigEventList[j]))) {
          return true;
        }
      }
    }
  };

  const handleLinkEventPage = (slug: string) => () => {
    history.push(slug);
  };

  // 最初に開いた一度だけ動く
  useEffect(() => {
    if (!props.events.length) {
      // GASと通信してイベント情報を取得する
      getSchedule({
        success: (resp: EventType[]) => {
          props.setEvents(resp);
        },
        failure: (resp: any) => {
          console.log(resp);
        },
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Paper className={classes.content1}>
      <Typography variant="h6" className={classes.subTitle}>
        Event
      </Typography>
      <Divider variant="fullWidth" className={classes.fatDivider} />
      <div>
        {props.events.length && eventCheck() ? (
          <List>
            {props.events
              .filter((event) =>
                bigEventList.some((bigEvent) =>
                  event.title.match(RegExp(bigEvent))
                )
              )
              .map((event, index) => (
                <ListItem key={index} dense>
                  <ListItemText
                    primary={event.title}
                    primaryTypographyProps={{ variant: "h6" }}
                    secondary={
                      <span className={classes.multiline}>
                        <Typography variant="inherit">
                          {dayjs(event.start).format("YY/M/D H:mm～")}
                        </Typography>
                        {"\n"}
                        <Typography variant="inherit">
                          {"@" + event.location}
                        </Typography>
                      </span>
                    }
                  />
                  {event.description.match(/\/\w*\//) ? (
                    <ListItemSecondaryAction style={{ top: "25%" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLinkEventPage(event.description)}
                      >
                        詳細へ
                      </Button>
                    </ListItemSecondaryAction>
                  ) : null}
                </ListItem>
              ))}
          </List>
        ) : (
          <div className={classes.content1}>
            <Typography variant="subtitle1">
              {"直近のイベントはありません"}
            </Typography>
          </div>
        )}
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
  );
};

type Props = {
  events: EventType[];
  setEvents: React.Dispatch<EventType[]>;
};

const mapStateProps = (state: RootState) => ({
  events: state.events.events,
});

const mapDispatchToProps = {
  setEvents,
};

export default connect(mapStateProps, mapDispatchToProps)(EventComponent);
