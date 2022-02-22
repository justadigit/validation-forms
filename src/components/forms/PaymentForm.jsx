import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import valid from 'card-validator';
import Controls from '../controls/Controls';
function PaymentForm() {
  const [price, setPrice] = useState(0);
  const initialValues = {
    selectedItem: '',
    totalCost: price,
    cardNumber: '',
    expMth: '',
    expYear: '',
    securityNum: '',
  };
  const validationSchema = Yup.object({
    selectedItem: Yup.array().required('Required!'),
    totalCost: Yup.number().when('selectedItem', {
      is: (value) => setPrice(value),
      then: Yup.number().required('Required!'),
    }),
    cardNumber: Yup.string().test(
      'test-number',
      'Credit Card number is invalid',
      (value) => valid.number(value).isValid
    ),
    expMth: Yup.string().required('Required!'),
    expYear: Yup.string().required('Required!'),
    securityNum: Yup.number().required('Required'),
  });
  const onSubmit = (values) => console.log('Payment Data', values);
  const selectedOptions = [
    { key: 'item 1', value: 25 },
    { key: 'item 2', value: 34 },
    { key: 'item 3', value: 14 },
  ];
  const expMthOptions = [
    { key: '- -', value: '' },
    { key: '01', value: 1 },
    { key: '02', value: 2 },
    { key: '03', value: 3 },
    { key: '04', value: 4 },
    { key: '05', value: 5 },
    { key: '06', value: 6 },
    { key: '07', value: 7 },
    { key: '08', value: 8 },
    { key: '09', value: 9 },
    { key: '10', value: 10 },
    { key: '11', value: 11 },
    { key: '12', value: 12 },
  ];
  const expYearOptions = [
    { key: '- - - -', value: '' },
    { key: '2022', value: 2022 },
    { key: '2023', value: 2023 },
    { key: '2024', value: 2024 },
    { key: '2025', value: 2025 },
    { key: '2026', value: 2026 },
    { key: '2027', value: 2027 },
    { key: '2028', value: 2028 },
    { key: '2029', value: 2029 },
    { key: '2030', value: 2030 },
    { key: '2031', value: 2031 },
    { key: '2032', value: 2032 },
    { key: '2033', value: 2033 },
    { key: '2034', value: 2034 },
    { key: '2035', value: 2035 },
    { key: '2036', value: 2036 },
    { key: '2037', value: 2037 },
    { key: '2038', value: 2038 },
    { key: '2039', value: 2039 },
    { key: '2040', value: 2040 },
    { key: '2041', value: 2041 },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Controls
              name="selectedItem"
              label="Select Item"
              control="checkbox"
              options={selectedOptions}
              setPrice={setPrice}
            />
            <Controls
              name="totalCost"
              label="Toal Cost"
              control="input"
              disabled="disabled"
            />
            <Controls
              name="cardNumber"
              label="Card Number"
              control="cardInput"
              type="text"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Controls
                name="expMth"
                label="Exp Mth"
                control="select"
                options={expMthOptions}
                anothertype="security"
              />
              <Controls
                name="expYear"
                label="Exp Mth"
                control="select"
                options={expYearOptions}
                anothertype="security"
              />
              <Controls
                name="securityNum"
                label="Num"
                control="input"
                type="text"
                anothertype="security"
              />
            </div>
            <button type="submit" my="3">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PaymentForm;
