import * as Yup from 'yup'

const validPhoneNumber = /^[2-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/
const validInternationalNumber = /^[1-9][0-9]*$/
const validAreaCode = /^[2-9][0-9][0-9]/
const validExtension = /^[0-9]*$/

const phoneSchema = Yup.object().shape({
    domesticSelect: Yup.string().min(3, 'Please make a selection'),
    phoneNumber: Yup.string()
        .when('domesticSelect', {
            is: 'domestic',
            then: Yup.string().matches(validPhoneNumber, 'Please enter a valid format (xxx-xxx-xxxx)').matches(validAreaCode, 'Area Code must be in the range 200 - 999').required('This field is required'),
            otherwise: Yup.string().matches(validInternationalNumber, 'Please enter a valid phone number').required('This field is required'),
        }),
    extension: Yup.string().matches(validExtension, 'Enter a valid extension format').nullable(true),
})

export default phoneSchema


