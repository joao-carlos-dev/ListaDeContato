import { useSelector } from 'react-redux'

import Contato from '../../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../../store'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLocaleLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 contato marcados como : &quot;categoria&ldquo; e {termo}</p>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
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
