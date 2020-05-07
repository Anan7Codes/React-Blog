const { User } = require('../models/user');
let auth = (req, res, next ) => {
    let token = req.cookies.xauth;
    
    User.findByToken(token, (err, user) => {
        if(err) return res.json({
            loginSuccess: false,
            message: 'Token cannot be found'
        });
        if(!user) return res.json({
            isAuth: false,
            error: true
        });

    req.token = token;
    req.user = user;
    next();
    });
};

module.exports = { auth };