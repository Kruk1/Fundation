const mailer = require('nodemailer')

const mail = async (msg) =>
{
    const transporter = await mailer.createTransport(
        {
            service: "Gmail",
            port: 587,
            secure: false,
            auth:  
            {
              user: "piecyk070",
              pass: "uqykxijopnrffnhf",
            }
        }
    )
    
    let info = await transporter.sendMail({
        from: 'piecyk070@gmail.com', 
        to: "albertkr@wp.pl", 
        subject: "New message!",
        text: `${msg.email} ${msg.phoneNumber} ${msg.msg}`,
        html: `${msg.email} ${msg.phoneNumber} ${msg.msg}`
    })

    return info
}

exports.send = mail