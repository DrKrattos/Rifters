import { PrismicProvider } from '@prismicio/react';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { prismicClient } from './services/prismic.service';
import { Home, Login } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'home',
        element: <Home />
    }
]);

const App = () => {
    return (
        <React.StrictMode>
            <PrismicProvider client={prismicClient}>
                <RouterProvider router={router} />
            </PrismicProvider>
        </React.StrictMode>
    );
};

export default App;
