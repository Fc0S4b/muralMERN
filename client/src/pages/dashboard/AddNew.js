import { FormRow, Alert, FormRowSelect, TextArea } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import useTitle from '../../utils/useTitle';

const AddNew = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    headline,
    description,
    newLocation,
    newType,
    newTypeOptions,
    status,
    statusOptions,
    newText,
    handleChange,
    clearValues,
    createNew,
    editNew,
  } = useAppContext();
  useTitle('Editar noticia');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!headline || !description || !newLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editNew();
      return;
    }
    createNew();
  };
  const handleNewInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Editar noticia' : 'Agregar noticia'}</h3>
        {showAlert && <Alert />}
        {/* headline */}
        <div className="form-center">
          <FormRow
            type="text"
            name="headline"
            value={headline}
            labelText="Titular"
            handleChange={handleNewInput}
          />
          {/* description */}
          <FormRow
            type="text"
            name="description"
            value={description}
            labelText="Descripción"
            handleChange={handleNewInput}
          />
          {/* location*/}
          <FormRow
            type="text"
            name="newLocation"
            value={newLocation}
            labelText="Ubicación"
            handleChange={handleNewInput}
          />
          {/* job type */}
          <FormRowSelect
            labelText="Tipo de noticia"
            name="newType"
            value={newType}
            handleChange={handleNewInput}
            list={newTypeOptions}
          />
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleNewInput}
            list={statusOptions}
          />
        </div>
        {/* text-area */}
        <div className="newText">
          <TextArea
            name="newText"
            value={newText}
            handleChange={handleNewInput}
          />
        </div>
        <div className="btn-container">
          <button
            className="btn btn-block clear-btn"
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
          >
            Limpiar campos
          </button>
          <button
            className="btn btn-block submit-btn"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Enviar
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddNew;
