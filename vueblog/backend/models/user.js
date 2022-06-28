"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veifyPassword = exports.deleteUser = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
const db_1 = require("../db");
const bcryptjs_1 = require("bcryptjs");
// Get all users
const findAll = (callback) => {
    const queryString = `SELECT * FROM users`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const users = [];
        rows.forEach((row) => {
            const user = {
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
exports.findAll = findAll;
// Get one user
const findOne = (userId, callback) => {
    const queryString = `SELECT * FROM users WHERE id=?`;
    db_1.db.query(queryString, userId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const user = {
            id: row.id,
            fname: row.fname,
            lname: row.lname,
            email: row.email,
            password: row.password
        };
        callback(null, user);
    });
};
exports.findOne = findOne;
// create user
const create = (user, callback) => {
    const queryString = "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)";
    console.log(user);
    let saltRounds = 10;
    let password_hash = bcryptjs_1.bcrypt.hashSync(user.password, saltRounds);
    db_1.db.query(queryString, [user.fname, user.lname, user.email, password_hash], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
// update user
const update = (user, callback) => {
    const queryString = `UPDATE jsusers SET nume=?, prenume=? WHERE id=?`;
    db_1.db.query(queryString, [user.nume, user.prenume, user.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
// delete user
const deleteUser = (user, callback) => {
    console.log(user);
    const queryString = `DELETE FROM jsusers WHERE id=?`;
    db_1.db.query(queryString, [user], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.deleteUser = deleteUser;
//login query example
const veifyPassword = (user, callback) => {
    const queryString = `SELECT password from users where email=?";`;
    const passwordUser = user.password;
    db_1.db.query(queryString, [user.email], (err, result) => {
        if (err) {
            callback(err);
        }
        if (result.length != 0) {
            const row = result[0];
            var password_hash = row.password;
            const verified = bcryptjs_1.bcrypt.compareSync(passwordUser, password_hash);
            if (verified) {
                const user = {
                    id: row.id,
                    fname: row.fname,
                    lname: row.lname,
                    email: row.email,
                    password: row.password
                };
                callback(null, user);
            }
            else {
                console.log("Password doesn't match!");
                callback(err);
            }
        }
        else {
            callback(err);
        }
    });
};
exports.veifyPassword = veifyPassword;
const params = [req.username];
connection.query(query, params, (err, rows) => {
    if (err)
        throw err;
    //
    var output = {};
    if (rows.length != 0) {
        var password_hash = rows[0]["password"];
        const verified = bcryptjs_1.bcrypt.compareSync(req.password, password_hash);
        if (verified) {
            output["status"] = 1;
        }
        else {
            output["status"] = 0;
            output["message"] = "Invalid password";
        }
    }
    else {
        output["status"] = 0;
        output["message"] = "Invalid username and password";
    }
    response.json(output);
});
