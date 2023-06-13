import React from "react";
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
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    padding: 10,
  },
});
const Lecture14 = () => {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia image="" style={{height: 300, width: 300}} />
                <CardContent>
                  <Typography variant="h4">Post Title</Typography>
                  <Typography variant="subtitle">
                    em Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>ReadMore</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle">
                  em Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>ReadMore</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle">
                  em Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>ReadMore</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle">
                  em Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>ReadMore</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle">
                  em Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                </Typography>
              </CardContent>
              <CardActions>
                <Button>ReadMore</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture14;
