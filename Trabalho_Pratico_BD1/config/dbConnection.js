let mysql = require("mysql");

const connMySQL = () => {
    console.log("Conexão estabelecida");

    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "academia"
    });
}

module.exports = () => {
    console.log("O autoload carregou o módulo de conexão com o BD");
    return connMySQL;
};