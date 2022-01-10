const { httpCodes } = require("../constants/backendConfig");
const product = require("../models/product");

module.exports = {

    listProducts: (req, res) => {
        
        const data = req.body;
        const responseData = {
            success: false,
            msg: "Invalid Params for fetching products"
        };

        product.listProducts(data, (err, result) => {
            if (err) {
                return res.status(httpCodes.internalServerError).send(responseData);
            }
            else {
                responseData.success = true;
                responseData.msg = "Sucessfully fetched products";
                responseData.data = result;

                return res.status(httpCodes.success).send(responseData)
            }
        })
    }
}