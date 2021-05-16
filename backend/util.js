import jwt from 'jsonwebtoken';

import config from './config';

const getToken = (user) => {

    return jwt.sign({
        _id:user._id,
        name:user.user.name,
        email:user.user.email,
        isAdmin:user.user.isAdmin,
    },  
        config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

export{
    getToken
}