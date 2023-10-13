import { CotizadorProvider } from "./context/CotizadorProvider"
import AppSeguro from "./component/AppSeguro"

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>

  )
}

export default App
