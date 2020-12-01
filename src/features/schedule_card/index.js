import React, { Component, useState } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createSchedule } from '../../actions/scheduleActions'

import ComposedTextField from '../fields/composedTextField';

const renderField = (field) => (
    <div className="input-row">
        <input {...field.input} type="text"/>
    </div>
)

class ScheduleForm extends Component {
    onSubmit = values => {
        this.props.createSchedule(values);
    }

    render () {
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="name" component={renderField} />
                
                <button type="submit">
                    Submit
                </button>
            </Form>
        )
    }
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