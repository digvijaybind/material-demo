import React, {useState} from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  CardContent,
  CardActions,
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
  },
});

const Lecture16 = () => {
  const classes = useStyle();
  const [gender, setGender] = useState("male");
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <Container className={classes.root}>
        <Paper component={Box} width="30%^" p={4}>
          <Box component="form">
            <FormControl>
              <RadioGroup value={gender} onChange={handleChange}>
                <FormControlLabel
                  label="Female"
                  control={<Radio />}
                  value="Female"
                />
                <FormControlLabel
                  label="male"
                  control={<Radio />}
                  value="male"
                />
                <FormControlLabel
                  label="other"
                  control={<Radio />}
                  value="other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture16;
