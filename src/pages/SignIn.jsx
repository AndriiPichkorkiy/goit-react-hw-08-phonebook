import { useDispatch } from "react-redux";

import { signin } from '../redux/auth/auth-operations';
import { Formik, Field, ErrorMessage } from 'formik';
import { FormStyled, InputGroup } from "styled/Formik.styled";


const SignIn = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Length have to be more than 6 symbols';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(signin(values));
                    setSubmitting(false);

                }}
            >
                {({ isSubmitting }) => (
                    <FormStyled>
                        <InputGroup>
                            <label htmlFor="email">Email: </label>
                            <Field id="email" type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="password">Password: </label>
                            <Field id="password" type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </InputGroup>
                        <InputGroup>
                            <button type="submit" disabled={isSubmitting}>
                                Sign in
                            </button>
                        </InputGroup>

                    </FormStyled>
                )}
            </Formik>

        </>
    );
}

export default SignIn;