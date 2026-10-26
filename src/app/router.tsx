import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/modules/home/pages/HomePage";
import NotFoundPage from "@/modules/not-found/pages/NotFoundPage";

import AppLayout from "@/shared/components/layout/AppLayout";
import AuthLayout from "@/shared/components/layout/AuthLayout";
import { ROUTES } from "@/shared/constants/routes";



export const router = createBrowserRouter([
    {
        element: <AppLayout />,

        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />,
            },

            {
                path: ROUTES.PROFILE,
                element: (
                    <h1>Profile Page</h1>
                ),
            },

            {
                path: ROUTES.ANY,
                element: <NotFoundPage />,
            },
        ],
    },

    {
        element: <AuthLayout />,

        children: [
            {
                path: ROUTES.LOGIN,
                element: (
                    <h1>Login Page</h1>
                ),
            },

            {
                path: ROUTES.REGISTER,
                element: (
                    <h1>Register Page</h1>
                ),
            },
        ],
    },
]);