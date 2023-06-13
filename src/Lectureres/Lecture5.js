import {Box, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  myBox: {
    width: 300,
    backgroundColor: "red",
    padding: 50,
    color: "black",
    borderRadius: 4,
  },
});
const Lecture5 = () => {
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.myBox}>
          <Typography variant="h4">Headline</Typography>
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
        </Box>
        <Box className={classes.myBox}>
          <Typography variant="h4">Headline</Typography>
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
        </Box>
        <Box className={classes.myBox}>
          <Typography variant="h4">Headline</Typography>
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
        </Box>
      </Box>
    </div>
  );
};
export default Lecture5;
