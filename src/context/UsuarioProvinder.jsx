import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";


export const UsuarioProvider = ({ children }) => {
  
    const [token, setToken] = useState(localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined" ? null : localStorage.getItem("token"))
    
    return (
        <UsuarioContext.Provider value={{ token, setToken }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider