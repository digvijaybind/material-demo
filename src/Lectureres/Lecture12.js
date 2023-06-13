import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import React from "react";

const Lecture12 = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={4} justify="space-evenly">
          <Grid item lg={4} md={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h4">Read docs</Typography>
                <Typography variant="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button> Read more</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h4">Read docs</Typography>
                <Typography variant="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button> Read more</Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={4} md={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h4">Read docs</Typography>
                <Typography variant="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  ty pesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button> Read more</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Lecture12;
