"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDatabase = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
function ConnectDatabase(hostName, userName, passwordString, portNumber, databaseName) {
    const connection = mysql2_1.default.createConnection({
        host: hostName,
        user: userName,
        password: passwordString,
        port: portNumber,
        insecureAuth: true
    });
    const connectToDatabase = () => {
        return new Promise((resolve, reject) => {
            connection.connect((err) => {
                if (err) {
                    console.error('Error connecting to the database:', err);
                    reject(err);
                    return;
                }
                console.log('Connected to the database!');
                const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
                connection.query(createDatabaseQuery, (error) => {
                    if (error) {
                        console.error('Error creating database:', error);
                        reject(error);
                        return;
                    }
                    console.log(`Database '${databaseName}' successfully created.`);
                    resolve();
                });
            });
        });
    };
    const closeConnection = () => {
        return new Promise((resolve, reject) => {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing database connection:', err);
                    reject(err);
                    return;
                }
                console.log('Connection closed successfully.');
                resolve();
            });
        });
    };
    connectToDatabase()
        .then(() => closeConnection())
        .then(() => {
        console.log('Database connection closed.');
        createTables(hostName, userName, passwordString, portNumber, databaseName);
    })
        .catch((error) => {
        console.error('An error occurred:', error);
    });
}
exports.ConnectDatabase = ConnectDatabase;
function createTables(hostName, userName, passwordString, portNumber, databaseName) {
    const connection = mysql2_1.default.createConnection({
        host: hostName,
        user: userName,
        password: passwordString,
        port: portNumber,
        database: databaseName
    });
    const createUsersTableQuery = `
            CREATE TABLE IF NOT EXISTS Users (
                UserID INT AUTO_INCREMENT PRIMARY KEY,
                Username VARCHAR(255) NOT NULL,
                Email VARCHAR(255) NOT NULL,
                Password VARCHAR(255) NOT NULL
            );
        `;
    const createPasswordDataTableQuery = `
            CREATE TABLE IF NOT EXISTS PasswordData (
                PasswordID INT AUTO_INCREMENT PRIMARY KEY,
                UserID INT,
                Title VARCHAR(255),
                Username VARCHAR(255),
                Password VARCHAR(255),
                URL VARCHAR(255),
                AdditionalInfo TEXT,
                FOREIGN KEY (UserID) REFERENCES Users(UserID)
            );
        `;
    const createGroupsTableQuery = `
        CREATE TABLE IF NOT EXISTS Groupstable (
            GroupID INT AUTO_INCREMENT PRIMARY KEY,
            UserID INT,
            GroupName VARCHAR(255),
            Description TEXT,
            FOREIGN KEY (UserID) REFERENCES Users(UserID)
        );
        `;
    const createPasswordCategoriesTableQuery = `
            CREATE TABLE IF NOT EXISTS PasswordCategories (
                CategoryID INT AUTO_INCREMENT PRIMARY KEY,
                UserID INT,
                CategoryName VARCHAR(255),
                FOREIGN KEY (UserID) REFERENCES Users(UserID)
            );
        `;
    connection.query(createUsersTableQuery, handleQueryResult);
    connection.query(createPasswordDataTableQuery, handleQueryResult);
    connection.query(createGroupsTableQuery, handleQueryResult);
    connection.query(createPasswordCategoriesTableQuery, handleQueryResult);
    function handleQueryResult(error) {
        if (error) {
            console.error('Error creating table:', error);
            throw error;
        }
        console.log('Table created successfully.');
    }
    connection.end();
}
