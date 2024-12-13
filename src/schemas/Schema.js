import * as Yup from "yup"

export const validationSchema  = Yup.object().shape({
    email: Yup.string().email('Valid email required').required('Email is required')
});