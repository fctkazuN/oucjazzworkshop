import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { connect } from "react-redux";
import { RootState } from "../../state/store";
import { EventType, setEvents } from "../../state/slices/eventsSlice";

import getSchedule from "../../components/Customs/getScheduleApi";
import ScheduleLg from "./scheduleLg";
import ScheduleSm from "./scheduleSm";

const useStyles = makeStyles((theme) => ({
  fontColor: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  content1: {
    padding: theme.spacing(2),
  },
  subTitle: {
    fontWeight: "bold",
  },
  parentGrid: {
    marginTop: theme.spacing(2),
  },
  fatDivider: {
    padding: 2,
    backgroundColor: theme.palette.primary.main,
    minWidth: theme.spacing(25),
    width: "50%",
  },
  todayButton: {
    minWidth: theme.spacing(6),
  },
  chevronRightIcon: {
    transform: "rotate(180deg)",
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: theme.spacing(1),
  },
  buttonSpace: {
    width: theme.spacing(6),
  },
  outline: {
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  },
}));

const thisMonth = dayjs().format("YYYY/M");

type EventMonthFilter = {
  events: EventType[];
  month: string;
};

const eventMonthFilter = ({ events, month }: EventMonthFilter) => {
  return events.filter(
    (event) =>
      dayjs(event.start).isAfter(dayjs(month).startOf("month")) &&
      dayjs(event.start).isBefore(dayjs(month).endOf("month"))
  );
};

const SchedulePageSm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [dispMonth, setDispMonth] = useState(thisMonth);
  const [dispEvents, setDispEvents] = useState<EventType[]>(
    eventMonthFilter({ events: props.events, month: thisMonth })
  );

  const handleTodayButton = () => {
    setDispMonth(thisMonth);
    setDispEvents(eventMonthFilter({ events: props.events, month: thisMonth }));
  };

  const handleMonthPrev = () => {
    const newDispMonth = dayjs(dispMonth).add(-1, "month").format("YYYY/M");
    setDispMonth(newDispMonth);
    setDispEvents(
      eventMonthFilter({ events: props.events, month: newDispMonth })
    );
  };
  const handleMonthNext = () => {
    const newDispMonth = dayjs(dispMonth).add(1, "month").format("YYYY/M");
    setDispMonth(newDispMonth);
    setDispEvents(
      eventMonthFilter({ events: props.events, month: newDispMonth })
    );
  };

  // 最初に開いた一度だけ動く
  useEffect(() => {
    if (!props.events.length) {
      // GASと通信してイベント情報を取得する
      getSchedule({
        success: (resp: EventType[]) => {
          props.setEvents(resp);
          setDispEvents(eventMonthFilter({ events: resp, month: dispMonth }));
        },
        failure: (resp: any) => {
          console.log(resp);
        },
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id="Schedule">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="members" xs={12}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Schedule
            </Typography>
            <Divider
              variant="fullWidth"
              className={classes.fatDivider}
              style={{ width: "50%" }}
            />
            {/* TODO smを条件に、表示を大きくする */}
            <div className={classes.horizontal}>
              {dispMonth !== thisMonth ? (
                <Button
                  onClick={handleTodayButton}
                  className={classes.todayButton}
                >
                  今月
                </Button>
              ) : (
                <span className={classes.buttonSpace} />
              )}
              <div className={classes.horizontal}>
                <IconButton
                  onClick={handleMonthPrev}
                  className={classes.iconButton}
                >
                  <ChevronLeftIcon className={classes.fontColor} />
                </IconButton>
                <Typography>{dispMonth}</Typography>
                <IconButton
                  onClick={handleMonthNext}
                  className={clsx(classes.chevronRightIcon, classes.iconButton)}
                >
                  <ChevronLeftIcon className={classes.fontColor} />
                </IconButton>
              </div>
              <span className={classes.buttonSpace} />
            </div>
            {props.sm ? (
              <ScheduleLg events={dispEvents} month={dispMonth} />
            ) : (
              <ScheduleSm events={dispEvents} month={dispMonth} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

type Props = {
  sm: boolean;
  events: EventType[];
  setEvents: React.Dispatch<EventType[]>;
};

const mapStateProps = (state: RootState) => ({
  events: state.events.events,
});

const mapDispatchToProps = {
  setEvents,
};

export default connect(mapStateProps, mapDispatchToProps)(SchedulePageSm);
