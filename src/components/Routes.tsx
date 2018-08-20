import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Auth, UserForm } from '.';

export const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={UserForm} />
                    <Auth token=''>
                        <div>
                            <h1>This is Dashboard Page.</h1>
                        </div>
                    </Auth>
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};
