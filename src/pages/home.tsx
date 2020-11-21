import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fontColor: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  parentGrid: {
    marginTop: theme.spacing(2),
  },
  content1: {
    padding: theme.spacing(2),
  },
}));

const IndexPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="Home">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="mainPhotos" xs={12}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>メイン写真</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="subPhotos" xs={12}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>サブ写真</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="updates" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>
              あいさつと更新履歴
            </Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="twitter" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>ついった</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="events" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>イベント</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item id="news" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography className={classes.fontColor}>ニュース</Typography>
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexPage;
