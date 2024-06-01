import { useState } from "react"
import MeuContexto from "../contexts/meuContext"
export default MeuProvider = ({children}) => {
  const [valor,setValor] = useState('valor inicial')
  return(
     <MeuContexto.Provider value={{valor, alterarValor: setValor} } >
         {children}
     </MeuContexto.Provider>
  )
}