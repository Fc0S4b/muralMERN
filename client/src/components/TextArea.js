const TextArea = ({ name, value, handleChange }) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        Noticia
      </label>
      <textarea
        name={name}
        value={value}
        cols="100"
        rows="10"
        className="boxText"
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default TextArea;
