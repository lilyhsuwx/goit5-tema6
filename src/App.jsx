import Box from './components/Box/Box'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import PageBoard from './components/PageBoard/PageBoard'
import { GlobalStyle } from './GlobalStyle'
import events from './upcoming-events.json'
import './App.css'

function App() {
  
  return (
    <>
    <GlobalStyle/>

    <Container>
      <Header/>
        <Box>
          <PageBoard event={events}/>
        </Box>
    </Container>
    </>
  )
}

export default App
