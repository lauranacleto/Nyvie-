import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/group.svg"
import { useEffect, useState } from "react";
import api from "../../services/services";

export default function TelaOverview() {


    const [dadosTickets, setDadosTickets] = useState([]);
    const [todosTickets, setTodosTickets] = useState([]);
    const [escolhido, setEscolhido] = useState("todos");

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
            setDadosTickets(
                todosTickets.filter(ticket => ticket.recorrente === true)
            );
        }
        else {
            setDadosTickets(todosTickets);
        }
    }, [escolhido, todosTickets]);;

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Aside />
            <div style={telaOverviewStyles.flexgrid}>
                <div style={{ flex: 1 }}>
                    <Header />

                    <div style={telaOverviewStyles.container}>
                        <div style={telaOverviewStyles.banner}>
                            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                <img
                                    src={icone}
                                    width={130}
                                    height={130}
                                    alt="Icone grupo" />
                                <div style={{ width: "1px", height: "100px", backgroundColor: "#cbd5e1" }}></div>
                                <div>
                                    <h2 style={telaOverviewStyles.saudacao}>
                                        Bom dia, Lorenzo!
                                    </h2>
                                    <p style={telaOverviewStyles.text}>
                                        Você tem {todosTickets.filter(ticket => ticket.status === "Em adoção").length} tickets em adoção
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginTop: "10px", marginBottom: "10px" }}>
                            <section style={telaOverviewStyles.dadosTt}>
                                <h3>{todosTickets.length}</h3>
                                <p>Total de Tickets</p>
                            </section>

                            <section style={telaOverviewStyles.dadosEa}>
                                <h3>{todosTickets.filter(ticket => ticket.status === "Em adoção").length}</h3>
                                <p>Em adoção</p>
                            </section>

                            <section style={telaOverviewStyles.dadosC}>
                                <h3>{todosTickets.filter(ticket => ticket.status === "Concluído").length}</h3>
                                <p>Concluídos</p>
                            </section>

                            <section style={telaOverviewStyles.dadosP}>
                                <h3>{todosTickets.filter(ticket => ticket.status === "Pendente").length}</h3>
                                <p>Pendentes</p>
                            </section>
                            
                            <section style={telaOverviewStyles.dadosEa}>
                                <h3>{todosTickets.filter(ticket => ticket.status === "Em adoção").length}</h3>
                                <p>Em adoção</p>
                            </section>
                        </div>

                        <div style={telaOverviewStyles.buttons}>
                            <button
                                type="button"
                                style={{ ...(escolhido === "todos" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoTodos }}
                                onClick={() => {
                                    setEscolhido("todos");
                                    getTickets();
                                }}
                            >
                                Todos
                            </button>

                            <button
                                type="button"
                                style={{ ...(escolhido === "recentes" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoRecente }}
                                onClick={() => {
                                    setEscolhido("recentes");
                                    getTickets();
                                }}
                            >
                                Recentes
                            </button>

                            <button
                                type="button"
                                style={{ ...(escolhido === "recorrentes" ? telaOverviewStyles.selecionado : telaOverviewStyles.naoselecionado), ...telaOverviewStyles.botaoRecorrente }}
                                onClick={() => {
                                    setEscolhido("recorrentes");
                                    getTickets();
                                }}
                            >
                                Recorrentes
                            </button>
                        </div>

                        <div style={telaOverviewStyles.subtitulo}>
                            <h2 style={telaOverviewStyles.mTickets}
                            >Meus Tickets
                            </h2>
                        </div>


                        <div style={telaOverviewStyles.tableContainer}>
                            <table style={telaOverviewStyles.table}>

                                <colgroup>
                                    <col style={telaOverviewStyles.colTicket} />
                                    <col style={telaOverviewStyles.colDescricao} />
                                    <col style={telaOverviewStyles.colPrioridade} />
                                    <col style={telaOverviewStyles.colSLA} />
                                    <col style={telaOverviewStyles.colStatus} />
                                </colgroup>

                                <thead style={telaOverviewStyles.cabecalho}>
                                    <tr style={telaOverviewStyles.titulos}>
                                        <th style={{ borderRadius: "15px 0 0 0" }}>N° do Ticket</th>
                                        <th style={{ textAlign: "left" }}>Descrição</th>
                                        <th>SLA</th>
                                        <th style={{ textAlign: "left" }}>Prioridade</th>
                                        <th style={{ borderRadius: "0 15px 0 0", textAlign: "left" }}>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {dadosTickets.map((item, index) => (
                                        <tr key={item.idTicket} style={telaOverviewStyles.linhas}>

                                            <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.id }}>
                                                <div style={{ width: "5%", height: "50px", backgroundColor: item.idStatusTicketNavigation?.nome === "Em Andamento" ? "#feffb7" : item.idStatusTicketNavigation?.nome === "Concluído" ? "#C1EAD7" : "#FFE0E7" }}></div>
                                                #{String(index + 1).padStart(4, "0")}
                                            </td>

                                            <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.descricao }}>
                                                <div style={{ width: "100%", height: "30px" }}>
                                                    {item.descricao}
                                                </div>
                                            </td>

                                            <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.sla }}>
                                                {item.sla}
                                            </td>

                                            <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.prioridade }}>
                                                {item.idPrioridadeNavigation?.nome}
                                            </td>

                                            <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.status }}>
                                                <div style={{
                                                    width: "65%", height: "30px",
                                                    backgroundColor: item.idStatusTicketNavigation?.nome === "Em Andamento" ? "#feffb7" : item.idStatusTicketNavigation?.nome === "Concluído" ? "#C1EAD7" : "#FFC2D0",
                                                    borderColor: item.idStatusTicketNavigation?.nome === 'Em Andamento' ? '#9C8A4D' : item.idStatusTicketNavigation?.nome === 'Concluído' ? '#245543' : '#AB2642',
                                                    color: item.idStatusTicketNavigation?.nome === 'Em Andamento' ? '#9C8A4D' : item.idStatusTicketNavigation?.nome === 'Concluído' ? '#245543' : '#AB2642',
                                                    borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", borderWidth: "1px", borderStyle: "solid"
                                                }}>
                                                    {item.idStatusTicketNavigation?.nome}
                                                </div>

                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

