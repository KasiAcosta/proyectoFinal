const CartMongoController=require('../../controllers/mongo/cartMongo.js')

class CarritoDaoMongo extends CartMongoController{
    constructor(){
        super ('carts',{
            id: { type: Number, required: true },
	        timestamp: { type: Number},
	        productos: { type: Array },
        })
    }
}

module.exports= CarritoDaoMongo