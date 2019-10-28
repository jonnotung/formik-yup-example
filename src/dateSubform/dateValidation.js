import * as Yup from 'yup'
import Moment from 'moment'

const currentYear = Moment().get('year')

const schema = Yup.object().shape({
    year: Yup.number().typeError('Please enter a year').min(1900, `Year must be between 1900 and ${currentYear}`).max(currentYear, `Year must be between 1900 and ${currentYear}`),
    day: Yup.number().typeError('Please enter a day').min(1, 'Enter a date between 1 and 31').max(31, 'Enter a date between 1 and 31'),
    month: Yup.number().min(1, 'Please select a month').max(12)
})

export default schema