import * as React from 'react';
import {
    Button,
    Grid,
    TextField,
    Checkbox,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { GlobalState } from '../reducer';
import { Actions } from '../action';

type Props = {
    signup: (email: string, password: string, passwordConfirmation: string) => any,
    login: (email: string, password: string, rememberMe: boolean) => any,
};

type State = {
    email: string,
    password: string,
    passwordConfirmation: string,
    rememberMe: boolean,
};

const mapStateToProps = (state: GlobalState): Partial<Props> => ({
});

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => ({
    signup: (email, password, passwordConfirmation) => dispatch(Actions.signup({ email: email, password: password, passwordConfirmation: passwordConfirmation })),
    login: (email, password, rememberMe) => dispatch(Actions.login({ email: email, password: password, rememberMe: rememberMe })),
})

class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            rememberMe: false,
        };
    }

    handleChange = (name: string) => (event: React.FormEvent<HTMLInputElement>) => {
        let value;
        switch (event.currentTarget.type) {
            case "checkbox":
                value = event.currentTarget.checked;
                break;
            default:
                value = event.currentTarget.value;
                break;
        }
        this.setState({ [name]: value } as Pick<State, keyof State>);
    }

    render() {
        const { signup, login } = this.props;
        const { email, password, passwordConfirmation, rememberMe } = this.state;
        return (
            <div>
                <div>
                    <TextField
                        label="E-mail Address"
                        value={email}
                        onChange={this.handleChange("email")}
                    />
                    <TextField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={this.handleChange("password")}
                    />
                    <TextField
                        label="Confirmation"
                        value={passwordConfirmation}
                        type="password"
                        onChange={this.handleChange("passwordConfirmation")}
                    />
                    <Button
                        variant="raised"
                        color="secondary"
                        onClick={() => signup(email, password, passwordConfirmation)}>Sign Up</Button>
                </div>
                <div>
                    <TextField
                        label="E-mail Address"
                        value={email}
                        onChange={this.handleChange("email")}
                    />
                    <TextField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={this.handleChange("password")}
                    />
                    <Checkbox
                        checked={rememberMe}
                        onChange={this.handleChange("rememberMe")}
                    />
                    <Button
                        variant="raised"
                        color="primary"
                        onClick={() => login(email, password, rememberMe)}>Login
                </Button>
                </div>
            </div>
        );
    }
};

export const UserForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
