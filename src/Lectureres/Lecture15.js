import React from "react";
import {Container, Typography, Button, Paper, Box} from "@material-ui/core";
import {InputAdornment, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const useStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
});
const Lecture15 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box} width="30%" mx="auto" p={4}>
          <Typography variant="h5"> Create new Account</Typography>
          <Box component="form" mt={2}>
            <TextField
              fullWidth
              placeholder="Enter Your First Name"
              margin="normal"
              variant="filled"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBalanceIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              placeholder="Enter Your First Name"
              margin="normal"
              variant="filled"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              placeholder="Enter Your Last Name"
              margin="normal"
              variant="filled"
              color="primary"
              multiline
              rows={4}
              helperText="Minimum 144 chararcters"
            />
          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              Sign up
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture15;
