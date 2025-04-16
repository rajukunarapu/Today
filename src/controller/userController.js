const { User } = require("../models/userModel")

exports.getuserDataController = async (req, res) => {
    try {
        const users = await User.find().select('emailId')
        res.json({ message: "Fetched the data successfull", data: users })
    } catch (error) {
        res.status(400).json({ message: "ERROR : " + error.message })
    }
}

exports.updateUserController = async (req, res) => {
    try {
        const _id = req._id;
        const { gender } = req.body
        const updateUser = await User.findOneAndUpdate({ _id }, { 'gender': gender }, { new: true })
        res.json({ message: "updated successfully", data: updateUser })
    } catch (error) {
        res.status(400).json({ message: "ERROR : " + error.message })
    }
}