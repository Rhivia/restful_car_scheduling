import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    selectCount
} from '../../slices/carFormSlice';

import { Grid } from '@material-ui/core';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent
} from '@material-ui/core';

function CarCard () {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <Grid item xs={12} sm={3}>
            <Card>
                <CardHeader title="Fiat Uno" />
                <CardContent>
                    <button onClick={() => dispatch(increment())}> + </button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(decrement())}> - </button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CarCard;