import {Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
  blue: {
    color: "blue",
  },
});

const Lecturer3 = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h1" className={classes.blue}>
        Hedaline1
      </Typography>
      <Typography variant="h2">Hedaline2</Typography>
      <Typography variant="h3">Hedaline3</Typography>
      <Typography variant="h4">Hedaline4</Typography>
      <Typography variant="h5">Hedaline5</Typography>
      <Typography variant="h6">Hedaline6</Typography>
      <Typography variant="h7">Hedaline7</Typography>

      <Typography variant="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <Typography variant="body3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </div>
  );
};
export default Lecturer3;
