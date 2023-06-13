import React from "react";
import {makeStyles} from "@mui/styles";
import {Container, Box} from "@material-ui/core";
const useStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
});
const Lesson18 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.root}>
        <Box></Box>
      </Container>
    </div>
  );
};

export default Lesson18;
