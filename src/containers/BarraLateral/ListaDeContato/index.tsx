import { useSelector } from 'react-redux'

import Contato from '../../../components/Contato'
import { MainContainer, Titulo } from '../../../styles'
import { RootReducer } from '../../../store'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLocaleLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio == 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }
  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e ${termo}` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: ${`${valor}`} ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltrage(contatos.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
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
    </MainContainer>
  )
}

export default ListaDeContato
