import {Box, Button, Container, Paper, Typography} from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Lecture9 = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper component={Box} p={4}>
          <Typography>Read Docs</Typography>
          <Typography variant="subtitle">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </Typography>
          <Box mt={3}>
            <Button
              color="secondary"
              variant="contained"
              dullWidth
              size="large
              "
              fullWidth
              size="large"
              endIcon={<AccessTimeIcon />}
            >
              {" "}
              Read More
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
export default Lecture9;
