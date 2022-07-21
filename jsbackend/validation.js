const phoneNumber = (req, res, next) =>
{
    if(req.body.phoneNumber.length > 9 || req.body.phoneNumber.length < 9)
    {
        res.redirect('/?valid=false')
    }
    else
    {
        next()
    }
}

exports.validPhone = phoneNumber