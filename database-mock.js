import { randomUUID } from "node:crypto"

export class Databasemock {

    #alunos = new Map()

    //Simula um select na tabela
    list () {
        return Array.from(this.#alunos.entries())
    }

    //Simula um insert into na tabela
    create(aluno) {
        const alunoid = randomUUID()
        this.#alunos.set(alunoid, aluno)
    }

    update(id, aluno) {
        this.#alunos.set(id, aluno)
    }

    delete(id) {
        this.#alunos.delete(id)
    }


}