
import wifi from "../assets/wifi.svg";
import { styles } from "./historicoRecorrentesStyleSheet.js";
import Header from "../components/header/header.jsx";
import Aside from "../components/aside/aside.jsx";
import exi from "../assets/exi.svg";
import { useEffect, useState } from "react";
import api from "../../services/services";
import { gerarResumo } from "../../services/IAServices";
import "../telaOverview/Carregamento.css";

const estiloPrioridade = (nome = "") => {
    const n = nome.toLowerCase();
    if (n.includes("baix")) return styles.prioridadeBaixa;
    if (n.includes("méd") || n.includes("med")) return styles.prioridadeMedia;
    return styles.prioridadeAlta;
};

const estiloStatus = (nome = "") => {
    if (nome === "Concluído") return styles.statusConcluido;
    if (nome === "Em adoção" || nome === "Em Andamento") return styles.statusAdocao;
    return styles.statusPendente;
};

const HistoricoRecorrentes = () => {

    const [recorrentes, setRecorrentes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const buscarRecorrentes = async () => {
            try {
                const response = await api.get("/Ticket");
                const agora = new Date();

                // somente tickets dos últimos 7 dias
                const ticketsRecentes = response.data.filter(ticket => {
                    const diferenca = agora - new Date(ticket.dataHora);
                    return diferenca >= 0 && diferenca <= 7 * 24 * 60 * 60 * 1000;
                });

                if (ticketsRecentes.length === 0) {
                    setRecorrentes([]);
                    return;
                }

                const respostaIA = await gerarResumo(ticketsRecentes);

                if (!Array.isArray(respostaIA)) {
                    throw new Error("A IA não retornou uma lista válida.");
                }

                const descricoesIA = respostaIA.map(item =>
                    (item.description || item.descricao || "").trim().toLowerCase()
                );

                setRecorrentes(
                    ticketsRecentes.filter(ticket =>
                        descricoesIA.includes((ticket.descricao || "").trim().toLowerCase())
                    )
                );
            } catch (error) {
                console.error("Erro ao buscar recorrentes:", error);
                setErro("Não foi possível carregar os tickets recorrentes.");
            } finally {
                setCarregando(false);
            }
        };

        buscarRecorrentes();
    }, []);

    return (
        <div style={styles.container}>
            <Aside />
            <Header />

            <main style={styles.conteudo}>

                <section style={styles.categoria}>
                    <div style={styles.iconeWifi}>
                        <img
                            src={wifi}
                            alt="Ícone de Wi-Fi"
                            style={{
                                width: 44,
                                height: 44
                            }} />
                    </div>
                    <h2 style={styles.nomeCategoria}>Internet e conexão</h2>
                </section>

                <section style={styles.lista}>

                    {carregando && (
                        <div style={{ textAlign: "center", padding: "40px" }}>
                            <div className="spinner"></div>
                            <p style={{ color: "#1F3A6E" }}>Carregando...</p>
                        </div>
                    )}

                    {!carregando && erro && (
                        <p style={{ textAlign: "center", padding: "40px", color: "#A80028" }}>{erro}</p>
                    )}

                    {!carregando && !erro && recorrentes.length === 0 && (
                        <p style={{ textAlign: "center", padding: "40px", color: "#1F3A6E" }}>
                            Nenhum ticket recorrente encontrado.
                        </p>
                    )}

                    {!carregando && !erro && recorrentes.map((ticket, index) => (
                        <article key={ticket.idTicket} style={styles.ticket}>
                            <div style={styles.infoTicket}>
                                <h3 style={styles.idTicket}>#{String(index + 1).padStart(5, "0")}</h3>
                                <p style={styles.descricao}>{ticket.descricao}</p>
                            </div>
                            <div style={styles.colunaTicket}>
                                <span style={styles.rotulo}>Prioridade:</span>
                                <span style={{ ...styles.etiqueta, ...estiloPrioridade(ticket.idPrioridadeNavigation?.nome) }}>
                                    {(ticket.idPrioridadeNavigation?.nome ?? "").replace(".", " ")}
                                </span>
                            </div>
                            <div style={styles.colunaTicket}>
                                <span style={styles.rotulo}>Status:</span>
                                <span style={{ ...styles.etiqueta, ...estiloStatus(ticket.idStatusTicketNavigation?.nome) }}>
                                    {ticket.idStatusTicketNavigation?.nome}
                                </span>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default HistoricoRecorrentes;
