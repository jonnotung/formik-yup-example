import React, {useState} from 'react'
import {Form, withFormik, Formik} from 'formik'
import * as Yup from 'yup'

import Address from './addressSubform/Address'
import AddressValidationSchema from './addressSubform/addressValidation'
import AddressInitialVals from './addressSubform/initialValues'

import Name from './namesSubform/Names'
import NameValidationSchema from './namesSubform/nameValidation'
import NameInitialVals from './namesSubform/initialValues'

import Phone from './phoneSubform/Phone'
import phoneSchemaSelect from './phoneSubform/phoneValidation'
import PhoneInitialVals from './phoneSubform/initialValues'

import Username from './usernameSubform/Username'
import UsernameValidationSchema from './usernameSubform/usernameValidation'
import UsernameInitialVals from './usernameSubform/initialValues'

import Password, {passwordInitialVals} from './passwordSubform/Password'
import PasswordValidationSchema from './passwordSubform/passwordValidation'


const MultiStep = () => {

  const [pageStep, updateStep] = useState(0)

  const moveToNexPage = () => {
    if(pageStep < 3) {
      updateStep(pageStep + 1)
    }
  }

  const goToPreviousPage = () => {
    if(pageStep > 0) {
      updateStep(pageStep - 1)
    }
  }

  const whichFormStepToShow = (step) => {
    if(step === 0) {
      return (
        <div>
          <Username namespace={'username'}/>
          <Password namespace={'password'} title='Password'/>
          
        </div>
        
      )
    } else if (step === 1) {
      return(
        <div>
          <Name namespace={'name'} />
        </div>
      )
    } else if (step === 2) {
      return(
        <div>
          <Address namespace='address' />
        </div>
      )
    } else if (step === 3) {
      return(
        <div>
          <Phone namespace={'mainPhone'} label='Main Phone'/>
          <Phone namespace={'cellPhone'} label='Cell' />
        </div>
      )
    }
    return <Address />
  }

  return(

    <div className='wrapper'>
      <h2>Login Page Step {pageStep+1}</h2>

      <Form>
        {whichFormStepToShow(pageStep)}
      </Form>

      <button onClick={goToPreviousPage} disabled={pageStep===0}>Previous Page</button>
      <button onClick={moveToNexPage} disabled={pageStep===3}>{pageStep ===3 ? `Submit` : `Next Page`}</button>
    </div>
  )
}


const validationSchema = Yup.object().shape({
      username: UsernameValidationSchema,
      password: PasswordValidationSchema,
      name: NameValidationSchema,
      address: AddressValidationSchema,
      mainPhone: phoneSchemaSelect,
      cellPhone: phoneSchemaSelect,
    })
 

export default withFormik({
  mapPropsToValues: ({username, password, name, address, mainPhone, cellPhone}) => {
    return({
      username: username || UsernameInitialVals,
      password: password || passwordInitialVals,
      name: name || NameInitialVals,
      address: address || AddressInitialVals,
      mainPhone: mainPhone || PhoneInitialVals,
      cellPhone: cellPhone || PhoneInitialVals,
  })
  },
  validationSchema: validationSchema,
  
})(MultiStep)