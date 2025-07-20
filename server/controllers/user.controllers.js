const userServisce = require('../service/user-servisce');


class UserController {

   async registration(req, res, next) {
      console.log(req.body,'данные пользователя')
      try {
         const {email, password} = req.body
         const userData = await userServisce.registration(email, password)

         res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnlly: true})
         console.log(userData)
         return res.json(userData)
      } catch (e) {
         console.log(e)
      }
   }

   async login(req, res, next) {
      try {

      } catch (e) {

      }
   }

   async logout(req, res, next) {
      try {

      } catch (e) {

      }
   }

   async activate(req, res, next) {
      try {

      } catch (e) {

      }
   }

   async refresh(req, res, next) {
      try {

      } catch (e) {

      }
   }

   async getUsers(req, res, next) {
      console.log(
         '-------------------------------'
      )
      try {
         
         res.json(['123','456'])
         // console.log(r, 'eeeeeeeeeeeeeeeeeeeeeeee')
      } catch (e) {

      }
   }
}


module.exports = new UserController();