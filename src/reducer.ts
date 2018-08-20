import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { Actions } from './action';

export type GlobalState = {
    token: string,
    fetching: boolean,
};
const initialState: GlobalState = {
    token: '',
    fetching: false,
};

export const reducer = (state: GlobalState = initialState, action: Action): GlobalState => {
    if (isType(action, Actions.fetch.started)) {
        return {
            ...state,
            fetching: true,
        };
    }
    if (isType(action, Actions.fetch.done)) {
        return {
            ...state,
            fetching: false,
        };
    }
    if (isType(action, Actions.fetch.failed)) {
        return {
            ...state,
            fetching: false,
        };
    }
    if (isType(action, Actions.signup)) {
        return { ...state };
    }
    if (isType(action, Actions.login)) {
        return { ...state };
    }
    return { ...state };
};
