// https://supsit.non-prod-pen-gcp.omers.com//api/auth/changePasswordForcurrentUser
//POST method:'POST',data:{sessionid:sessionid,currentPassword:currentPassword,newpassword:newpassword}
//sessionid "0872e107-22bc-493f-af49-0f71ade5b141-be954a6a-bc1e-45da-b07a-f2c452176cb2"
//current password: walk01

import React from 'react';
import {Form, Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import Password from './passwordSubform/Password'
import passwordValidation from './passwordSubform/passwordValidation'

const ServerValidation = () => {
 


  const validationSchema = Yup.object().shape({
    current:passwordValidation,
    new: passwordValidation,
    
  })

  function submit (values, actions) {

    const sessionid = "0872e107-22bc-493f-af49-0f71ade5b141-be954a6a-bc1e-45da-b07a-f2c452176cb2"
    const url = "https://supsit.non-prod-pen-gcp.omers.com/api/auth/changePasswordForcurrentUser"


    axios.post(url, {
      sessionid: sessionid,
      currentPassword: values.current.password,
      newpassword: values.new.password,
    })
    .then( res => {
      actions.setSubmitting(false)
      console.log(res)
      if(res.data.status !== 'pass') {

        if(res.data.message.indexOf('IAM-3030006')>=0) {
          actions.setStatus({message: 'Your new password has been used before. Please select a different password.'});
          actions.setErrors({new: {password: 'Your new password has been used before. Please select a different password.'}})
        } else {
          actions.setStatus({message: res.data.message})
        }
                
      } else {
        //submitted new password to api display success message
        actions.setStatus({message: 'Password successfully updated'})
      }
      
    })
    .catch( error => {
      actions.setSubmitting(false)
      actions.setStatus({message: error.message})
      console.log(error)
    })
  }
  


  return(
    
    <Formik
      initialValues={ {
        current: {password: ''},
        new: {password: ''},
      } }
      validationSchema={validationSchema}
      onSubmit={submit}
    >
    {
      ({status}) => {
        return (
          <Form>
            <h3>{status ? `Status: ${status.message}` : ''}</h3>
            <Password namespace='current' title='Current password' />
            <Password namespace='new' title='New password'/>
            <button type='submit'>Submit</button>
          </Form>
        )

      }
    }  
    </Formik>
  )
}

export default ServerValidation
