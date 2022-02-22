import React from 'react';
import CardInput from '../fields/CardInput';
import CheckBox from '../fields/Checkbox';
import DatePicker from '../fields/DatePicker';
import Input from '../fields/Input';
import RadioButtons from '../fields/RadioButton';
import Select from '../fields/Select';
import TextArea from '../fields/TextArea';

const Controls = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'checkbox':
      return <CheckBox {...rest} />;
    case 'radiobutton':
      return <RadioButtons {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    case 'cardInput':
      return <CardInput {...rest} />;
    default:
      return null;
  }
};

export default Controls;
