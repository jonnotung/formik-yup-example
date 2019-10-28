import * as Yup from 'yup'

const doesNameContainTrust = /^((?!(_|\s)trust(_|\s)).)*$/
const onlyAllowedCharacters = /^[a-zA-ZàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÿ_\- ']*$/

//may change max to be lawer
const schema = Yup.object().shape({
    firstName: Yup.string().required('First name required').matches(doesNameContainTrust, `must not contain 'trust' with underscores or spaces`).matches(onlyAllowedCharacters, 'Illegal characters').min(1, 'First name required').max(40).trim().strict(true),
    middleName: Yup.string().matches(doesNameContainTrust, `must not contain 'trust' with underscores or spaces`).matches(onlyAllowedCharacters, 'Illegal characters').max(40),
    lastName: Yup.string().required('Last name required').matches(doesNameContainTrust, `must not contain 'trust' with underscores or spaces`).matches(onlyAllowedCharacters, 'Illegal characters').min(1, 'Last name required').max(40).trim().strict(true),
})

export default schema