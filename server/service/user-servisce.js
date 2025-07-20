const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-tdo')

class UserServise {
   async registration(email, password) {
      const candidate = await UserModel.findOne({email})
   
      // if (candidate) {
      //    throw new Error(`пользователь с почтовым адресом ${email} существует `)
      // }
      // до этого правльно, если пользователя нет candidate === null

      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();  

      const user = await UserModel.create({email, password: hashPassword, activationLink})
      console.log('ddddddddddddddddddddddddddddddddddd')
      await mailService.sendActivationMail(email, activationLink)

      const userDto = new UserDto(user)
      const tokens = tokenService.generateTokens({...userDto})

      await tokenService.saveToken(userDto.id, tokens.refreshToken)

      return {...tokens, user: userDto}
   }
}

module.exports = new UserServise();