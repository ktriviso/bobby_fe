import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Menu from './pages/Menu';
import Splash from './components/Splash';


const routes_with_components = [
    {
        path: '/',
        exact: true,
        component: Splash
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/events',
        exact: true,
        component: Event
    },
    {
        path: '/menu',
        exact: true,
        component: Menu
    }
]

export default (
    <Switch>
     {routes_with_components.map((route, i) => (
         // render cuts down on load time
         <Route key={i} exact={route.exact} path={route.path} render={(props) => {
            return <route.component {...props}/>
         }}/>
        )
     )}
    </Switch>
)