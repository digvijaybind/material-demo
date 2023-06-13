import React from "react";
import {makeStyles} from "@mui/styles";
import {Container, Typography, Button, Paper, Box} from "@material-ui";
const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray"
  },
});

const Lecturer18 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.root}></Container>
    </div>
  );
};
export default Lecturer18;
