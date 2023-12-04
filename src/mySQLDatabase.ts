import mysql from "mysql2";


export function ConecteDatabase(hostName:string,userName:string,passwordString:string,portNumber:number)
{
    var connection = mysql.createConnection({
        host: hostName,
        user: userName,
        password: passwordString,
        port: portNumber,
        insecureAuth: true
    })

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        return connection;
    });
}

export function CreateDatabase(hostName:string,userName:string,passwordString:string,databaseName:String)
{
    const connection = mysql.createConnection({
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

