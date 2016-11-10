/**
 * Created by mon on 2016/11/10.
 */
var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  }
};