const { httpCodes } = require("../constants/backendConfig");
const user = require("../models/user");

module.exports = {

    signUp: (req, res) => {
        const data = req.body;
        const responseData = {
            success: false,
            msg: "Invalid Params for Signing up.",
        };
        console.log(data);

        if (data.username && data.password) {
            user.getUserSignUpDetails(data, (err, result) => {
                if (err){
                    responseData.msg = "Error in getting Signing up Details.";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else if (result.length > 0) {
                    responseData.msg = "User already Exists.";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else {
                    user.signUp(data, (err1) => {
                        if (err1) {
                            responseData.msg = "Error in Signing Up.";
                            return res.status(httpCodes.internalServerError).send(responseData);
                        }
                        else {
                            responseData.success = true;
                            responseData.msg = "Successfully Signed Up.";
                            responseData.data = {
                                username: data.username,
                            }
                            return res.status(httpCodes.success).send(responseData);
                        }
                    })
                }
            });
        }
        else {
            res.status(httpCodes.badRequest).send(responseData);
        }
    },

    login: (req, res) => {
        const data = req.body;
        const responseData = {
            success: false,
            msg: "Invalid Params for Logging in.",
        };

        if (data.username && data.password) {
            user.login(data, (err, result) => {
                if (err) {
                    responseData.msg = "Error in Logging in.";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else if (result.length == 0) { // No user found
                    responseData.msg = "Invalid Credentials.";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else {
                    responseData.msg = 'Successfully Logged In.';
                    responseData.success = true;
                    responseData.data = {
                        id: result[0].ID,
                        username: result[0].Username,
                        userType: result[0].UserType,
                    };

                    return res.status(httpCodes.success).send(responseData);
                }
            });
        }
        else {
            res.status(httpCodes.badRequest).send(responseData);
        }
    }
}