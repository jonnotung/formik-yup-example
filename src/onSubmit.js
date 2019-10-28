import Moment from 'moment'

const onSubmit = (values, {resetForm, setStatus, setSubmitting, props}) => {
    console.log(values)
    //check which inputs have been entered
    //to activate onSubmit with empty form, need to bypass formik's validation check - remove validationSchema argument from withFormik
    const isDateEmpty = values.date.year === ' ' && values.date.month === -1 && values.date.day === ' '
    if(isDateEmpty) {
        console.log('empty form')
    }
    
    //use moment to convert date for easier comparisons and checking
    const month = values.date.month <= 9 ? `0${values.date.month}` : values.date.month
    const day = values.date.day <= 9 ? `0${values.date.day}` : values.date.day
    const enteredDate = Moment(`${values.date.year}-${month}-${day}`)
    
    // //check if date is valid
    const isDateValid = enteredDate._isValid && !Moment().isBefore(enteredDate)

    if(!isDateValid) {
        console.log('not a valid date')
    }

    //check if email and comfirm email are the same
    const isEmailConfirmed = values.email.email === values.email.confirmEmail
    if(!isEmailConfirmed) {
        console.log('Emails do not match')
    }
}

export default onSubmit