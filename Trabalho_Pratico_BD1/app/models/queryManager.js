class QueryManager {
    constructor(aluno, connection) {
        this.aluno = aluno;
        this.connection = connection;
    }

    insertUser(callback) {
        /*this.connection.query(`insert into pessoa (data_nascimento, sexo, cpf, endereco, telefone, nome) values (
        "${this.aluno.data_nascimento}", "${this.aluno.sexo}", "${this.aluno.cpf}", "${this.aluno.endereco}", "${this.aluno.telefone}", "${this.aluno.nome}")`, callback);*/
        
        this.connection.query("insert into pessoa set ?", this.aluno, callback);
    }

    selectAllUsers(callback) {
        this.connection.query(`select * from pessoa`, callback);
    }

    selectUser(id, callback) {
        this.connection.query(`select * from pessoa where id = ${id}`, callback);
    }

    updateUser(id, callback) {
        this.connection.query(`update pessoa set ? where id = ${id}`, this.aluno, callback);
    }

    deleteUser(id, callback) {
        this.connection.query(`delete from pessoa where id = ${id}`, callback);
    }
}

module.exports = () => QueryManager;