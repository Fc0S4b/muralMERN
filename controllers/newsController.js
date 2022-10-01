const createNew = async (req, res) => {
  return res.send('create new');
};
const deleteNew = async (req, res) => {
  return res.send('delete new');
};
const getAllNews = async (req, res) => {
  return res.send('get all news');
};
const updateNew = async (req, res) => {
  return res.send('update new');
};

const showStats = async (req, res) => {
  return res.send('show stats');
};

export { createNew, deleteNew, getAllNews, updateNew, showStats };
