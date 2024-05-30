import BarraLateral from './containers/BarraLateral'
import ListaDeContato from './containers/BarraLateral/ListaDeContato'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeContato />
        </Container>
      </>
    </div>
  )
}

export default App
