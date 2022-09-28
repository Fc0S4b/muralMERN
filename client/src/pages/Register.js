import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form onSubmit={onSubmit}>
      <Logo />
      {values.showAlert && <Alert />}
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {!values.isMember && (
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
      )}
      <FormRow
        type="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
      />
      <FormRow
        type="password"
        name="password"
        value={values.password}
        handleChange={handleChange}
      />

      <button type="submit">submit</button>
      <p>
        {values.isMember ? 'Aún no registrado?' : 'Ya estás registrado?'}
        <button type="button" onClick={toggleMember}>
          {values.isMember ? 'Register' : 'Login'}
        </button>
      </p>
    </form>
  );
};
export default Register;
