import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Root from './routes/root/root';
import KeycapsView from './routes/keycaps/keycaps';
import SwitchesView from './routes/switches/switches';
import AboutPage from './routes/about/about';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement:<div>This is the error page</div>
  },
  {
    path:"/keycaps",
    element:<KeycapsView></KeycapsView>
  },
  {
    path:"/switches",
    element:<SwitchesView></SwitchesView>
  },
  {
    path:"/about",
    element:<AboutPage></AboutPage>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


