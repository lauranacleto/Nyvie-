
import exit from "../../assets/exit.svg";
import casa from "../../assets/casa.svg";
import create from "../../assets/create.svg";
import history from "../../assets/history.svg";
import profile from "../../assets/profile.svg";
import { styles } from "./asideStyleSheet.js";

const aside = () => {
    return (
        <aside style={styles.menu}>
                        <span style={styles.iconeMenu}>
                            <img src={casa} alt="Casa" style={{ width: 24, height: 24 }} />
                        </span>
                        <span style={styles.iconeMenu}>
                            <img src={create} alt="Criar" style={{ width: 24, height: 24 }} />
                        </span>
                        <span style={styles.iconeMenu}>
                            <img src={profile} alt="Perfil" style={{ width: 24, height: 24 }} />
                        </span>
                        <span style={styles.iconeMenu}>
                            <img src={history} alt="Histórico" style={{ width: 24, height: 24 }} />
                        </span>
                        <span style={styles.menuSair}>
                            <img src={exit} alt="Sair" style={{ width: 24, height: 24 }} />
                        </span>
                    </aside>
    )
}

export default aside