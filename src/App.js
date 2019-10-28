import React, {Fragment} from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'

import TestForm from './TestForm'
import UpdateTest from './UpdateTest'
import MultiStep from './MultiStep'
import ServerValidation from './ServerValidation'

const App = ({values, setFieldValue, handleChange}) => {
  
  return(
    <BrowserRouter>
      <Fragment>
        <NavLink to='/test-form' activeStyle={{color: 'red'}}>General Test Form</NavLink>
        <NavLink to='/update-test' activeStyle={{color: 'red'}}>Update Test Form</NavLink>
        <NavLink to='/multistep-form' activeStyle={{color: 'red'}}>Multi-step Form </NavLink>
        <NavLink to='/server-validation' activeStyle={{color: 'red'}}>Server Validation</NavLink>

        <Route path='/test-form' component={TestForm} />
        <Route path='/update-test' component={UpdateTest} />
        <Route path='/multistep-form' component={MultiStep} />
        <Route path='/server-validation' component={ServerValidation} />
      </Fragment>
    </BrowserRouter>
  )
}

export default App


