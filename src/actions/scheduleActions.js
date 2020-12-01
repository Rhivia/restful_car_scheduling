import {
    FETCH_SCHEDULE,
    SCHEDULE_FETCHING,
    SCHEDULE_FETCHING_ERROR
} from './types';

export function createSchedule(values) {
    return async (dispatch, getState) => {
        try {
            dispatch(resquestLoading());
            const call = 'call'; // Point to API
            console.log('Call Received', values);
            dispatch(loadingEnd(call));
        } catch(error) {
            dispatch(loadingError(error));
        }
    }
}

function resquestLoading() {
    return {
        type: SCHEDULE_FETCHING
    }
}

function loadingEnd(call) {
    return {
        type: FETCH_SCHEDULE,
        payload: call
    }
}

function loadingError(error) {
    return {
        type: SCHEDULE_FETCHING_ERROR,
        payload: error
    }
}