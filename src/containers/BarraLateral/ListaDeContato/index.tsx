import Contato from '../../../components/Contato'
import { Container } from './styles'

const ListaDeContato = () => (
  <Container>
    <p>2 contato marcados como : &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContato
