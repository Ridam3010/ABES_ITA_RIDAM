
import Card from './components/card.jsx';
import Navbar from './components/Navbar.jsx';
function App() {

  return (
    <>
    <div>
      <Navbar name="ABESEC"/>
      <br />
      <Card name="Hello" age={18}/>
      <br />
      <Card name="World" age={20}/>
      <br />
      <Card name="Ridam" age={21}/>
      <br />
      <Card name="Here" age={28}/>
    </div>
    </>
  )
}

export default App