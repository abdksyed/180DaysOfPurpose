const { httpCodes } = require('../constants/backendConfig');
const category = require('../models/category');

module.exports = {
    
    listCategories: function(req, res) {
        const responseData = {
            success: false,
            msg: "Error in fetching categories"
        };
        category.listCategories(function(err, result){
            if (err) {
                return res.status(httpCodes.internalServerError).send(responseData);
            }
            else {
                responseData.success = true;
                responseData.msg = "Sucessfully fetched categories";
                responseData.data = result;

                return res.status(httpCodes.success).send(responseData)
            }
        });
    }
}