import React, { useState } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createSchedule } from '../../actions/scheduleActions'

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
    Button,
    Paper,
    Grid
} from '@material-ui/core';

const renderTextField = (
    { input, name, label, meta: { touched, error }, ...custom }
) => (
    <TextField
        name={name}
        label={label}
        variant="outlined"
        {...input}
        {...custom}
    />
)

// const handleChange = prop => event => {
//     this.setState({ [prop]: event.target.value });
// };

const ScheduleForm = props => {
    const { handleSubmit } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const onSubmit = values => {
        console.log(values);
        props.createSchedule(values);
    }

    // const handleChange = key => (event, value) => {
    //     console.log(key, event.target.value, value);
    //     this.setState({ [key]: value });
    // };

    // 2e323c

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Paper style={{ padding: 25 }}>
                <Grid>
                    Concluir agendamento
                </Grid>
                <Grid alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                        <Field
                            fullWidth
                            name="nome"
                            label="Nome"
                            type='text'
                            component={renderTextField}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Field
                            fullWidth
                            name="email"
                            label="E-mail"
                            type='text'
                            component={renderTextField}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Field
                            fullWidth
                            name="telephone"
                            label="Telefone"
                            type='text'
                            component={renderTextField}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={6} style={{ marginTop: 16 }}>
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained">
                            Concluir
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Form>
    )
}

function mapStateToProps({ scheduleReducer: { schedule, fetching } }) {
    return { schedule, fetching };
};

export default compose(
    connect(mapStateToProps, { createSchedule }),
    reduxForm({
        form: 'ScheduleForm',
    })
)(ScheduleForm);
