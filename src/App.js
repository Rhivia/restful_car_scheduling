import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
// import CarCard from './features/car_card';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import ScheduleForm from './features/schedule_card';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
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
          {/* {CarCard()} */}
  
          <Grid item xs={12} sm={9}>
            <ScheduleForm onSubmit={this.submit} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
