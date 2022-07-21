const error = require('./error')

const phoneNumber = (req, res, next) =>
{
    try
    {
        if(req.body.phoneNumber.length > 9 || req.body.phoneNumber.length < 9)
        {
            throw new error()
        }    
        next()    
    }
    catch(e)
    {
        res.redirect('/?valid=false')
    }
}

exports.validPhone = phoneNumber