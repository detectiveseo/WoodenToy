import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Pages/Home/Home';
import AllToys from './Components/Pages/All Toys/AllToys';
import MyToys from './Components/Pages/My Toys/MyToys';
import Blogs from './Components/Pages/Blogs/Blogs';

import SingUp from './Components/Pages/Account/Sing-up/SingUp';
import SingIn from './Components/Pages/Account/Login/SingIn';
import LogReg from './Components/Pages/Account/LogReg';
import AddToy from './Components/Pages/Add A Toy/AddToy';
import PrivateRoute from './Components/Providers/PrivateRoute';
import Profile from './Components/Pages/Account/Profile/Profile';
import NotFound from './Components/Pages/404/NotFound';
import ProteactLogin from './Components/Providers/ProteactLogin';
import SingleToy from './Components/Pages/All Toys/SingleToy';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () => fetch("http://localhost:3000/products")
            },
            {
                path: "/toy/:id",
                element: <SingleToy />,
                loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
            },
            {
                path: "/my-toys",
                element: <MyToys />
            },
            {
                path: "/blgos",
                element: <Blogs />
            },
            {
                path: "/account",
                element: <>coming soon</>
            },
            {
                path: "/user",
                element: <ProteactLogin><LogReg /></ProteactLogin>,
                children: [
                    {
                        path: "/user/sing-in",
                        element: <SingIn />
                    },
                    {
                        path: "/user/sing-up",
                        element: <SingUp />
                    }
                ]
            },
            {
                path: "/profile",
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>

            },
            {
                path: "/add-toy",
                element:
                    <PrivateRoute>
                        <AddToy />
                    </PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])
export default router;