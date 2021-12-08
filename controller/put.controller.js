
const userModel = require('../model/modelUser');

const updateData = async(req, res) => {
    userModel.findByIdAndUpdate(req.params.id, {
        $set: await req.body}, 
    (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json({
                status: 'User Updated Successfully',
            });
        }
    })
}

module.exports.updateData = updateData;


