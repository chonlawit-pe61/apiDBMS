require('dotenv').config();
const userModel = require('../config/Database');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const loginFacebook = async (req, res) => {
    try {
        const response = await axios({
            method: 'get',
            url: "https://graph.facebook.com/v12.0/me?fields=id%2Cemail%2Cfirst_name%2Clast_name%20%2Cpicture&access_token=EAAPh857T8F4BAAAeeF5aBkIZCZAPTPFQFZBteVkz3jtWVFLBOvohJ3COouyKhNhBe5VFqh3HxiVXP9i3dDa3cxjeRQYxNi9beBPCZCIpzjD4a9xCHipHelPx1HcmpeasNNaArrDk8ThgX2HcuSdkmSBcLf5h4dsYELPRUOskypFVmHLO6xx7V1Aibm5YaHeWr4jFWN88ds80kZAcdP70dzJEGzvuIVA0uqsf4fb0Jh38BZBy6ZA695a"
        })
        // console.log(response.data);
        const result = response.data
        if (result) {
            //create token
            const token = jwt.sign(
                {
                    "user_email": result.email,
                    "user_id": result.id
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "30s"
                }
            )
            result.token = token;
            // console.log(result.token);
            res.send(result);
        }

    } catch (error) {
        // console.log(error);
    }
}
module.exports.loginFacebook = loginFacebook