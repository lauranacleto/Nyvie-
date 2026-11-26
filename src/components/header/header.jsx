
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
            const resposta = await api.get("/notificacao");
            setNotificacoes(resposta.data);
        } catch (error) {
            console.error("Erro ao buscar notificações:", error);
        }
    };

    return (
        <>
    {aberto && (
    <div
        style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            zIndex: 998
        }}
        onClick={() => setAberto(false)}
    />
    )}
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
                            <p style={{marginLeft: 10, marginTop: 10 }}>Você não possui notificações.</p>
                        ) : (
                            notificacoes.map((item) => {

                                const tipo = tiposNotificacao[item.tipo] || tiposNotificacao.mensagem;

                                return (
                                    <div key={item.idNotificacao} style={styles.cardNotificacao}>

                                        <div style={{
                                            ...styles.iconeNotificacao,
                                            backgroundColor: tipo.cor
                                        }}>
                                            <img
                                                src={item.tipoNotificacao?.nome == "Criar" ? iconFinalizado : iconFinalizado}
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
                                                {item.tipoNotificacao?.nome == "Criar" ? "O ticket foi criado " : "ticket"}
                                            </strong>

                                            <p style={styles.mensagemNotificacao}>
                                                {item.tipoNotificacao?.nome == "Criar" ? "O ticket foi criado com sucesso" : "ticket"}
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
    </>
    );
};

export default Header;