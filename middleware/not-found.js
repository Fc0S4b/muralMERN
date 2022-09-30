const notFoundMiddleware = (req, res) => {
  res.status(404).send('No existe la ruta');
};

export default notFoundMiddleware;
