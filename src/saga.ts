import { takeEvery, call, put, take } from 'redux-saga/effects';
import { Actions } from './action';
import { post } from './middlewares/api';

function* fetchStarted(action: ReturnType<typeof Actions.fetch.started>) {
    try {
        const json = yield call(post, action.payload.uri, action.payload.params);
        yield put(Actions.fetch.done({ params: action.payload, result: { data: json } }));
    } catch (error) {
        yield put(Actions.fetch.failed({ params: action.payload, error: { code: 1 } }));
    }
}

function* signup(action: ReturnType<typeof Actions.signup>) {
    const uri = '/users';
    const params = {
        user: action.payload
    };
    yield put(Actions.fetch.started({ name: 'SIGNUP', uri: uri, params: params }));
}

function* login(action: ReturnType<typeof Actions.login>) {
    const uri = '/user_sessions';
    const params = {
        user_session: action.payload
    };
    yield put(Actions.fetch.started({ name: 'LOGIN', uri: uri, params: params }));
}

export function* saga() {
    yield takeEvery(Actions.fetch.started.type, fetchStarted);
}
