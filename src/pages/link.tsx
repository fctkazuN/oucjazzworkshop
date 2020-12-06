import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MuiLink from "@material-ui/core/Link";

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

type LinkType = {
  name: string;
  url: string;
};

const links: LinkType[] = [
  {
    name: "jazz spot Jericho",
    url: "http://www7b.biglobe.ne.jp/~jericho/",
  },
  {
    name: "Bar LazyBird",
    url: "http://lazybird.info/top/",
  },
  {
    name: "Free-Lance",
    url: "http://www10.plala.or.jp/free-lance/",
  },
  {
    name: "北海道大学ジャズ研究会",
    url: "http://hokudaijazz.web.fc2.com/",
  },
  {
    name: "札幌医科大学ジャズ研究会",
    url: "https://sapmedjazzcircle.jimdofree.com/",
  },
  {
    // TODO Twitter？Facebook？どこを表示したらいいか確認する
    name: "北海学園大学ジャズ研究会",
    url: "https://twitter.com/gakuenjazz?lang=ja",
  },
  {
    // TODO Twitterでいい？
    name: "北海道教育大学札幌校JAZZ研究会",
    url: "https://twitter.com/sakkyodaijazz",
  },
  {
    name: "北海道科学大学Sunny Fields Jazz Orchestra",
    url: "http://sunnyfieldshp.blog.fc2.com/",
  },
  {
    name: "北海学園大学Free Formless Jazz Orchestra",
    url: "https://twitter.com/freeformless ",
  },
  {
    // TODO Twitter表示する？それとも今はもうつながり薄いから表示しない？
    name: "帯広畜産大学ジャズ研究会",
    url: "https://twitter.com/chikudai_jazz",
  },
];

const LinkPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="Link">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Link
            </Typography>
            <Divider
              variant="fullWidth"
              className={classes.fatDivider}
              style={{ width: "50%" }}
            />
            <Typography>
              お世話になっているライブハウスや、他大学のジャズ研究会などのリンク集です。
            </Typography>
            <List>
              {links.map((link) => (
                <ListItem key={link.url}>
                  <MuiLink
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="textPrimary"
                    underline="always"
                  >
                    {link.name}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LinkPage;
