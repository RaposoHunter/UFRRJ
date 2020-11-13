module.exports = app => {
    app.get("/editar", (req, res) => {
        app.app.controllers.editar.editar(app, req, res);
    })
}