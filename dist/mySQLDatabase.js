"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatabase = exports.ConecteDatabase = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
function ConecteDatabase(hostName, userName, passwordString, portNumber) {
    var connection = mysql2_1.default.createConnection({
        host: hostName,
        user: userName,
        password: passwordString,
        port: portNumber,
        insecureAuth: true
    });
    connection.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        return connection;
    });
}
exports.ConecteDatabase = ConecteDatabase;
function CreateDatabase(hostName, userName, passwordString, databaseName) {
    const connection = mysql2_1.default.createConnection({
        host: hostName,
        user: userName,
        password: passwordString,
        port: 3306,
        insecureAuth: true
    });
    const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
    connection.query(createDatabaseQuery, (error) => {
        if (error) {
            console.error('Error creating database:', error);
            throw error;
        }
        console.log(`Database '${databaseName}' successfully created.`);
        return connection;
    });
}
exports.CreateDatabase = CreateDatabase;
