import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/group.svg"
import { useEffect, useState } from "react";
import api from "../../services/services";
import { useNavigate } from "react-router-dom";
import { gerarResumo } from "../../services/IAServices";
import ImagemSeta from "../assets/entrarT.svg"
import "./Carregamento.css"


const corPrioridade = (nome = "") => {
    const n = nome.toLowerCase();
    if (n.includes("baix")) return "#026C60";
    if (n.includes("méd") || n.includes("med")) return "#C9A801";
    if (n.includes("alt")) return "#C96B00";
    if (n.includes("crít") || n.includes("crit")) return "#AF0025";
    return "#8A94A6";
};

const corStatus = (nome = "") => {
    if (nome === "Em Andamento") return { fundo: "#C9A801", borda: "#9C8A4D" };
    if (nome === "Concluído") return { fundo: "#026C60", borda: "#245543" };
    return { fundo: "#AF0025", borda: "#AB2642" };
};

const fonte = "'Open Sans', 'Noto Sans', Inter, system-ui, sans-serif";

const divisoria = "1px solid #D5DEEA";

const celula = (extra = {}) => ({
    ...telaOverviewStyles.td,
    verticalAlign: "middle",
    height: "auto",
    padding: "12px",
    borderBottom: divisoria,
    borderRight: divisoria,
    ...extra,
});

const badge = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: 120,
    height: 26,
    margin: "0 auto",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 8,
    whiteSpace: "nowrap",
    borderWidth: 1,
    borderStyle: "solid",
};

const layout = {
    pagina: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "calc(100% - 65px)",
        minHeight: "calc(100vh - 65px)",
        marginLeft: 65,
        marginTop: 65,
        padding: "14px 10% 40px",
        backgroundColor: "#F4F9FE",
        boxSizing: "border-box",
        gap: 24,
        fontFamily: fonte,
    },
    banner: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "8px 0 24px",
        borderBottom: "1px solid #C5D0DE",
        boxSizing: "border-box",
    },
    bannerIcone: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        height: 96,
        paddingRight: 20,
        borderRight: "1px solid #C5D0DE",
        boxSizing: "border-box",
    },
    bannerTitulo: { margin: 0, color: "#0A1934", fontSize: 36, fontWeight: 700 },
    bannerTexto: { margin: "2px 0 0", color: "#0A1934", fontSize: 24, fontWeight: 400 },
    cards: { display: "flex", gap: 14, width: "100%" },
    card: {
        flex: 1,
        minWidth: 0,
        height: 104,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "12px 16px",
        backgroundColor: "#F7FBFF",
        border: "1px solid #0A1934",
        borderRadius: 4,
        color: "#0A1934",
    },
    cardNumero: { margin: 0, fontSize: 28, fontWeight: 700, lineHeight: 1.1 },
    cardTexto: { margin: 0, fontSize: 16, fontWeight: 400 },
    botoes: { display: "flex", alignItems: "center", gap: 15, width: "100%" },
    subtitulo: { width: "100%", display: "flex", alignItems: "flex-start" },
    titulo: { margin: 0, color: "#0A1934", fontSize: 32, fontWeight: 400 },
    tabela: {
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid #1F3A6E",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "none",
    },
};

