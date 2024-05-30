import { useSelector } from 'react-redux'

import Contato from '../../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../../store'

const ListaDeContato = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 contato marcados como : &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
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
}

export default ListaDeContato
