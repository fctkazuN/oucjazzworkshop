import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const OutlinedTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
      fontWeight: 400,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.secondary,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.primary,
      },
    },
  },
}))(TextField);

export default OutlinedTextField;
