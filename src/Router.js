import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from './components/CircularProgress';

const Dashboard = lazy(() => import('./containers/Dashboard'));

const Router = () => {
    return (
        <div className="main_content">
            <Suspense fallback={<CircularProgress/>}>
                <div className="content_div scroll_bar">
                    <Switch>
                        <Route
                            exact
                            component={Dashboard}
                            path="*"/>
                    </Switch>
                </div>
            </Suspense>
        </div>
    );
};

export default Router;
