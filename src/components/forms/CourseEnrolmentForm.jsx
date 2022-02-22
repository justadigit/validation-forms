import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Controls from '../controls/Controls';
function CourseEnrolmentForm() {
  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skillSet: [],
    courseDate: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email format!').required('Required!'),
    bio: Yup.string().required('Required!'),
    course: Yup.string().required('Required!'),
    skillSet: Yup.array().required('Required!'),
    courseDate: Yup.string().required('Required!'),
  });
  const onSubmit = (values) => console.log('Form Data', values);

  const courseOptions = [
    { key: 'Select a course', value: '' },
    { key: 'Web Development', value: 'webdev' },
    { key: 'Mobile Development', value: 'mobiledev' },
    { key: 'Software Development', value: 'softwaredev' },
  ];
  const skillSetOptions = [
    { key: 'React Native', value: 'reactNative' },
    { key: 'React', value: 'react' },
    { key: 'Node', value: 'node' },
    { key: 'Python', value: 'python' },
    { key: 'Flutter', value: 'flutter' },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form autoComplete="off">
            <Controls control="input" name="email" label="Email" type="email" />
            <Controls control="textarea" name="bio" label="Bio" />
            <Controls
              control="select"
              name="course"
              label="Course"
              options={courseOptions}
            />
            <Controls
              control="checkbox"
              name="skillSet"
              label="Skillset"
              options={skillSetOptions}
            />
            <Controls control="date" name="courseDate" label="Course Date" />
            <button disabled={!formik.isValid} type="submit">
              Enroll
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CourseEnrolmentForm;
