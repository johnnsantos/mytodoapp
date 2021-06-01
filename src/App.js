import Header from './components/Header'
import NavBar from './components/NavBar'
import TodosContainer from './components/TodosContainer'
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavBar />
      <TodosContainer />
    </>
  );
}

export default App;
