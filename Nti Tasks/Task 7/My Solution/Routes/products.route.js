
const productController=require("../controller/products.controller.js")
const Exp=require("express")


const router = Exp.Router()
router.route("/").get(productController.getAllProduct).post(productController.addProduct)


router.route("/:id").get(productController.getOneProduct).patch(productController.updateProduct)
.delete(productController.deleteProduct)


module.exports=router