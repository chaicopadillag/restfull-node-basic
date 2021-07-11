const fs = require('fs');

const fileData = fs.readFileSync('./data/data.json', 'utf-8');
const data = JSON.parse(fileData);

const getAllUsers = (req, res) => {
  const query = req.query;
  res.json({
    type: 'GET',
    data: data,
    query,
  });
};

const createUser = (req, res) => {
  res.json({
    type: 'POST',
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { user } = req.params;

  const skill = data.find((skil) => skil.id === parseInt(user));
  res.json({
    type: 'PUT',
    data: skill,
  });
};

const deleteUser = (req, res) => {
  res.json({
    type: 'DELETE',
    data: [
      { id: 's2sf5s6f5s6f', name: 'React JS' },
      { id: '5sd4f54f5', name: 'Node JS' },
    ],
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
