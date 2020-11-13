module.exports = app => {
    const {body} = require("express-validator");

    app.post("/queryManager", [
            body("nome", "Preencha o nome do aluno.").not().isEmpty(),
            body("cpf")
                .not().isEmpty().withMessage("O CPF é obrigatório.")
                .isLength({min: 11, max: 11}).withMessage("CPF inválido."),
            body("sexo", "Informe o sexo do aluno.").not().isEmpty(),
            body("telefone")
                .not().isEmpty().withMessage("Informe o Telefone.")
                .isLength({min: 11, max: 14}).withMessage("Número de telefone inválido."),
            body("endereco", "Informe o endereço do aluno.").not().isEmpty(),
            body("data_nascimento", "Forneça uma data válida.").isDate({format: "YYYY-MM-DD"})
        ],
        (req, res) => {
            app.app.controllers.queryManager.query(app, req, res);
    });

    app.put("/queryManager", (req, res) => {
        app.app.controllers.queryManager.query(app, req, res);
    })

    app.delete("/queryManager", (req, res) => {
        app.app.controllers.queryManager.query(app, req, res);
    })
}