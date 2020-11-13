module.exports.index = (app, req, res) => {
    const connection = app.config.dbConnection();
    const queryManager = new app.app.models.queryManager(null, connection);

    queryManager.selectAllUsers((err, result) => {
        res.render("index", {alunos: result});
    });    
}