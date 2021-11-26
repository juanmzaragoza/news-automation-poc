import * as React from "react";
import { Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          Home
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
