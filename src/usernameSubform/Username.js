import React, {Fragment} from 'react'
import {Field, ErrorMessage} from 'formik'

const Username = (props) => {
  const {namespace} = props

  return(
    <Fragment>
      <div className="inputWrapper component username">
          <label htmlFor="username">User Name</label>
            <Field type="text" id="username" name={`${namespace}.username`}/>
          <label htmlFor='username'><ErrorMessage  name={`${namespace}.username`} /></label>
      </div>

    </Fragment>
  )
}

export default Username