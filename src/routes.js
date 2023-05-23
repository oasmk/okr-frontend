import React from 'react';
import {accessrole} from './views/config'

const Create = React.lazy(() => import('./views/Stretgry/Create'));
const EditStretgry = React.lazy(() => import('./views/Stretgry/Edit'));


const View = React.lazy(() => import('./views/Stretgry/View'));
const TaskCreate = React.lazy(() => import('./views/Task/Task'));
const Dashboard2 = React.lazy(() => import('./views/dashboard/Dashboard2'));
const Measures = React.lazy(() => import('./views/Manager/Measures'));
const Myuser = React.lazy(() => import('./views/User/User'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Forgot = React.lazy(() => import('./views/pages/login/Forgot'));
const Stretgry = React.lazy(() => import('./views/Stretgry/Stretgry'));
const Temp = React.lazy(() => import('./views/Temp/Temp'));
// const Landing = React.lazy(() => import('./views/Landing/Landing'));


var routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
 
 
  // { path: '/task/create', name: 'TaslCreate', component: TaskCreate },
  // { path: '/dashboard2', name: 'Dashboard2', component: Dashboard2 },
  // { path: '/measures', name: 'Measures', component: Measures },w
 
  
  // { path: '/forgot', name: 'Forgot', component: Forgot },

];

// for admin
if(accessrole==='Admin'){
  routes = [...routes, 
    { path: '/user', name: 'Myuser', component: Myuser },
    { path: '/profile', name: 'Profile', component: Profile },
  ]
}
// for Bydel Director
else if(accessrole==='Bydel Director'){
    routes = [...routes, 
    { path: '/stretgry', name: 'Stretgry', component: Stretgry },
    { path: '/create', name: 'Create', component: Create },
    { path: '/stretgry_edit', name: 'EditStretgry', component: EditStretgry },
    { path: '/stretgry_view', name: 'View', component: View },
  ]
}

else{
  routes = [...routes, 
    { path: '/tmp', name: 'Temp', component: Temp }
  ]

}


export default routes;
