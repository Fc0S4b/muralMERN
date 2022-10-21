import { useState, useEffect } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';

import Wrapper from '../../assets/wrappers/DashboardFormPage';
import useTitle from '../../utils/useTitle';

const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    changeNavTitle,
  } = useAppContext();

  useEffect(() => {
    changeNavTitle('Perfil');
    // eslint-disable-next-line
  }, []);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  useTitle('Perfil');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Ajustes de perfil</h3>
        {showAlert && <Alert />}
        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            labelText="Nombre"
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="lastName"
            value={lastName}
            labelText="Apellido"
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            labelText="Localidad"
            handleChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Por favor espere...' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
