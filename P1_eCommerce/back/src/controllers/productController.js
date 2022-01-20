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
    },

    addProduct: (req, res) => {
        const data = req.body
        const responseData = {
            success: false,
            msg: "Invalid Params for Adding new Product."
        };
        console.log(req.body);
        if (data.name && data.price && data.description && data.categoryId && data.vendorId) {
            product.addProduct(data, (err, result) => {
                if (err) {
                    responseData.msg = "Error in Adding new Product.";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else {
                    responseData.success = true;
                    responseData.msg = "Sucessfully added new product";
                    responseData.data = result;

                    return res.status(httpCodes.success).send(responseData)
                }
            })
        }
        else {
            return res.status(httpCodes.badRequest).send(responseData);
        }
    },

    getProductDetails: (req, res) => {
        
        const data = req.body;
        const responseData = {
            success: false,
            msg: "Invalid Params for fetching Product details"
        };

        if (data.productId && data.userId){
            product.getProductDetails(data, (err, result) => {
                if (err){
                    responseData.msg = "Error in fetching Product Details";
                    return res.status(httpCodes.internalServerError).send(responseData);
                }
                else {
                    responseData.success = true;
                    responseData.msg = "Sucessfully fetched Product Details";
                    responseData.data = result;

                    return res.status(httpCodes.success).send(responseData)
                }
            });
        }
        else {
            return res.status(httpCodes.badRequest).send(responseData)
        }
    }
}