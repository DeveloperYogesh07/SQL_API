const { verify } = require("jsonwebtoken");

const authorization = (req, res, next) => {
  let token = req.get("authorization"); // gives the header field
  if (token) {
    token = token.slice(7);
    verify(token, "qwe1234", (err, decoded) => {
      if (err) {
        res.json({
          succsess: 0,
          message: "invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    res.json({
      succsess: 0,
      message: "Access denined!! unauthorized user",
    });
  }
};


module.exports = authorization;