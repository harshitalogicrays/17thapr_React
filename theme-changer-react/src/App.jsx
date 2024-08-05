import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { Container } from "react-bootstrap"

function App() {
   return (
    <>
    <Header/>
    <Container>
        <Outlet/>
    </Container>
    
    </>
  )
}

export default App
