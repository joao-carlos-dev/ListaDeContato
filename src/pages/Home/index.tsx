import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContato from '../../containers/BarraLateral/ListaDeContato'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeContato />
    <BotaoAdicionar />
  </>
)

export default Home
