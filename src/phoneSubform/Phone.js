import React, {Fragment} from 'react'
import {Field, ErrorMessage} from 'formik'
import MaskedInput from 'react-text-mask'

import {withNameSpace} from '../utility'

const Phone = (props) => {
    const {namespace, label} = props
    
    //input masks for phone number formats
    const domesticPhoneNumberMask = [
        /[1-9]/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];

    const internationalPhoneNumberMask = [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]

    const extensionMask = [/\d/,/\d/,/\d/,/\d/,/\d/,/\d/];


    return(
        <Fragment>
            <div className='rowWrapper component phone'>
                <div className='inputWrapper'>
                    <label htmlFor="domesticSelect">Domestic or International</label>
                    <Field 
                        name={`${namespace}.domesticSelect`}
                    >
                    {
                        ({form, field}) => {
                            const { setFieldValue, setErrors, handleChange} = form
                            
                            return(
                                <div>
                                    <select {...field} id='domesticSelect' onChange={
                                        (e)=> {
                                            handleChange(e)
                                            if(e.target.value === '-1') {
                                                setFieldValue(`${namespace}.phoneNumber`, '')
                                                setFieldValue(`${namespace}.extension`, '')
                                            }
                                            setErrors({[namespace]: {}})
                                        }
                                    }>
                                        <option value='-1'>Select</option>
                                        <option value='domestic'>Domestic (Canada or US)</option>
                                        <option value='international'>International</option>

                                    </select>
                                </div>
                            )
                        }

                    }
                    </Field>
                    <label htmlFor='domesticSelect'><ErrorMessage  name={`${namespace}.domesticSelect`} /></label>
                </div>

                <div className="phoneNumberWrapper">
                    <label htmlFor='phoneNumber'>{`${label} phone number`}</label>
                    <Field 
                        type='text' 
                        id='phoneNumber' 
                        name={`${namespace}.phoneNumber`}
                        render={
                            ({field, form}) => {
                                const domesticOrInternational = form.values[namespace].domesticSelect
                                return(
                                    <MaskedInput 
                                        {...field}
                                        mask={ domesticOrInternational === 'domestic' ? domesticPhoneNumberMask : internationalPhoneNumberMask}
                                        guide={false}
                                        disabled={domesticOrInternational === '-1'}
                                    /> 
                                )
                            }
                        } 
                    />
                    <label htmlFor='phoneNumber'><ErrorMessage  name={`${namespace}.phoneNumber`} /></label>
                </div>

                <div className='extensionWrapper'>
                    <label htmlFor='extension'>Extension</label>
                    <Field 
                        type='text' 
                        id='extension' 
                        name={`${namespace}.extension`} 
                        render={
                            ({field, form}) => {
                                const domesticOrInternational = form.values[namespace].domesticSelect
                                return(
                                    <MaskedInput 
                                        {...field}
                                        mask={extensionMask}
                                        guide={false}
                                        disabled={domesticOrInternational === '-1'}
                                    /> 
                                )
                            }
                        }
                    />
                    <label htmlFor='extension'><ErrorMessage  name={`${namespace}.extension`} /></label>
                </div>
            </div>

        </Fragment>
    )
}

export default Phone