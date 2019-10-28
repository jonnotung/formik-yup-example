import React, {Fragment} from 'react'
import {Field, ErrorMessage} from 'formik'

import {withNameSpace} from '../utility'

//need 2nd email field for confirmation

const Email = (props) => {

    const{namespace, title} = props

    return(
        <Fragment>
            <div className="inputWrapper component email">
                <label htmlFor="email">{title}</label>
                <Field type="email" id="email" name={withNameSpace(namespace, 'email')}/>
                <label htmlFor='email'><ErrorMessage  name={ withNameSpace(namespace,'email')} /></label>
            </div>

        </Fragment>
    )
}

export default Email