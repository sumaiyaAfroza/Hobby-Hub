import { createBrowserRouter, NavLink } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGroup from "../pages/AllGroup";
import Details from "../component/Details";
import MyGroups from "../pages/MyGroups";
import CreateGroup from "../pages/CreateGroup";
import Update from "../component/Update";
import Error from "../component/Error";
import Loading from "../component/Loading";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component: Home,
                // loader:()=>fetch('http://localhost:3000/hobbies')
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/register',
                Component: Register
            },
            {
                path: '/groups',
                Component: AllGroup,
               loader: () => fetch('http://localhost:3000/hobbies'),

                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path:'/hobbies/:id',
                element:<PrivateRoute> <Details></Details> </PrivateRoute> ,
                loader: ({params})=>fetch(`http://localhost:3000/hobbies/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path:'/myGroups/:id',
                element: <PrivateRoute> <MyGroups></MyGroups></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/myGroups/${params.id}`)
            },
            {
                path:'/createGroup',
                element: <PrivateRoute> <CreateGroup></CreateGroup>  </PrivateRoute>
            },
            {
                path:'/updateGroup/:id',
                element: <PrivateRoute> <Update></Update></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/updateGrp/${params.id}`)
            }

        ] 
    },

    {
        path: "*",
        element: <Error></Error>
    }  
])