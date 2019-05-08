const jwt = require("jsonwebtoken");

const secrets = require("../secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "sorry you cant enter : )" });
    } else {
      req.decodedToken = decodedToken;

      next();
    }
  });
};
