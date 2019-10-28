import React, {useState} from 'react'
import {withFormik, Form} from 'formik'
import * as Yup from 'yup'

import Address from './addressSubform/Address'
import addressInitialVals from './addressSubform/initialValues'
import addressValidationSchema from './addressSubform/addressValidation'

import Phone from './phoneSubform/Phone'
import phoneInitialVals from './phoneSubform/initialValues'
import phoneSchemaSelect from './phoneSubform/phoneValidation'

import Email from './emailSubform/Email'
import emailInitialVals from './emailSubform/initialValues'
import emailValidationSchema from './emailSubform/emailValidation'

const UpdateTest = () => {

  const [hideMailingAddress, toggleMailingAddress] = useState(true)
  
  const showHideMailingAddress = () => {
    toggleMailingAddress(!hideMailingAddress)
  }

  return(
    <div className='wrapper'>
      <Form>
        <h2>Update Contact Information</h2>
        <p>Please provide your personal contact information rather than work contact information where possible (e.g. address, email, home/cell number), to ensure that we can stay in touch with you. </p>
        <p>Remember, your relationship with us lasts longer than your employment relationship. </p>
        <h3>Principal Address</h3>
        <p>Please note all income tax slips will be mailed to the Principal Address.</p>
        <Address 
          namespace='principalAddress' 
        />
        <h3>Mailing Address</h3>
        <div className="mailingAddressCheck">
        <input type="checkbox" id='showMailing' checked={hideMailingAddress} onChange={showHideMailingAddress}/>
          <label htmlFor="showMailing">Same as principal address</label>
        </div>
        {hideMailingAddress ? null : <Address  namespace='mailingAddress' />}
        <h3>Phone Numbers (optional)</h3>
        <Phone 
          namespace='homePhone'
          label='Home'
          
        />
        <Phone 
          namespace='cellPhone'
          label='Cell'
          
        />
        <Phone 
          namespace='businessPhone'
          label='Business'
          
        />
        <h3>Email Address</h3>
        <Email 
          namespace='email'
          title='Email'
        />
        <button>Save</button>
      </Form>

    </div>
  )  
}


const validationSchema =  Yup.object().shape({
      principalAddress: addressValidationSchema,
      mailingAddress: addressValidationSchema,
      homePhone: phoneSchemaSelect,
      cellPhone: phoneSchemaSelect,
      businessPhone: phoneSchemaSelect,
      email: emailValidationSchema,
})
  

export default withFormik({
  mapPropsToValues: ({principalAddres, mailingAddress, homePhone, cellPhone, businessPhone, email}) => {
    return({
      principalAddress: principalAddres || addressInitialVals,
      mailingAddress: mailingAddress || addressInitialVals,
      homePhone: homePhone || phoneInitialVals,
      cellPhone: cellPhone || phoneInitialVals,
      businessPhone: businessPhone || phoneInitialVals,
      email: email || emailInitialVals,
    })
  },
  validationSchema:  validationSchema,
})(UpdateTest)