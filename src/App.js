import React from 'react';
import { Grid } from '@material-ui/core';
// import CarCard from './features/car_card';
import { Card, CardHeader, CardContent, Container } from '@material-ui/core';

import ScheduleForm from './features/schedule_card';
import './App.css';

const App = () => {
  return (
    <Container className="App">
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
        spacing={1}>

        <Grid item xs={12} sm={3}>
          <Card>
            <CardHeader title="Fiat Uno" />
            <CardContent>Test</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={9}>
          <ScheduleForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
