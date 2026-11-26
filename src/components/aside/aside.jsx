import exit from "../../assets/exit.svg";
import casa from "../../assets/casa.svg";
import create from "../../assets/create.svg";
import history from "../../assets/history.svg";
import profile from "../../assets/profile.svg";
import createProfile from "../../assets/createProfile.svg"
import { styles } from "./asideStyleSheet.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext.jsx";


const aside = () => {

    const { setToken } = useContext(UsuarioContext);

    const sair = () => {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = "/login";
    };

    return (
        <aside style={styles.menu}>
             <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 28}}>
                <Link to="/overview" style={styles.iconeMenu}>
                    <img src={casa} alt="Casa" style={{ width: 24, height: 24 }} />
                </Link>

                <Link to="/criarTicket" style={styles.iconeMenu}>
                    <img src={create} alt="Criar" style={{ width: 24, height: 24 }}/>
                </Link>

                <Link to="/editarperfil" style={styles.iconeMenu}>
                    <img src={profile} alt="Perfil" style={{ width: 24, height: 24 }} />
                </Link>

                <Link to="/historicoEquipe" style={styles.iconeMenu}>
                    <img src={history} alt="Histórico" style={{ width: 24, height: 24 }} />
                </Link>
                <Link to="/cadastro" style={styles.iconeMenu}>
                    <img src={createProfile} alt="Criar Perfil" style={{ width: 24, height: 24 }} />
                </Link>

            </div>

            <span style={styles.menuSair} onClick={sair}>
    <img src={exit} alt="Sair" style={{ width: 24, height: 24 }} />
</span>
        </aside>
    );
};

export default aside;















