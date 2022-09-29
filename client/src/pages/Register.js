import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterWrapper';

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
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {values.showAlert && <Alert />}
        <h3>{values.isMember ? 'Acceder' : 'Registrarse'}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="nombre"
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
          name="contraseña"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Enviar
        </button>
        <p>
          {values.isMember ? 'Aún no registrado? ' : 'Ya estás registrado? '}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? 'Registrarse' : 'Acceder'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
