import React from "react";
import dayjs from "dayjs";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { EventType } from "../../state/slices/eventsSlice";

const useStyles = makeStyles((theme) => ({
  outline: {
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  },
}));

const ScheduleSm: React.FC<Props> = ({ events, month }) => {
  const classes = useStyles();

  return (
    <div id="schedule-list">
      <List>
        {events.length ? (
          events.map((event) => (
            <div key={event.title}>
              {/* TODO クリックでdescription表示？ */}
              <ListItem dense className={classes.outline}>
                <ListItemText
                  primary={dayjs(event.start).format("M/D(ddd) H:mm~")}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
              <ListItem dense className={classes.outline}>
                <ListItemText
                  primary={event.title}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                  secondary={event.location}
                />
              </ListItem>
            </div>
          ))
        ) : (
          <Typography>{month + "の予定はありません"}</Typography>
        )}
      </List>
    </div>
  );
};

type Props = {
  events: EventType[];
  month: string;
};

export default ScheduleSm;
