import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeContato from './containers/BarraLateral/ListaDeContato'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeContato />
        </Container>
      </Provider>
    </div>
  )
}

export default App
