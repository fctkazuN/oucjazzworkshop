import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "../components/Customs/OutlinedTextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { connect } from "react-redux";
import { setBackdrop } from "../state/slices/backdropSlice";

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
  multiline: {
    whiteSpace: "pre-line",
  },
  textFiledMedium: {
    width: theme.spacing(50),
  },
  textFieldInput: {
    backgroundColor: "#555",
  },
  buttonPosition: {
    justifyContent: "flex-end",
  },
}));

type Texts = {
  name: string;
  address: string;
  subject: string;
  body: string;
};

const initialTexts = {
  name: "",
  address: "",
  subject: "",
  body: "",
};

const ContactPage: React.FC<Props> = ({ setBackdrop }) => {
  const classes = useStyles();
  const [texts, setTexts] = useState<Texts>(initialTexts);
  const [sendErrorTerm, setSendErrorTerm] = useState(false);

  const handleTextsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setTexts((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (texts.name && texts.address && texts.subject && texts.body) {
      // 送信処理
      console.log(1);
      setBackdrop(true);
      setTimeout(() => {
        setBackdrop(false);
        setSendErrorTerm(false);
        setTexts(initialTexts);
      }, 2000);
    } else {
      // エラー表示
      console.log(2);
      setSendErrorTerm(true);
    }
  };

  return (
    <div id="Link">
      <Grid container className={classes.parentGrid} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.content1}>
            <Typography variant="h6" className={classes.subTitle}>
              Contact
            </Typography>
            <Divider
              variant="fullWidth"
              className={classes.fatDivider}
              style={{ width: "50%" }}
            />
            <Typography className={classes.multiline}>
              {
                "入部希望、演奏依頼、その他お問い合わせは以下のフォームから送信してください。\n※入部希望の場合は学年、希望楽器を明記してください。"
              }
            </Typography>
            <List>
              <ListItem>
                <TextField
                  label="お名前"
                  name="name"
                  variant="outlined"
                  size="small"
                  required
                  value={texts.name}
                  onChange={handleTextsChange}
                  className={classes.textFiledMedium}
                  InputProps={{
                    autoComplete: "off",
                    className: classes.textFieldInput,
                  }}
                  error={sendErrorTerm && !texts.name}
                  helperText={
                    sendErrorTerm && !texts.name
                      ? "お名前を入力してください"
                      : ""
                  }
                />
              </ListItem>

              <ListItem>
                <TextField
                  label="メールアドレス"
                  name="address"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  value={texts.address}
                  onChange={handleTextsChange}
                  InputProps={{
                    autoComplete: "off",
                    className: classes.textFieldInput,
                  }}
                  error={sendErrorTerm && !texts.address}
                  helperText={
                    sendErrorTerm && !texts.address
                      ? "メールアドレスを入力してください"
                      : ""
                  }
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="件名"
                  name="subject"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  value={texts.subject}
                  onChange={handleTextsChange}
                  InputProps={{
                    autoComplete: "off",
                    className: classes.textFieldInput,
                  }}
                  error={sendErrorTerm && !texts.subject}
                  helperText={
                    sendErrorTerm && !texts.subject
                      ? "件名を入力してください"
                      : ""
                  }
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="内容"
                  name="body"
                  variant="outlined"
                  size="small"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  rowsMax={20}
                  value={texts.body}
                  onChange={handleTextsChange}
                  InputProps={{
                    autoComplete: "off",
                    className: classes.textFieldInput,
                  }}
                  error={sendErrorTerm && !texts.body}
                  helperText={
                    sendErrorTerm && !texts.body ? "内容を入力してください" : ""
                  }
                />
              </ListItem>
              <ListItem className={classes.buttonPosition}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SendIcon />}
                  onClick={handleSubmit}
                >
                  送信
                </Button>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

type Props = {
  setBackdrop: React.Dispatch<boolean>;
};

const mapDispatchToProps = {
  setBackdrop,
};

export default connect(null, mapDispatchToProps)(ContactPage);
