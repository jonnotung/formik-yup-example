import * as Yup from 'yup'

const onlyAllowedCharacters = /^[a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÿ\-\/ ']+$/
const onlyAllowedCharactersOptional = /^[a-zA-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÿ_\- ']*$/
const canadaPostalCodeRules = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
const unitedStatesPostCodeRules = /^[0-9]{5}(?:-[0-9]{4})?$/

//~!$%^_{}|"<>?[]

const addressSchema = Yup.object().shape({
    addressLineOne: Yup.string().required('Address required').matches(onlyAllowedCharacters, 'No special characters allowed').trim().strict(true).min(1, 'Address required').max(40),
    aptSuite: Yup.string().matches(onlyAllowedCharactersOptional),
    addressLineTwo: Yup.string().matches(onlyAllowedCharactersOptional),
    province: Yup.string().required().matches(onlyAllowedCharacters).trim().strict(true).min(2, 'Select or enter a province/state/territory').max(40),
    city: Yup.string().required().matches(onlyAllowedCharacters).trim().strict(true).min(1).max(40),
    country: Yup.string().required(),
    postalCode: Yup.string().required().trim().strict(true)
        .when('country', (country, schema) => {
        if(country === 'Canada') {
            return schema.matches(canadaPostalCodeRules, 'Must match Canadian postal code format')
        } else if (country === 'United States') {
            return schema.matches(unitedStatesPostCodeRules, 'Must match US postal code format')
        }
    }),
})


export default addressSchema