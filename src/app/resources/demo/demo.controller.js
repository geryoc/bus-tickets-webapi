const demoController = {
  get: (req, res) => {
    return res.send("GET /demos" + " " + req.query.search);
  },
  post: (req, res) => {
    return res.send("POST /demos" + " " + req.body.search);
  },
};

module.exports = demoController;
