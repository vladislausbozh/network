const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-model')
class TokenServise{
   generateTokens(payload) {
      const accessToken = jwt.sign(payload, process.env.accessToken,{expiresIn:'30m'})
      const refreshToken = jwt.sign(payload, process.env.refreshToken,{expiresIn:'30d'})
      return {
         accessToken,
         refreshToken
      }
   }

   async saveToken(userId,refreshToken) {
      const tokenData = await tokenModel.findOne({user:userId})
      if(tokenData) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
      }
      const token = await tokenModel.create({user: userId}, refreshToken)
      return token;
   }
}

module.exports = new TokenServise();