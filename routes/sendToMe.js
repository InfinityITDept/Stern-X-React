// const express = require('express')
// const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')


const transport = {
    //all of the configuration for making a site send an email.
    host: 'smtp.ionos.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD
    }
  };

  

  const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

/*  sendToMeRouter.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: process.env.THE_EMAIL,
      to: 'support@stern-x.com',
      subject: req.body.subject,
      text: `
      From: ${req.body.name} 
      Contact: ${req.body.email}
      Phone: ${req.body.phone}
      Message: 

      ${req.body.text}`
    }
    */

    // setup e-mail data with unicode symbols
    var mailOptions = {
      from: '"Stern-X Support ?" <support@stern-x.com>', // sender address
      to: 'support@stern-x.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ?', // plaintext body
      html: '<b>Hello world ?</b>' // html body
    };



// error handling goes here.
    transporter.sendMail(mail, (err,data) => {
        if(err) {
        res.json({
            status: 'fail'
        })
        } else {
        res.json({
            status: 'success'
        })
        }
    });


module.exports = sendToMeRouter;
