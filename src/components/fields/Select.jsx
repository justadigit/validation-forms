import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../error/TextError';

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {props.anothertype ? (
        <Field as="select" name={name} {...rest} style={{ width: '70%' }}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))}
        </Field>
      ) : (
        <Field as="select" name={name} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))}
        </Field>
      )}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
