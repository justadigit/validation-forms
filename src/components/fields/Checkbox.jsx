import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../error/TextError';
const CheckBox = (props) => {
  const { label, name, id, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ form, field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.toString().includes(option.value)}
                />
                <label htmlFor={option.value} style={{ display: 'inline' }}>
                  {option.key}
                </label>
                {/* {console.log('form', form)} */}
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckBox;
