const users = [
  {
    name: "Aman Sharma",
    email: "amansharmaofficial@gmail.com",
  },
  {
    name: "Ayush Srivastava",
    email: "ayushsri@gmail.com",
  },
];

exports.user = (req, res) => {
  return res.json(users);
};
