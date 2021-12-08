const userModel = require('../model/modelUser');
const deleteUser = (req, res) => {
    userModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json({
                status: 'User Delete'
            });
        }
    });
}

module.exports.deleteUser = deleteUser;