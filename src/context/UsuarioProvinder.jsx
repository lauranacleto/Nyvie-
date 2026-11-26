import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";


export const UsuarioProvider = ({ children }) => {
  
    const [token, setToken] = useState(localStorage.getItem("token") == null || localStorage.getItem("token") === "undefined" ? null : localStorage.getItem("token"))
    const [usuario, setUsuario] = useState(null);

    return (
        <UsuarioContext.Provider value={{ token, setToken, usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider