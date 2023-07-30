const connection = require('../dbConnection/dbconnection')

const createNewUser = (req, res, next) => {
  let user_table = req.body;
  query = "insert into user_table (name,email,password,role) value(?,?,?,?)";
  connection.query(
    query,
    [user_table.name, user_table.email, user_table.password,user_table.role],
    (err, results) => {
      if (!err) {
        return res
          .status(201)
          .json({ message: "user Added Sucsessfully!!", data: user_table });
      } else {
        return res.status(500).json(err);
      }
    }
  );
};

const getAllUsers = (req, res, next) => {
  let query = "select *from user_table;";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(401).json(err);
    }
  });
};


const updateUserById = (req,res,next) =>{
    const id = req.params.id;
    let user_table = req.body;
    let query = "UPDATE user_table SET name=?,email=?,password=? WHERE id=?";
    connection.query(query,[user_table.name,user_table.email,user_table.password,id],(err,results)=>{
        if(!err){
            if(results.affectedRows === 0){
                return res.status(404).json({message:"user id not found"});
            }
            return res.status(200).json({message:"user is updated"});
        }
        else{
            return res.status(400).json(err);
        }
    })

}


const deleteUserById = (req,res,next) =>{
    const id = req.params.id;
    let query = "delete from user_table where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
           if(results.affectedRows === 0){
            return res.status(404).json({message:"user id not found"});
           }
          return res.status(200).json({message:"user is deleted!!"});
        }
        else{
            return res.status(400).json(err);
        }
    })
        

}


module.exports = {  getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById };
