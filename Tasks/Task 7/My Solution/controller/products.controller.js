const products = require("../Modules/products");


exports.getAllProduct=(req,res)=>{
 res.status(200).json({
 success:true,
  count : products.length,
  data  : products,
 })
  }


  exports.getOneProduct=(req,res)=>{
  const product=products.find(p=>p.id==req.params.id); 
  if(!product){
  return res.status(404).json(
    {
      success :false,
      Message :"Id IS Not Found"
    }
  
  )};
  
  res.status(200).json({
    success : true,
    data : product
  });
  
  }
  exports.addProduct=(req,res)=>{
  
  const {name,price,category,description}= req.body;
  
  
   if (!name || !price||!category||!description)
     {
      return res.status(400).json({
        success: false,
        error: 'Please insert All Data',
      });
  
    }
  const product ={id : Number(products[products.length-1].id)+1 ,...req.body};
  
  products.push(product);
  
    res.status(201).json({
      success: true,
      data: product,
    });
  
  }

  exports.deleteProduct=(req, res) => {

const index = products.findIndex(p => Number(p.id) === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Product not found',
    });
  }

  products.splice(index, 1);

  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
}

exports.updateProduct=(req,res)=>{
const index = products.findIndex(p => Number(p.id) === Number(req.params.id));
if(index==-1)
{
  return res.status(404).json({
    success :false,
    data:"Please Enter True iD"
  })
}

products[index]={...products[index],...req.body}
 

 res.status(200).json({
    success: true,
    data: products[index],
  });
}