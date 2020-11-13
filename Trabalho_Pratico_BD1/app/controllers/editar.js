module.exports.editar = (app, req, res) => {
    const id = req.query.id;
    const connection = app.config.dbConnection();
    const queryManager = new app.app.models.queryManager(null, connection);

    queryManager.selectUser(id, (err, result) => {
        res.render("editar", {pessoa: result[0]});
    })
}