import * as Yup from 'yup'

const schema = Yup.object().shape({
    email: Yup.string().required('Email required').email('Please enter a proper email format').trim().strict(true),
    confirmEmail: Yup.string().required('Email required').email('Please enter a proper email format').trim().strict(true),
})

export default schema