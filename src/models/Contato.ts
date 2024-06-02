import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  status: enums.Status
  email: string
  telefone: string
  id: number

  constructor(
    nome: string,
    status: enums.Status,
    email: string,
    telefone: string,
    id: number
  ) {
    this.nome = nome
    this.status = status
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
