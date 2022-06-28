import { User } from "./../types/User";
import { db } from "../db";
import { bcrypt } from 'bcryptjs';
import { OkPacket, RowDataPacket } from "mysql2";
// Get all users
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM users`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const users: User[] = [];
    rows.forEach((row) => {
      const user: User = {
        id: row.id,
        fname: row.fname,
        lname: row.lname,
        email: row.email,
        password: row.password,
        
      };
      users.push(user);
    });
    callback(null, users);
  });
};
// Get one user
export const findOne = (userId: number, callback: Function) => {
  const queryString = `SELECT * FROM users WHERE id=?`;
  db.query(queryString, userId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const user: User = {
      id: row.id,
      fname: row.fname,
      lname: row.lname,
      email: row.email,
      password: row.password
     
    };
    callback(null, user);
  });
};
// create user
export const create = (user: User, callback: Function) => {
  const queryString =
    "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)";
    console.log(user);
    let saltRounds = 10;
    let password_hash=bcrypt.hashSync(user.password, saltRounds);
  db.query(
    queryString,
    [user.fname, user.lname, user.email, password_hash],
    (err, result) => {
      if (err) {
        callback(err);
      }
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
};

// update user
export const update = (user: User, callback: Function) => {
  const queryString = `UPDATE jsusers SET nume=?, prenume=? WHERE id=?`;

  db.query(queryString, [user.nume, user.prenume, user.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// delete user
export const deleteUser = (user: number, callback: Function) => {
  console.log(user);
  const queryString = `DELETE FROM jsusers WHERE id=?`;

  db.query(queryString, [user], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};

//login query example
export const veifyPassword  = (user: User, callback: Function) => {
  const queryString = `SELECT password from users where email=?";`;
  const passwordUser = user.password;
  db.query(queryString, [user.email], (err, result) => {
    if (err) {
      callback(err);
    }
    if(result.length!=0){
      const row = (<RowDataPacket>result)[0];
      var password_hash=row.password;
	    const verified = bcrypt.compareSync(passwordUser, password_hash);
      if(verified){
        
        const user: User = {
          id: row.id,
          fname: row.fname,
          lname: row.lname,
          email: row.email,
          password: row.password
         
        };
        callback(null, user);

      }
      else{
        console.log("Password doesn't match!")
        callback(err);
      }
    }
    else{
      callback(err);
    }
  });
}



  const params=[req.username]
  connection.query(query,params,(err,rows) => {
    if(err) throw err;
    //
    var output={}
    if(rows.length!=0)
    {
    var password_hash=rows[0]["password"];
    const verified = bcrypt.compareSync(req.password, password_hash);
    if(verified)
    {
      output["status"]=1;
    }else{
      output["status"]=0;
      output["message"]="Invalid password";
    }
  
    }else{
      output["status"]=0;
      output["message"]="Invalid username and password";
    }
    response.json(output)
  
  });
  })