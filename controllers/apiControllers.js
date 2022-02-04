const User = require('../models/User')

module.exports = {
    addUser: async (req, res) => {
        try {
            const {
                userName,
                accountNumber,
                emailAddress,
                identityNumber,
            } = req.body;

            if (
                userName ===undefined ||
                accountNumber === undefined ||
                emailAddress === undefined ||
                identityNumber === undefined

            ) {
                res.status(404).json({message : "Lengkapi Semua Field"});
            }

            const user = await User.create({
                userName,
                accountNumber,
                emailAddress,
                identityNumber,
            });

            res.status(200).json({message: "Success Add User", user});

        } catch (error) {
            res.status(500).json({message:error});
        }
    },

    getUser : async (req, res) => {
        try {
            const userdata = await User.find();
            res.status(200).json({message: "Success Retrive Data", userdata});
        } catch (error) {
            res.status(500).json({message:error});
        } 
    },

    getUserbyID : async (req,res) => {
        const {identityNumber} = req.body;
        try {
            if (identityNumber===undefined) {
                res.status(404).json({message: "Please Input Data"});
            }
            else {
                const userdata = await User.find({identityNumber : identityNumber});
                console.log(userdata)
                if (userdata.length == 0) {
                    res.status(404).json({message : "User Not Found"});
                } else {
                    res.status(200).json({message: "Success Retrive Data", userdata});
                }
            }
            
        } catch (error) {
            res.status(500).json({message:error});
        }
    },

}