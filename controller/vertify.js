require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkVertify = (req, res) => {
    
    const token = req.headers.authorization.split(" ")[1] ;
    try {
        var decoded = jwt.verify(token, process.env.TOKEN_KEY)
        res.json({
            success: true, message: "login success"
        })
    }
    catch (err) {
        res.json({ success: false, message: "login failed" })

    }
}
module.exports.checkVertify = checkVertify