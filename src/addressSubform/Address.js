import React, {Fragment,  useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import MaskedInput from 'react-text-mask'

import {canadaProvinces, usStates, countries} from './countryRegionSelect'
import {withNameSpace} from '../utility'

//address will prepopulate based on DB data on member
//multiple phone numbers

//mailing address option to be different, checkbox to bring up another identical form

//contact address form is the same

const Address = (props) => {
    const {namespace} = props

    const canadaPostalMask = [/[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/]
    const usPostalMask = [/[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/]
    const internationalPostalMask =  [/[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/]
    
    return(
        <div className="component address">
            <h2>Address</h2>

            <div className="rowWrapper">
                <div className='inputWrapper'>
                    <label htmlFor="addressLineOne">Address Line 1</label>
                    <Field type='text' id='addressLineOne' name={`${namespace}.addressLineOne`}/>
                    <label htmlFor='addressLineOne'><ErrorMessage  name={`${namespace}.addressLineOne`} /></label>
                </div>

                <div className='inputWrapper'>
                    <label htmlFor="aptSuite">Apt/Suite/Unit (Optional)</label>
                    <Field type='text' id='aptSuite' name={withNameSpace(namespace, 'aptSuite')}/>
                    <label htmlFor='aptSuite'><ErrorMessage  name={ withNameSpace(namespace,'aptSuite')} /></label>
                </div>

            </div>
            

            <div className='rowWrapper'>
                <div className='inputWrapper'>
                    <label htmlFor="addressLineTwo">Address Line 2 (Optional)</label>
                    <Field type='text' id='addressLineTwo' name={withNameSpace(namespace, 'addressLineTwo')}/>
                    <label htmlFor='addressLineTwo'><ErrorMessage  name={ withNameSpace(namespace,'addressLineTwo')} /></label>
                </div>

            </div>

            <div className="rowWrapper">
                <div className='inputWrapper'>
                    <label htmlFor="country">Country</label>
                    <Field  name={`${namespace}.country`} >
                        { ({field, form}) => {
                            const {handleChange, setFieldValue} = form
                            return(
                                <select {...field} id='country' onChange={
                                    (e) => {
                                        handleChange(e)
                                        setFieldValue(`${namespace}.province`, '')
                                    }}>
                                    {countries}
                                </select>
                            )
                        }
                        }
                    </Field>
                    <label htmlFor='country'><ErrorMessage  name={ withNameSpace(namespace,'country')} /></label>
                </div>


                <div className='inputWrapper'>
                    <label htmlFor="province">Province/State</label>
                    <Field >
                    {
                        ({form}) => {
                            
                            if(form.values[namespace].country === 'Canada') {
                                return (
                                    <select id='province' name={`${namespace}.province`}>
                                        {canadaProvinces}
                                    </select>
                                )
                            } else if (form.values[namespace].country === 'United States') {
                                return (
                                    <select id='province' name={`${namespace}.province`}>
                                        {usStates}
                                    </select>
                                )
                            } 
                            return <input type='text' id='province' name={`${namespace}.province`}/>
                        }
                    }
                    </Field>
                    <label htmlFor='province'><ErrorMessage  name={ withNameSpace(namespace,'province')} /></label>
                </div>

                <div className='inputWrapper'>
                    <label htmlFor="city">City</label>
                    <Field type='text' id='city' name={withNameSpace(namespace, 'city')}/>
                    <label htmlFor='city'><ErrorMessage  name={ withNameSpace(namespace,'city')} /></label>
                </div>

            </div>

            <div className='inputWrapper'>
                <label htmlFor="postalCode">Postal Code</label>
                <Field 
                    type='text' 
                    id='postalCode' 
                    name={withNameSpace(namespace, 'postalCode')}
                    render={
                        ({field, form}) => {
                           
                            let mask = internationalPostalMask
                            if(form.values[namespace].country === 'Canada') {
                                mask = canadaPostalMask
                            } else if (form.values[namespace].country === 'United States') {
                                mask = usPostalMask
                            } 
                            return(
                                <MaskedInput 
                                    {...field}
                                    mask={ mask}
                                    guide={false}
                                /> 
                            )
                        }
                    }
                />
                <label htmlFor='postalCode'><ErrorMessage  name={ withNameSpace(namespace,'postalCode')} /></label>
            </div>

            
        </div>
    )
}

export default Address