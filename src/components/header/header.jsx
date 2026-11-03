import logo from "../../assets/logo.svg";
import notification from "../../assets/notification.svg";

import { styles } from "./headerStyleSheet.js";
const Header = () => {
    return (
        <header style={styles.header}>
            <h1
                style={styles.logo}>
                <img src={logo} alt="Logo" style={{ width: 150, height: 150, marginRight: 8 }} />
            </h1>

            <div style={styles.usuario}>
                <span style={styles.sino}>
                    <img src={notification} alt="Notificação" style={{ width: 24, height: 24 }} />
                </span>
                <div style={styles.avatar}></div>
            </div>
        </header>
    )
}

export default Header