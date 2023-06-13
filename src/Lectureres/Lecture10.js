import {Box, Container, Paper, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
}));

const Lecture10 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.root}>
        <Paper
          width="30%"
          p={2}
          m={2}
          bgColor="primary.main"
          color="white"
          borderLeft={5}
          component={Box}
        >
          <Typography variant="h4">Get Started</Typography>
          <Typography variant="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture10;
