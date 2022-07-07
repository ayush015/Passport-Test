exports.testGet = (req, res) => {
  return res.json({
    name: "Ayush",
    email: "a@email.com",
  });
};

exports.test = (req, res) => {
  console.log(req.body);

  return res.json({
    Result: "API request sent successfully check your backend console",
  });
};
