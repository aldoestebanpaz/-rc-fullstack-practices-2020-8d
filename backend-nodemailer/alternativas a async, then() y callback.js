

// Callback function
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.send(err)
      return console.log('Error occurs');
    }
    res.send(req.body)
    return console.log('Email sent!!!');
  });


// Promise implementation with .then()
transporter.sendMail(mailOptions).then((err, data) => {
    if (err) {
        res.send(err)
        return console.log('Error occurs');
    }
    res.send(req.body)
    return console.log('Email sent!!!');
});



