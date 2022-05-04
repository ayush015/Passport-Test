const users = [
  {
    name: "Aman Sharma",
    email: "amansharmaofficial@gmail.com",
  },
  {
    name: "Ayush Srivastava",
    email: "ayushsri@gmail.com",
  },
  {
    name: "Kamsera ",
    email: "Kamsera@gmail.com",
  },
  {
    name: "Khandi ",
    email: "khandi@gmail.com",
  },
];

exports.user = (req, res) => {
  return res.json(users);
};
