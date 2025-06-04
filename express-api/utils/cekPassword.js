const bcrypt = require('bcrypt')
const UsersModel = require("../models/users");

const passwordCheck = async (nim, pass) => {
    const userData = await UsersModel.findOne({ where: { nim: nim } });
    const compare = await bcrypt.compare(pass, userData.password)
    return {compare, userData}
}

module.exports = passwordCheck