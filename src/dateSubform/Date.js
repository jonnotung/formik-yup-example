import React, {Fragment, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import MaskedInput from 'react-text-mask'

import {withNameSpace} from '../utility'

//limit day to 2 digits, year to 4 digits

const Date = (props) => {
    const {errors, namespace} = props

    const dayMask = [/\d/, /\d/]
    const yearMask = [/\d/, /\d/, /\d/, /\d/ ]

    const [focused, setFocused] = useState({
        year: false,
        month: false,
        day: false
    })

    const whenFocused = (name) => {
        const newState = {...focused}
        newState[name] = true
        setFocused(newState)
    }

    const whenBlurred = (name) => {
        const newState = {...focused}
        newState[name] = false
        setFocused(newState)
    }

    return(
        <div className='component date'> 
            <h2>Date</h2>

            <div className='inputWrapper'>
                <label htmlFor='month'>Select month</label>
                <Field component='select' name={withNameSpace(namespace,'month')} id='month' >
                    <option value="-1"></option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </Field>
                {/* {focused.month && errors.date ? <p>{errors.date.month}</p> : null} */}
                <label htmlFor='month'><ErrorMessage  name={ withNameSpace(namespace,'month')} /></label>
            </div>

            <div className='inputWrapper'>
                <label htmlFor='day'>Enter day</label>
                <Field 
                    type='number' 
                    name={withNameSpace(namespace,'day')} 
                    id='day'
                    
                    render={
                        ({field}) => {
                            return(
                                <MaskedInput 
                                    {...field}
                                    mask={dayMask}
                                    guide={false}
                                    placeholder='DD' 
                                /> 
                            )
                        }
                    } 
                />    
                
                {/* {focused.day && errors.date ? <p>{errors.date.day}</p> : null} */}
                <label htmlFor='day'><ErrorMessage  name={ withNameSpace(namespace,'day')} /></label>
            </div>

            <div className='inputWrapper'>
                <label htmlFor='year'>Enter Year</label>
                <Field 
                    type='number' 
                    name={ withNameSpace(namespace,'year')} 
                    id='year' 
                    min='-999' 
                    max='9999'
                    
                    render={
                        ({field}) => {
                            return(
                                <MaskedInput 
                                    {...field}
                                    mask={yearMask}
                                    guide={false}
                                    placeholder='YYYY'
                                /> 
                            )
                        }
                    } 
                />
                {/* {focused.year && errors.date && errors.date.year ? <p>{errors.date.year}</p> : null} */}
                <label htmlFor='year'><ErrorMessage  name={ withNameSpace(namespace,'year')} /></label>
            </div>

        </div>
    )
}

export default Date