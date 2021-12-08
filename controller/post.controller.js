const userModel = require('../model/modelUser');

const PostData = (req,res) =>{
    const user = new userModel(req.body);
    user.save();
    res.json({
        status: 'User Saved'
    });

}
module.exports.PostData = PostData;







