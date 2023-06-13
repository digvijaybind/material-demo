import {Container, Typography} from "@mui/material";
import React from "react";
import {lightGreen} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";
const useStyle = makeStyles({
  myHeadline: {
    color: lightGreen[500],
  },
});
const Lecture7 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container>
        <Typography
          variant="h2"
          style={{color: lightGreen["A700"]}}
          className={classes.myHeadline}
        >
          {" "}
          Hello world
        </Typography>
      </Container>
    </div>
  );
};
export default Lecture7;
