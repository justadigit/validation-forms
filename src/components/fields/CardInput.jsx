import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { ErrorMessage, Field } from 'formik';
import TextError from '../error/TextError';

function CardInput(props) {
  const { label, name, value, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            isRequired
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
              <Input id={name} {...rest} {...field} />
              <InputRightElement
                paddingX={5}
                children={[
                  <Icon
                    as={FaCcVisa}
                    marginY={5}
                    w="20px"
                    color={
                      field.value.toString().charAt(0) === '4' &&
                      !form.errors[name] &&
                      field.value.length <= 16
                        ? '#038cfc'
                        : 'gray'
                    }
                    key="1"
                  />,
                  <Icon
                    as={FaCcMastercard}
                    marginY={5}
                    w="20px"
                    color={
                      field.value.toString().charAt(0) === '5' &&
                      !form.errors[name] &&
                      field.value.length <= 16
                        ? '#ff4000'
                        : 'gray'
                    }
                    key="2"
                  />,
                ]}
              />
              {console.log('form', form)}
            </InputGroup>
            <ErrorMessage name={name} component={TextError} />
          </FormControl>
        );
      }}
    </Field>
  );
}

export default CardInput;
