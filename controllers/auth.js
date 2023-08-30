const {response} = require('express');
const { validargoogleIdToken } = require('../helpers/google-verify-token');

const googleAuth = async(req, res = response) =>{
    const token = req.body.token;
    if(!token){
        return res.json({
            ok: false,
            msg: 'no hay token'
        })
    }
    const googleUser = await validargoogleIdToken(token);
    if(!googleUser){
        return res.status(404).json({ 
            ok: false,
        })
    }
    res.json({
        ok: true,
        googleUser
    });
}
module.exports = {
    googleAuth
}