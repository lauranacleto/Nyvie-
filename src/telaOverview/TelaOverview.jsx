import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/clipboard.svg"
import { Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/services";

export default function TelaOverview() {


    const [dadosTickets, setDadosTickets] = useState([]);

    const getTickets = async () => {
        try {
            const response = await api.get('/tickets');
            setDadosTickets(response.data);
        } catch (error) {
            console.error("Erro ao buscar tickets:", error);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <div style={{ display: 'flex', minHeight: '99vh', width: '100%' }}>
            <Aside />
            <div style={telaOverviewStyles.flexgrid}>
                <div style={{ flex: 1 }}>
                    <Header />

                    <div style={telaOverviewStyles.container}>
                        <div style={telaOverviewStyles.banner}>
                            <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
                            <img
                                src={icone}
                                width={100}
                                height={140}
                                alt="Icone planilha" />
                            <div>
                                <h2 style={telaOverviewStyles.saudacao}>
                                    Bom dia, Lorenzo!
                                </h2>
                                <p style={telaOverviewStyles.text}>
                                    Você tem 2 tickets em adoção
                                </p>
                            </div>
                            </div>

                            <div style={telaOverviewStyles.section}>
                                <div style={telaOverviewStyles.dados}>

                                    <section style={telaOverviewStyles.dadosTt}>
                                        <h3>12</h3>
                                        <p>Total de Tickets</p>
                                    </section>

                                    <section style={telaOverviewStyles.dadosEa}>
                                        <h3>2</h3>
                                        <p>Em adoção</p>
                                    </section>

                                    <section style={telaOverviewStyles.dadosC}>
                                        <h3>2</h3>
                                        <p>Concluídos</p>
                                    </section>

                                    <section style={telaOverviewStyles.dadosP}>
                                        <h3>2</h3>
                                        <p>Pendentes</p>
                                    </section>

                                </div>
                            </div>
                        </div>

                        <div style={telaOverviewStyles.buttons}>
                            <button
                                type="button"
                                style={telaOverviewStyles.todos}
                            >
                                Todos
                            </button>

                            <button
                                type="button"
                                style={telaOverviewStyles.recentes}
                            >
                                Recentes
                            </button>

                            <button
                                type="button"
                                style={telaOverviewStyles.recorrentes}
                            >
                                Recorrentes
                            </button>
                        </div>

                        <div style={telaOverviewStyles.subtitulo}>
                            <h2 style={telaOverviewStyles.mTickets}
                            >Meus Tickets
                            </h2>
                        </div>



                        <table style={telaOverviewStyles.table}>

                            <colgroup>
                                <col style={telaOverviewStyles.colTicket} />
                                <col style={telaOverviewStyles.colDescricao} />
                                <col style={telaOverviewStyles.colPrioridade} />
                                <col style={telaOverviewStyles.colSLA} />
                                <col style={telaOverviewStyles.colExcedido} />
                                <col style={telaOverviewStyles.colStatus} />
                            </colgroup>

                            <thead style={telaOverviewStyles.cabecalho}>
                                <tr style={telaOverviewStyles.titulos}>
                                    <th style={{ borderRadius: "15px 0 0 0" }}>N° do Ticket</th>
                                    <th style={{ textAlign: "left" }}>Descrição</th>
                                    <th>Prioridade</th>
                                    <th>SLA</th>
                                    <th>Tempo Excedido</th>
                                    <th style={{ borderRadius: "0 15px 0 0", textAlign: "left" }}>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {dadosTickets.map((item) => (
                                    <tr key={item.id} style={telaOverviewStyles.linhas}>

                                        <td style={{ ...telaOverviewStyles.td, ...telaOverviewStyles.id }}>
                                            <div style={{ width: "5%", height: "40px", backgroundColor: item.status === "Em Andamento" ? "rgb(232, 234, 108)" : item.status === "Concluído" ? "#C1EAD7" : "#FFE0E7" }}></div>
                                            #{item.id}
                                        </td>

                                        <td style={telaOverviewStyles.descricao}>
                                            {item.descricao}
                                        </td>

                                        <td style={telaOverviewStyles.prioridade}>
                                            {item.prioridade}
                                        </td>

                                        <td style={telaOverviewStyles.sla}>
                                            {item.sla}
                                        </td>

                                        <td style={telaOverviewStyles.tempoExcedido}>
                                            {item.tempoExcedido}
                                        </td>

                                        <td style={telaOverviewStyles.status}>
                                            <div style={{ width: "70%", height: "30px", 
                                                backgroundColor: item.status === "Em Andamento" ? "#e8ea6c" : item.status === "Concluído" ? "#C1EAD7" : "#FFC2D0", 
                                                borderColor: item.status === 'Em Andamento' ? '#9C8A4D' : item.status === 'Concluído' ? '#245543' : '#AB2642',
                                                color: item.status === 'Em Andamento' ? '#9C8A4D' : item.status === 'Concluído' ? '#245543' : '#AB2642',
                                                borderRadius: "22px", display: "flex", alignItems: "center", justifyContent: "center", borderWidth: "1px", borderStyle: "solid" }}>
                                                {item.status}
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
    );
}