import {Box, Container, Icon, Paper} from "@mui/material";
import {lightGreen, green, red, yellow} from "@mui/material/colors";
import React from "react";

const Lecture8 = () => {
  return (
    <div>
      <Container>
        <Paper component={Box} p={2}>
          <Icon style={{fontSize: 70, color: lightGreen[500]}}>article</Icon>
          <Icon style={{fontSize: 70, color: green[500]}}>article</Icon>
          <Icon style={{fontSize: 70, color: red[500]}}>article</Icon>
          <Icon style={{fontSize: 70, color: yellow[500]}}>article</Icon>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture8;
