import {
  Container,
  Fab,
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {useEffect, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
const useStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
  },
});
const Lecture13 = () => {
  const classes = useStyle();
  const [users, setUsers] = useState([]);

  const loadusers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setUsers(result.data);
  };
  useEffect(() => {
    loadusers();
  }, []);

  return (
    <div>
      <Container className={classes.root}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <Grid container>
          {users &&
            users?.map((user) => (
              <Grid item sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://via.placeholder.com/1920*1080"
                      style={{height: 300, width: 300}}
                    />
                    <CardContent>
                      <Typography variant="h6">{user.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture13;
