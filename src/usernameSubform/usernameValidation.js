import * as Yup from 'yup'

const onlyAllowedCharacters = /^[a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇÿ_\-]*$/

export default Yup.object().shape({
  username: Yup.string().required().min(6, 'Minumun length 6 characters').max(40, 'Maximum length 4 characters').matches(onlyAllowedCharacters, 'No special characters')
})