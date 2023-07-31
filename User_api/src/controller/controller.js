const connection = require("../dbConnection/dbconnection");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const createNewUser = (req, res, next) => {
  let user = req.body;
  const salt = genSaltSync(10);
  user.password = hashSync(user.password, salt);
  query = "insert into user_table (name,email,password,role) value(?,?,?,?)";
  connection.query(
    query,
    [user_table.name, user_table.email, user_table.password, user_table.role],
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

const updateUserById = (req, res, next) => {
  const id = req.params.id;
  let user_table = req.body;
  const salt = genSaltSync(10);
  user_table.password = hashSync(user_table.password, salt);
  let query = "UPDATE user_table SET name=?,email=?,password=? WHERE id=?";
  connection.query(
    query,
    [user_table.name, user_table.email, user_table.password, id],
    (err, results) => {
      if (!err) {
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "user id not found" });
        }
        return res.status(200).json({ message: "user is updated" });
      } else {
        return res.status(400).json(err);
      }
    }
  );
};

const deleteUserById = (req, res, next) => {
  const id = req.params.id;
  let query = "delete from user_table where id=?";
  connection.query(query, [id], (err, results) => {
    if (!err) {
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "user id not found" });
      }
      return res.status(200).json({ message: "user is deleted!!" });
    } else {
      return res.status(400).json(err);
    }
  });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  let query = "select *from user_table where email=?";
  connection.query(query, [email], (err, results) => {
    if (err) {
      return res.status(400).json(err);
    }
    if (!results[0]) {
      return res.status(404).json({
        sucsess: 0,
        data: "invalid email or password!!",
      });
    }
    // console.log(results[0]);
    const result = compareSync(password, results[0].password);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, "qwe1234", {
        expiresIn: "1h",
      });
      return res.json({
        succsess: 1,
        message: "login sucsessfully",
        token: jsontoken,
      });
    } else {
      return res.json({
        succsess: 0,
        message: "invalid email or password",
      });
    }
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUserById,
  deleteUserById,
  login,
};
