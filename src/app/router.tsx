/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './common/navbar/navbar';
import SpinnerComponent from './library/components/spinner/spinner';
import { useTheme } from './views/lessons/part_2-working_with_context/context/theme/context';

const ExercisesRouter = lazy(() => import('./views/lessons/routes'));

const RoutingModule = () => {
    const { isDarkMode } = useTheme();
    return (
        <Fragment>
            <NavbarComponent />
            <main className={`container-fluid ${isDarkMode && 'text-white'}`}>
                <div className="row">
                    <div className={`col  ${isDarkMode && 'bg-dark'}`}>
                        <Suspense
                            fallback={<SpinnerComponent color={'primary'} />}
                        >
                            <Routes>
                                {/* Redirect from base path to /games */}
                                <Route
                                    path="/"
                                    element={
                                        <Navigate replace to="/exercises" />
                                    }
                                />
                                <Route
                                    path="/exercises/*"
                                    element={<ExercisesRouter />}
                                />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default RoutingModule;
