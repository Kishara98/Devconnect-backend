const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res.status(401).json({ message: "Authorization header missing" });

  const token = authHeader.split(" ")[1];

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token 🛑" });
    }
    req.user = user;
    next();
  });
}


module.exports = {
    authenticateToken
}