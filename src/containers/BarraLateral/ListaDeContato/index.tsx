import Contato from '../../../components/Contato'
import { Container } from './styles'
import * as enums from '../../../utils/enums/Contato'

const contatos = [
  {
    nome: 'João Carlos Borges',
    email: 'joaocarlosifsc@hotmail.com',
    telefone: 48991268854,
    status: enums.Status.FAMILIA
  },
  {
    nome: 'Maria de Souza',
    email: 'marias@hotmail.com',
    telefone: 48991268854,
    status: enums.Status.AMIGOS
  },
  {
    nome: 'Pedro José',
    email: 'josepedro@hotmail.com',
    telefone: 48991268854,
    status: enums.Status.TRABALHO
  }
]

const ListaDeContato = () => (
  <Container>
    <p>2 contato marcados como : &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
            status={c.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContato
