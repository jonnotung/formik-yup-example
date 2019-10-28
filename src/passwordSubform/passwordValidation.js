import * as Yup from 'yup'
//.min(6, 'Minimum password length: 6 characters')
const containsLetter = /[A-Za-z]+/
const containsDigit = /\d+/

export default Yup.object().shape({
  password: Yup.string().max(40, 'Maximum password length: 40 characters').matches(containsLetter, 'Password must contain a lower case or upper case letter').matches(containsDigit, 'Password must contain a numerical digit').required('Password required')
})