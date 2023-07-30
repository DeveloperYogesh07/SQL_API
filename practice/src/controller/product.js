const connection = require("../connecton/connection");

const createNewProduct = (req, res, next) => {
  let product = req.body;
  query = "insert into product (name,discription,price) value(?,?,?)";
  connection.query(
    query,
    [product.name, product.discription, product.price],
    (err, results) => {
      if (!err) {
        return res
          .status(201)
          .json({ message: "product Added Sucsessfully!!", data: product });
      } else {
        return res.status(500).json(err);
      }
    }
  );
};

const GetAllProducts = (req, res, next) => {
  let query = "select *from product;";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(400).json(err);
    }
  });
};


const updateById = (req,res,next) =>{
    const id = req.params.id;
    let product = req.body;
    let query = "UPDATE product SET name=?,discription=?,price=? WHERE id=?";
    connection.query(query,[product.name,product.discription,product.price,id],(err,results)=>{
        if(!err){
            if(results.affectedRows === 0){
                return res.status(400).json({message:"product id not found"});
            }
            return res.status(200).json({message:"product is updated"});
        }
        else{
            return res.status(400).json(err);
        }
    })

}


const deleteById = (req,res,next) =>{
    const id = req.params.id;
    let query = "delete from product where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
           if(results.affectedRows === 0){
            return res.status(400).json({message:"product id not found"});
           }
          return res.status(200).json({message:"product is deleted!!"});
        }
        else{
            return res.status(400).json(err);
        }
    })
        

}


module.exports = { createNewProduct, GetAllProducts, updateById,deleteById };
