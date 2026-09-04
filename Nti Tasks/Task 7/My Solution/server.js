const express = require('express');
const app = express();
const productRouter =require("./Routes/products.route.js");

const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
 res.status(200).json({
  success:true,
  message:"Welcome To Server"
 })
});

app.use("/products",productRouter);



app.use((req,res)=>{
res.status(404).send("<h1>pageNotFound<h2>");
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




