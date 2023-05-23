import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import routes from '../routes'
import {accessrole} from "../views/config";
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  var routeurl = ''
if(accessrole==='Admin')
 routeurl = '/user'
else if(accessrole==='Bydel Director')
 routeurl = '/stretgry'
else
 routeurl = '/tmp'


  return (
    <main className="c-main ">
      <CContainer fluid  className="ourmainlayout" style={{backgroundColor:'#E5E5E5'}}>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to={routeurl} />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
