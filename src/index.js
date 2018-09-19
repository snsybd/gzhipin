import React from  'react'
import ReactDom from  'react-dom'
import {HashRouter,Route,Switch} from  'react-router-dom'
import {Provider} from 'react-redux'
import  store from './redux/store'
import  main from './containers/main/main'
import  login from './containers/login/login'
import  register from './containers/register/register'


ReactDom.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/login' component={login}/>
            <Route parh='/register'component={register}/>
              <Route component={main}/>
        </Switch>
      </HashRouter>
    </Provider>
),document.getElementById('root'))