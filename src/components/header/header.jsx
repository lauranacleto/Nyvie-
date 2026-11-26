
import logo from "../../assets/logo.svg";
import notification from "../../assets/notification.svg";
import { useState, useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext.jsx";
import api from "../../../services/services.js";
import { styles } from "./headerStyleSheet.js";
import iconFinalizado from "../../assets/check.svg";
import iconAtualizacao from "../../assets/status.svg";
import iconAlerta from "../../assets/danger.svg";
import iconMensagem from "../../assets/message.svg";
import notificacaoAzul from "../../assets/notificacaoazul.svg";

const Header = () => {

    const { usuario } = useContext(UsuarioContext);
    const [aberto, setAberto] = useState(false);
    const [notificacoes, setNotificacoes] = useState([]);

    const tiposNotificacao = {
        finalizado: {
            icone: iconFinalizado
        },
        atualizacao: {
            icone: iconAtualizacao,
            backgroundColor: "#6E389A"
        },
        alerta: {
            icone: iconAlerta
        },
        mensagem: {
            icone: iconMensagem,
            backgroundColor: "#0A3882"
        }
    };

    const abrirNotificacoes = async () => {
        if (aberto) {
            setAberto(false);
            return;
        }

        setAberto(true);

        try {
            const resposta = await api.get("http://localhost:3000/notificacoes");
            setNotificacoes(resposta.data);
        } catch (error) {
            console.error("Erro ao buscar notificações:", error);
        }
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: 150, height: 150, marginRight: 8 }}
                />
            </h1>

            <div style={styles.usuario}>
                <button onClick={abrirNotificacoes}
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        padding: 0,
                        cursor: "pointer"
                    }}>
                    <span style={styles.sino}>
                        <img
                            src={notification}
                            alt="Notificação"
                            style={{ width: 24, height: 24 }}
                        />
                    </span>
                </button>

                {aberto && (
                    <div style={styles.painelNotificacoes}>
                        <h3 style={styles.tituloNotificacoes}>
                            <img
                                src={notificacaoAzul}
                                alt="Notificações"
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    objectFit: "contain"
                                }}
                            />
                            Notificações
                        </h3>

                        {notificacoes.length === 0 ? (
                            <p>Você não possui notificações.</p>
                        ) : (
                            notificacoes.map((item) => {
                                const tipo = tiposNotificacao[item.tipo] || tiposNotificacao.mensagem;

                                return (
                                    <div key={item.id} style={styles.cardNotificacao}>

                                        <div style={{
                                            ...styles.iconeNotificacao,
                                            backgroundColor: tipo.cor
                                        }}>
                                            <img
                                                src={tipo.icone}
                                                alt={item.tipo}
                                                style={{
                                                    width: "35px",
                                                    height: "35px",
                                                    objectFit: "contain"
                                                }}
                                            />
                                        </div>

                                        <div style={styles.conteudoNotificacao}>
                                            <strong style={styles.tituloCard}>
                                                {item.titulo}
                                            </strong>

                                            <p style={styles.mensagemNotificacao}>
                                                {item.mensagem}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })
                        )}
                    </div>
                )}

                <div style={styles.avatar}></div>
            </div>
        </header>
    );
};

export default Header;