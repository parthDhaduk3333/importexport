const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // For TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'integroexim007@gmail.com', // Your Gmail address
    pass: 'ygoc dnle pcdz wwsb'
  },
});

// Email options

module.exports.sendmailfunc = async (data) => {
  const mailOptions = {
    from: 'integroexim007@gmail.com', // Sender address
    to: 'info@integroexim.com', // Recipient's email
    subject: 'Inqury for the product', // Subject line
    html: `
                    <h3>
                        Name : 
                    </h3>
                    <p>${data.name}</p>
                    <h3>
                        Email : 
                    </h3>
                    <p>${data.email}</p>
                    <h3>
                        Contact No : 
                    </h3>
                    <p>${data.contact}</p>
                    <h3>
                        Message : 
                    </h3>
                    <p>${data.message}</p>
                    <h3>
                        Product : 
                    </h3>
                    ${`<a href="${data.url}">See Product</a>`}
  `, // HTML body
  };
  
  // Send email
  try {
    console.log('Email sent before:');
    const send = await transporter.sendMail(mailOptions);
    console.log('Email sent:', send.response);
  } catch (err) {
    console.log('Email Error',err)
  }

}
