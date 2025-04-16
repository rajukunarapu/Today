const { User } = require("../models/userModel")

exports.getuserDataController = async (req, res) => {
    try {
        const users = await User.find().select('emailId gender age')
        res.json({ message: "Fetched the data successfull", data: users })
    } catch (error) {
        res.status(400).json({ message: "ERROR : " + error.message })
    }
}

exports.updateUserController = async (req, res) => {
    try {
        const _id = req._id;
        const { gender, age } = req.body
        const updateUser = await User.findOneAndUpdate({ _id }, { 'gender': gender, 'age': age }, { new: true })
        res.json({ message: "updated successfully", data: updateUser })
    } catch (error) {
        res.status(400).json({ message: "ERROR : " + error.message })
    }
}

exports.getPracticeDataController = async (req, res) => {
    try {
        const users = await User.aggregate([{ $project: { emailId: 1, age: 1, gender: 1 } }, { $skip: 2 }])
        res.json({ message: 'Data fetched successfully', data: users })
    } catch (error) {
        res.status(400).json({ message: "ERROR : " + error.message })
    }
}