import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import CircularProgress from './components/CircularProgress';
import Toast from './components/Toast';
import { ToastProvider } from './components/Toast/Toast.Provider';
import { EcosystemProvider } from './containers/Ecosystem/Ecosystem.provider';
const Dashboard = lazy(() => import('./containers/Dashboard'));
const Ecosystem = lazy(() => import('./containers/Ecosystem'));

const Router = () => {
    return (
        <div className="main_content">
            <Suspense fallback={<CircularProgress />}>
                <div className="content_div scroll_bar">
                    <ToastProvider>
                        <Toast />
                        <Switch>
                            <Route
                                exact
                                component={Dashboard}
                                path="/" />
                            <EcosystemProvider>

                                <Route
                                    exact
                                    component={Ecosystem}
                                    path="/ecosystem" />
                            </EcosystemProvider>
                        </Switch>
                    </ToastProvider>
                </div>
            </Suspense>
        </div>
    );
};

export default Router;
