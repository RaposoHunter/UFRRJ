const queryManager = require("../routes/queryManager");

module.exports.query = (app, req, res) => {
    const operation = req.query.op;

    if(operation == "insert") {
        const {validationResult} = require("express-validator");
        const erros = validationResult(req).array();

        if(erros.length > 0) {
            return res.status(400).json(erros);
        }

        const dados = req.body;
        const connection = app.config.dbConnection();

        //console.log(connection);

        const aluno = new app.app.models.aluno(dados);
        const connectionO = new app.app.models.connection(connection);
        const queryManager = new app.app.models.queryManager(dados, connection);

        queryManager.insertUser(() => {
            res.json({status: 200, redirect: "/?cadastrado"});
        });
    } else if(operation == "updateUser") {
        const id = req.query.id;
        const dados = req.body;
        const connection = app.config.dbConnection();

        const queryManager = new app.app.models.queryManager(dados, connection);

        queryManager.updateUser(id, () => {
            res.json({status: 200, redirect: "/?atualizado"});
        })
    } else if(operation == "deleteUser") {
        const id = req.query.id;
        const connection = app.config.dbConnection();

        const queryManager = new app.app.models.queryManager(null, connection);

        queryManager.deleteUser(id, () => {
            res.json({status: 200, redirect: "/?deletado"});
        });
    }
}