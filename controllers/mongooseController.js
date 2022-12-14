// @ts-check

const connect = require('./mongooseConnect');
const User = require('../models/user');

connect();

const db = {
  getUser: async (userId) => {
    try {
      const findUser = await User.findOne({ id: userId });
      if (!findUser) return false;
      return findUser;
    } catch (err) {
      console.log(err);
      return { status: 'unexpected', err };
    }
  },
};

module.exports = db;
