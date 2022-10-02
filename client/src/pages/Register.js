import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterWrapper';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log('ya está registrado');
    } else {
      registerUser(currentUser);
    }
    console.log('valores!!', values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {showAlert && <Alert />}
        <h3>{values.isMember ? 'Acceder' : 'Registrarse'}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="nombre"
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
          labelText="contraseña"
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
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
