import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

import { EventType } from "../../state/slices/eventsSlice";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
  },
  calendarCell: {
    padding: theme.spacing(0, 1),
    minHeight: theme.spacing(20),
    height: theme.spacing(15),
    verticalAlign: "top",
    width: "14.2857%",
  },
  otherMonthDay: {
    color: "#777",
    fontFamily: "Impact",
    fontWeight: 200,
  },
  day: {
    fontFamily: "Impact",
    fontWeight: 200,
  },
  outline: {
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  },
  eventItem: {
    flexWrap: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const weekdays = {
  sun: { ja: "日", jaLong: "日曜日", en: "Sun", enLong: "Sunday" },
  mon: { ja: "月", jaLong: "月曜日", en: "Mon", enLong: "Monday" },
  tue: { ja: "火", jaLong: "火曜日", en: "Tue", enLong: "Tuesday" },
  wed: { ja: "水", jaLong: "水曜日", en: "Wed", enLong: "Wednesday" },
  thu: { ja: "木", jaLong: "木曜日", en: "Thu", enLong: "Thursday" },
  fri: { ja: "金", jaLong: "金曜日", en: "Fri", enLong: "Friday" },
  sat: { ja: "土", jaLong: "土曜日", en: "Sat", enLong: "Saturday" },
};

const sunStartJa = [
  weekdays.sun.ja,
  weekdays.mon.ja,
  weekdays.tue.ja,
  weekdays.wed.ja,
  weekdays.thu.ja,
  weekdays.fri.ja,
  weekdays.sat.ja,
];

const ScheduleLg: React.FC<Props> = ({ month, events }) => {
  const classes = useStyles();
  const [weekList, setWeekList] = useState<number[][]>([]);

  const displayDay = (day: number, windex: number) => {
    if ((windex === 0 && day > 7) || (windex > 3 && day < 7)) {
      // 先月or翌月の表示
      return (
        <Typography variant="h5" className={classes.otherMonthDay}>
          {day}
        </Typography>
      );
    } else {
      return (
        <Typography variant="h5" className={classes.day}>
          {day}
        </Typography>
      );
    }
  };

  useEffect(() => {
    const monthStart = dayjs(month).startOf("month");
    const startWeekday = monthStart.day();
    let newWeekList: number[][] = [];
    let week: number[] = [];
    for (let i = startWeekday; i > 0; i--) {
      week.push(dayjs(monthStart).subtract(i, "day").date());
    }
    let i = 0;
    while (true) {
      const date = dayjs(monthStart).add(i, "day");
      week.push(date.date());
      if (week.length === 7) {
        newWeekList.push(week);
        week = [];
        if (date.format("YYYY/M") !== month) {
          break;
        }
      }
      i++;
    }
    setWeekList(newWeekList);
  }, [month]);

  return (
    <TableContainer id="schedule-calendar">
      <Table>
        <TableHead>
          <TableRow>
            {sunStartJa.map((wd) => (
              <TableCell
                key={wd}
                align="center"
                padding="none"
                className={classes.outline}
              >
                {wd}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {weekList.map((week, windex) => (
            <TableRow key={windex}>
              {week.map((day, dindex) => (
                <TableCell
                  key={`${windex}-${dindex}`}
                  className={clsx(classes.calendarCell, classes.outline)}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    {displayDay(day, windex)}
                    {events
                      .filter((event) => dayjs(event.start).date() === day)
                      .map((event) => (
                        <Typography
                          variant="caption"
                          className={classes.eventItem}
                        >
                          {dayjs(event.start).format("H:mm~") +
                            " " +
                            event.title}
                        </Typography>
                      ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

type Props = {
  events: EventType[];
  month: string;
};

export default ScheduleLg;
