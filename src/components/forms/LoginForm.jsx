import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Controls from '../controls/Controls';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format!').required('Required!'),
    password: Yup.string().required('Required!'),
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
          <Controls name="email" label="Email" type="email" control="input" />
          <Controls
            name="password"
            label="Password"
            type="password"
            control="input"
          />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
