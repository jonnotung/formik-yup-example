import React, {Fragment, useState} from 'react'
import {Field, ErrorMessage} from 'formik'

const Password = (props) => {
  const { namespace, title} = props
  
  const [isPasswordHidden, setPasswordHidden] = useState(true)

  return(
    <Fragment>
      <div className="inputWrapper component password">
          <label htmlFor="password">{`${title}`}</label>
            {/* <Field type="text" id="password" name={`${namespace}.password`}/> */}
            {/* 
            <Field name={`${namespace}.password`}  
              render={
                ({field, form}) => {
                  console.log(field)
                  return(
                    <input {...field} type="text" id="password"/>
                  )
                }
              }
            /> */}

          <Field name={`${namespace}.password`} >
            {
              ({field, form}) => {
                console.log({field, form})
                return(
                  <div className='passwordWrapper'>
                    <input {...field} type={isPasswordHidden ? 'password' : 'text'} id="password"/>
                    <label onClick={ () => { setPasswordHidden(!isPasswordHidden)} }>Show/hide</label>
                  </div>
                )
              }
            }
          </Field>
          
          <label htmlFor='password'><ErrorMessage  name={`${namespace}.password`} /></label>
      </div>
  </Fragment>
  )
}

export const passwordInitialVals = {
  password: ''
}

export default Password