export default function Overview() {

    

    const [dadosTickets, setDadosTickets] = useState([]);
    const [todosTickets, setTodosTickets] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [escolhido, setEscolhido] = useState("todos");

    const navigate = useNavigate();

    const getTickets = async () => {
        try {
            const response = await api.get('/Ticket');
            setTodosTickets(response.data);
        } catch (error) {
            console.error("Erro ao buscar tickets:", error);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    useEffect(() => {
        if (escolhido === "recentes") {

            const agora = new Date();

            setDadosTickets(
                todosTickets.filter(ticket => {
                    const dataTicket = new Date(ticket.dataHora);
                    const diferenca = agora - dataTicket;

                    return (
                        diferenca >= 0 &&
                        diferenca <= 7 * 24 * 60 * 60 * 1000
                    );
                })
            );
        }
        else if (escolhido === "recorrentes") {
            setCarregando(true)
            const definirTickets = async () => {
                try {
                    const agora = new Date();

                    const ticketsRecentes = todosTickets.filter(ticket => {
                        const dataTicket = new Date(ticket.dataHora);
                        const diferenca = agora - dataTicket;

                        return (
                            diferenca >= 0 &&
                            diferenca <= 7 * 24 * 60 * 60 * 1000
                        );
                    });

                    const respostaIA = await gerarResumo(ticketsRecentes);

                    const descricoesIA = respostaIA.map(item =>
                        (item.description || item.descricao || "")
                            .trim()
                            .toLowerCase()
                    );

                    const ticketRecorrentes = ticketsRecentes.filter(ticket =>
                        descricoesIA.includes(
                            (ticket.descricao || "").trim().toLowerCase()
                        )
                    );

                    setDadosTickets(ticketRecorrentes);
                }
                catch (error) {
                    console.log("Erro ao buscar recorrentes: ", error)
                }
                finally {
                    setCarregando(false)
                }
            }
            definirTickets()


        }
        else {
            setDadosTickets(todosTickets);
        }
    }, [escolhido, todosTickets]);;

    const cards = [
        { chave: "tt", cor: "#1F4E9E", valor: todosTickets.length, rotulo: "Total de Tickets" },
        { chave: "ea", cor: "#F29900", valor: todosTickets.filter(ticket => ticket.status === "Em adoção").length, rotulo: "Em adoção" },
        { chave: "c", cor: "#26806F", valor: todosTickets.filter(ticket => ticket.status === "Concluído").length, rotulo: "Concluídos" },
        { chave: "p", cor: "#E0264B", valor: todosTickets.filter(ticket => ticket.status === "Pendente").length, rotulo: "Pendentes" },
        { chave: "ea2", cor: "#F29900", valor: todosTickets.filter(ticket => ticket.status === "Em adoção").length, rotulo: "Em adoção" },
    ];

    return (
        <>
            <Header />
            <Aside />

            <main style={layout.pagina}>

                <div style={layout.banner}>
                    <div style={layout.bannerIcone}>
                        <img
                            src={icone}
                            width={80}
                            height={80}
                            alt="Icone grupo" />
                    </div>
                    <div>
                        <h2 style={layout.bannerTitulo}>
                            Bom dia, Lorenzo!
                        </h2>
                        <p style={layout.bannerTexto}>
                            Você tem {todosTickets.filter(ticket => ticket.status === "Em adoção").length} tickets em adoção
                        </p>
                    </div>
                </div>

                <div style={layout.cards}>
                    {cards.map(c => (
                        <section key={c.chave} style={{ ...layout.card, borderLeft: `5px solid ${c.cor}` }}>
                            <h3 style={layout.cardNumero}>{c.valor}</h3>
                            <p style={layout.cardTexto}>{c.rotulo}</p>
                        </section>
                    ))}
                </div>

                <div style={{ ...telaOverviewStyles.buttons, ...layout.botoes }}>
                    <button
                        type="button"
                        style={{ ...(escolhido === "todos" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoTodos }}
                        onClick={() => {
                            setEscolhido("todos");
                        }}
                    >
                        Todos
                    </button>

                    <button
                        type="button"
                        style={{ ...(escolhido === "recentes" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoRecente }}
                        onClick={() => {
                            setEscolhido("recentes");
                        }}
                    >
                        Recentes
                    </button>

                    <button
                        type="button"
                        style={{ ...(escolhido === "recorrentes" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoRecorrente }}
                        onClick={() => {
                            setEscolhido("recorrentes");
                        }}
                    >
                        Recorrentes
                    </button>
                </div>

                <div style={layout.subtitulo}>
                    <h2 style={layout.titulo}>Meus Tickets</h2>
                </div>

                <div style={{ ...telaOverviewStyles.tableContainer, ...layout.tabela }}>
                    <table style={{ ...telaOverviewStyles.table, width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>

                        <colgroup>
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "34%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "18%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "6%" }} />
                        </colgroup>

                        <thead style={telaOverviewStyles.cabecalho}>
                            <tr style={telaOverviewStyles.titulos}>
                                <th>N° do Ticket</th>
                                <th style={{ textAlign: "left" }}>Descrição</th>
                                <th style={{ textAlign: "center" }}>SLA</th>
                                <th style={{ textAlign: "center" }}>Prioridade</th>
                                <th style={{ textAlign: "center" }}>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {carregando ? (
                                <tr>
                                    <td colSpan="6" style={{
                                        textAlign: "center",
                                        padding: "40px"
                                    }}>
                                        <div className="spinner"></div>
                                        <p style={{ color: "#1F3A6E" }}>
                                            Carregando...
                                        </p>
                                    </td>
                                </tr>
                            ) : (
                                dadosTickets.map((item, index) => {
                                    const nomePrioridade = item.idPrioridadeNavigation?.nome;
                                    const nomeStatus = item.idStatusTicketNavigation?.nome;
                                    const status = corStatus(nomeStatus);

                                    return (
                                        <tr key={item.idTicket} style={telaOverviewStyles.linhas}>

                                            <td style={celula({ fontWeight: 700, fontSize: 18, paddingLeft: 24 })}>
                                                #{String(index + 1).padStart(4, "0")}
                                            </td>

                                            <td style={celula({ padding: "12px 24px" })}>
                                                <div style={{ width: "100%", fontSize: 15, lineHeight: "22px", wordBreak: "break-word" }}>
                                                    {item.descricao}
                                                </div>
                                            </td>

                                            <td style={celula({ textAlign: "center" })}>
                                                {item.sla}
                                            </td>

                                            <td style={celula({ textAlign: "center" })}>
                                                {nomePrioridade && (
                                                    <div style={{
                                                        ...badge,
                                                        width: 92,
                                                        height: 22,
                                                        fontSize: 11,
                                                        backgroundColor: corPrioridade(nomePrioridade),
                                                        borderColor: "transparent",
                                                    }}>
                                                        {nomePrioridade}
                                                    </div>
                                                )}
                                            </td>

                                            <td style={celula({ textAlign: "center" })}>
                                                <div style={{
                                                    ...badge,
                                                    backgroundColor: status.fundo,
                                                    borderColor: status.borda,
                                                }}>
                                                    {nomeStatus}
                                                </div>
                                            </td>

                                            <td style={celula({ borderRight: "none", textAlign: "center" })}>
                                                <img
                                                    src={ImagemSeta}
                                                    width={30}
                                                    height={30}
                                                    onClick={() => navigate(`/detalhes/:{item.idTicket}`)}
                                                />
                                            </td>

                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

            </main>
        </>
    );
}
