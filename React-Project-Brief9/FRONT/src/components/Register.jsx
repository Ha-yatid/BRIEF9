import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    nom: '',
    age: '',
    email: '',
    password: '',
    ville: '',
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required('Required'),
    age: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(8, 'Password must be least 8 characters').required('Requied'),
    ville: Yup.string().min(6, 'ville must be at least 6 characters').required('Required'),
  });

  const onSubmit = async (values) => {
    try {
      await registerUser(values);
      //await axios.post('http://localhost:3000/api/users/register', values);
      alert('Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label>First Name</label>
          <Field type="text" name="nom" />
          <ErrorMessage name="nom" component="div" />

          <label>Age</label>
          <Field type="Number" name="age" />
          <ErrorMessage name="age" component="div" />

          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />


          <label>ville</label>
          <Field type="ville" name="ville" />
          <ErrorMessage name="ville" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
