import React from "react";
import { Timeline } from "react-twitter-widgets";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import MainPhotos from "./mainPhotos";
import SubPhotos from "./subPhotos";
import EventComponent from "./event";

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
  },
  fatDivider: {
    padding: 2,
    backgroundColor: theme.palette.primary.main,
    width: "50%",
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

const HomePage: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div id="Home">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item id="mainPhotos" xs={12}>
          <MainPhotos sm={props.sm} />
        </Grid>
        {/* TODO サイズ感が難しい 保留 */}
        <Grid item id="subPhotos" xs={12}>
          <SubPhotos sm={props.sm} />
        </Grid>
        <Grid item id="updates" xs={12} sm={8}>
          <Paper className={classes.content1} id="information">
            <Typography variant="h6" className={classes.subTitle}>
              Infomation
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <div>
              <div className={classes.content1}>
                <Typography variant="body2" className={classes.multiline}>
                  {
                    "小樽商科大学ジャズ研究会のホームページにようこそ！\n商大ジャズ研では毎週火曜日に行われている定期セッションに加え、札幌、小樽市内を中心にライブ活動をさせて頂いています。その他にも学校祭出店、夏合宿、定期演奏会など楽しいイベントが盛り沢山です！\nまた、道内他大学のジャズ研との交流も深く一緒にライブ活動などを行っています。\n入部希望、また演奏依頼などありましたらこちらのフォームからお気軽にお問い合わせください。"
                  }
                </Typography>
              </div>
              <Divider variant="fullWidth" className={classes.dottedDivider} />
              <div className={classes.content1}>
                <Typography variant="subtitle1" className={classes.subTitle}>
                  What's New ?
                </Typography>
                <List disablePadding>
                  {[{ date: "20.12.1", text: "ホームページリニューアル" }].map(
                    (row) => (
                      <ListItem dense key={row.date}>
                        <Typography
                          align="left"
                          variant="body2"
                          style={{ minWidth: 80 }}
                        >
                          {row.date}
                        </Typography>
                        <Typography align="left" variant="body2">
                          {row.text}
                        </Typography>
                      </ListItem>
                    )
                  )}
                </List>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item id="twitter" xs={12} sm={4}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Twitter
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <Timeline
              dataSource={{
                sourceType: "https://twitter.com/ouc_jazz?ref_src=twsrc%5Etfw",
                screenName: "ouc_jazz",
              }}
              options={{
                height: 300,
                theme: "dark",
                chrome: "noheader, nofooter",
              }}
            />
          </Paper>
        </Grid>
        <Grid item id="events" xs={12} sm={6}>
          <EventComponent />
        </Grid>
        <Grid item id="news" xs={12} sm={6}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              News
            </Typography>
            <Divider variant="fullWidth" className={classes.fatDivider} />
            <div className={classes.content1}>
              <Typography variant="subtitle1">
                {"定期演奏会の中止について"}
              </Typography>
              <Typography variant="subtitle2" className={classes.multiline}>
                {
                  "12月に開催を予定しておりました第40回小樽商科大学jazz研究会定期演奏会は、北海道における新型コロナウイルス感染症の現在の状況を考慮し、感染拡大防止のため、やむなく中止を決定いたしました。\n\n​何卒ご理解のほどよろしくお願い申し上げます。"
                }
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

type Props = {
  sm: boolean;
};

export default HomePage;
