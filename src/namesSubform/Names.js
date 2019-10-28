import React, {Fragment} from 'react'
import {Field, ErrorMessage} from 'formik'

import {withNameSpace} from '../utility'

const Names = (props) => {

    const {namespace} = props

    return(
        <div className="component name">
            <div className="inputWrapper">
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name={withNameSpace(namespace, 'firstName')} id="firstName"/>
                <label htmlFor='firstName'><ErrorMessage  name={ withNameSpace(namespace,'firstName')} /></label>
            </div>
            <div className="inputWrapper">
                <label htmlFor="middleName">Middle Name</label>
                <Field type="text" name={withNameSpace(namespace, 'middleName')} id="middleName"/>
                <label htmlFor='middleName'><ErrorMessage  name={ withNameSpace(namespace,'middleName')} /></label>
            </div>
            <div className="inputWrapper">
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name={withNameSpace(namespace, 'lastName')} id="lastName"/>
                <label htmlFor='lastName'><ErrorMessage  name={ withNameSpace(namespace,'lastName')} /></label>
            </div>
        </div>
    )
}

export default Names