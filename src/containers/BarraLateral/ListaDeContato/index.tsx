import Contato from '../../../components/Contato'
import { Container } from './styles'

const contatos = [
  {
    nome: 'João Carlos Borges',
    email: 'joaocarlosifsc@hotmail.com',
    telefone: 48991268854,
    status: 'família'
  },
  {
    nome: 'Maria de Souza',
    email: 'marias@hotmail.com',
    telefone: 48991268854,
    status: 'amigo'
  },
  {
    nome: 'Pedro José',
    email: 'josepedro@hotmail.com',
    telefone: 48991268854,
    status: 'trabalho'
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
