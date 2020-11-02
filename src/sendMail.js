var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: "infinityitdepartment@gmail.com", //replace with the email address
      pass: "8200Commerceway*" //replace with the password
    }
  });



  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var number = req.body.number
    var reason = req.body.reason
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n number: ${number} \n reason: ${reason} \n message: ${message} `
    var mail = {
      from: name,
      to:  // receiver email,
      subject: subject,
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })