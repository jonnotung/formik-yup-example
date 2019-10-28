import React from 'react';
import {withFormik, Form, Formik} from 'formik'
import * as Yup from 'yup'


import onSubmit from './onSubmit'

import Date from './dateSubform/Date'
import dateInitialVals from './dateSubform/initialValues'
import dateSchema from './dateSubform/dateValidation'

import Names from './namesSubform/Names'
import nameSchema from './namesSubform/nameValidation'
import nameInitialVals from './namesSubform/initialValues'

import Email from './emailSubform/Email'
import emailSchema from './emailSubform/emailValidation'
import emailInitialVals from './emailSubform/initialValues'

import Address from './addressSubform/Address'
import addressInitialVals from './addressSubform/initialValues'
import addressSchema from './addressSubform/addressValidation'

import Phone from './phoneSubform/Phone'
import phoneInitialVals from './phoneSubform/initialValues'
import phoneSchema from './phoneSubform/phoneValidation'

import Username from './usernameSubform/Username'
import usernameInitialVals from './usernameSubform/initialValues'
import usernameSchema from './usernameSubform/usernameValidation'

import Password, {passwordInitialVals} from './passwordSubform/Password'
import passwordSchema from './passwordSubform/passwordValidation'


const TestForm = ({values, setFieldValue, handleChange}) => {
  
  return(
    <Form>
      <Date namespace='date' />
      <Names namespace='name' />
      <h2>Email</h2>
      <Email namespace='email' title='Email' />
      <Email namespace='confirmEmail' title='Confirm email' />
      <Address namespace='address' />
      <h2>Phone numbers</h2>
      <Phone namespace='phone'  label='Home' />
      <Phone namespace='cell' label='Cell' />
      <Phone namespace='secondary' label='Secondary' />
      <h2>User Name</h2>
      <Username namespace='username' />
      <Password namespace='password' title='Password'/>
      <button type='submit' >Submit</button>
    </Form>
  )
}

const validationScheme = Yup.object().shape({
      date: dateSchema, 
      name: nameSchema,
      email: emailSchema,
      confirmEmail: emailSchema,
      address: addressSchema,
      phone: phoneSchema,
      cell: phoneSchema,
      secondary: phoneSchema,
      username: usernameSchema,
      password: passwordSchema,
    })

export default withFormik({
  mapPropsToValues: ({date, name, email, confirmEmail, address, phone, cell, secondary, username, password}) => {
    return({
      date: date || dateInitialVals,
      name: name || nameInitialVals,
      email: email || emailInitialVals,
      confirmEmail: confirmEmail || emailInitialVals,
      address: address || addressInitialVals,
      phone: phone || phoneInitialVals,
      cell: cell || phoneInitialVals,
      secondary: secondary || phoneInitialVals,
      username: username || usernameInitialVals,
      password: password || passwordInitialVals,
    })
  },
  
  validationSchema: validationScheme,
  handleSubmit: onSubmit,
})(TestForm);
