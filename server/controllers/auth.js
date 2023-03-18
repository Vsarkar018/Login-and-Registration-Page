const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequest, Unauthorized } = require("../errors");

const register = async (req, res) => {
  const {email} = req.body;
  const user = await User.create({ ...req.body,email:email.toLowerCase() });
  const token = user.CreateJwt();
  res.status(StatusCodes.CREATED).send({
    user: {
      name:user.name
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const nemail = email.toLowerCase();
  if (!nemail || !password) {
    throw new BadRequest("Please Provide email and password");
  }
  const user = await User.findOne({ nemail });
  if (!user) {
    throw new Unauthorized("Invalid Credentials");
  }
  const isPasswordCorrect = await user.ComparePassword(password);
  if (!isPasswordCorrect) {
    throw new Unauthorized("Invalid Credentials");
  }
  const token = user.CreateJwt();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
    },
    token,
  });
};

module.exports = {
  register,
  login,
};
