const { userRegister, userLogin } = require("../services/authService.js");
const {
  validateSignUpRequestFields,
  validateLoginRequestFields,
} = require("../utils/validate");

async function registerUser(req, res) {
  const body = req.body;
  validateSignUpRequestFields(body);

  const responseObj = await userRegister(body);
  if (responseObj.status === "success") {
    return res.status(201).json(responseObj.message);
  } else {
    return res.status(500);
  }
}

async function loginUser(req, res) {
  const body = req.body;
  validateLoginRequestFields(body);

  const responseObj = await userLogin(req);
  if (responseObj.status === "success") {
    
    // headers should append to response with a separate middleware function
    res.set("Authorization", `Bearer ${responseObj.message.jwtToken}`);
    return res.status(200).json(responseObj.message);
  } else {
    return res.status(responseObj.statusCode).json(responseObj.message);
  }
}

module.exports = {
  registerUser,
  loginUser
};
