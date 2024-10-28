import Button from "./Components/Button.jsx"
import Card from "./Products/Card.jsx"
import InputBox from "./Components/InputBox.jsx"
import Nav from "./Components/Navbar/Nav.jsx"
import Products from "./Products/Products.jsx"
import Recommended from "./Recomended/Recommended.jsx"
import Sidebar from "./Components/Sidebar/Sidebar.jsx"
function App() {
  return (
    <>
      <Nav/>
      <Sidebar/>
      <Recommended/>
      <Products/>
    </>
  )
}

export default App
