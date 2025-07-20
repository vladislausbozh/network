const nodemailer = require('nodemailer');

class MailServise {

   constructor () {
      this.transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         secure: true,
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
         },
      })
   }

   async sendActivationMail(to,link) {
      try {
         await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Активация лоха ${process.env.API_USL}`,
            text: `Для активации аккаунта перейдите по ссылке: ${link}`
         });
         console.log('Почта успешно отправлена.');
      } catch (error) {
         console.error('Ошибка при отправке почты:', error);
      }
   }
}

module.exports = new MailServise();