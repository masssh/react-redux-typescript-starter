import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { GlobalState } from '../reducer';

export type Props = {
    token: string,
};

export type State = {
};

const mapStateToProps = (state: GlobalState): Partial<Props> => ({
    token: state.token,
});

const mapDispatchToProps = (dispatch: any, props: Props): Partial<Props> => ({
})

class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            this.props.token === '' ? <Redirect to={'/'} /> : this.props.children
        );
    }
};

export const Auth = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);
