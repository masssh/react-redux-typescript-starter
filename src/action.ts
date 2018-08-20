import actionCreatorFactory, { isType } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const enum Types {
    FETCH = 'FETCH',
    SIGNUP = 'SIGNUP',
    LOGIN = 'LOGIN',
}

export const Actions = {
    fetch: actionCreator.async<
        { name: string, uri: string, params: object },
        { data: object },
        { code: number }
        >(Types.FETCH),

    signup: actionCreator<{
        email: string,
        password: string,
        passwordConfirmation: string,
    }>(Types.SIGNUP),

    login: actionCreator<{
        email: string,
        password: string,
        rememberMe: boolean,
    }>(Types.LOGIN),
}
