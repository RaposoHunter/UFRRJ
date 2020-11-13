module.exports = app => {
    app.get("/cadastrar", (req, res) => {
        app.app.controllers.cadastrar.cadastrar(app, req, res);
    })
}