const userModel = require('../model/modelUser');

const getData = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
};
module.exports.getData = getData;