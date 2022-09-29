const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        className="form-input"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
