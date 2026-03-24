import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="pt-16">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App