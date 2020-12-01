/* eslint-disable import/no-anonymous-default-export */
import {
    FETCH_SCHEDULE,
    SCHEDULE_FETCHING,
    SCHEDULE_FETCHING_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    schedule: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SCHEDULE:
            return {
                ...state,
                schedule: action.payload,
                fetching: false
            }
        case SCHEDULE_FETCHING:
            return {
                ...state,
                fetching: true,
                error: INITIAL_STATE.error
            }
        case SCHEDULE_FETCHING_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}