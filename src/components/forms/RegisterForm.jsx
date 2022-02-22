import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Controls from '../controls/Controls';

const RegisterForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid Email Format!').required('Required!'),
    password: Yup.string().required('Required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match!')
      .required('Required!'),
  });
  const onSubmit = (values) => {
    console.log('Values', values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form autoComplete="off">
          <Controls
            name="username"
            label="Username"
            type="text"
            control="input"
          />
          <Controls name="email" label="Email" type="email" control="input" />
          <Controls
            name="password"
            label="Password"
            type="password"
            control="input"
          />
          <Controls
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            control="input"
          />
          <button disabled={!formik.isValid} type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
