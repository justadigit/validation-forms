import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from '../error/TextError';

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {props.anothertype ? (
        <Field name={name} id={name} {...rest} style={{ width: '40%' }} />
      ) : (
        <Field name={name} id={name} {...rest} />
      )}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
