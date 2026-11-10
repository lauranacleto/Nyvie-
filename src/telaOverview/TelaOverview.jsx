import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/clipboard.svg"
import { Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/services";

export default function TelaOverview() {
    return (
        <div style={{ display: 'flex', minHeight: '99vh', width: '100%' }}>
            <Aside />
            <div style={telaOverviewStyles.flexgrid}>
                <div style={{ flex: 1 }}>
                    <Header />

                    <div style={telaOverviewStyles.container}>
                        <div style={telaOverviewStyles.banner}>
                            <img 
                            src={icone}
                            width={90}
                            height={150}
                            alt="Icone planilha" />

                            <h2 style={telaOverviewStyles.saudacao}>
                                Bom dia, Lorenzo!
                            </h2>
                            <p style={telaOverviewStyles.text}>
                                Você tem 2 tickets em adoção
                            </p>

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

                        <div style={telaN1Styles.buttons}>
                            <button
                                type="button"
                                style={telaN1Styles.todos}
                            >
                                Todos
                            </button>

                            <button
                                type="button"
                                style={telaN1Styles.recentes}
                            >
                                Recentes
                            </button>

                            <button
                                type="button"
                                style={telaN1Styles.recorrentes}
                            >
                                Recorrentes
                            </button>
                        </div>

                        <div style={telaN1Styles.subtitulo}>
                            <h2 style={telaN1Styles.mTickets}
                            >Meus Tickets</h2>
                        </div>



                        <table style={telaN1Styles.table}>
                            <thead style={telaN1Styles.cabecalho}>
                                <tr style={telaN1Styles.titulos}>
                                    <th style={{ borderRadius: "10px 0 0 0" }}>N do Ticket</th>
                                    <th>Descrição</th>
                                    <th>Prioridade</th>
                                    <th>SLA</th>
                                    <th>Tempo Excedido</th>
                                    <th style={{ borderRadius: "0 10px 0 0" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dadosTickets.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ ...telaN1Styles.td, ...telaN1Styles.id }}>
                                            {item.id}
                                        </td>
                                        <td style={telaN1Styles.descricao}>{item.descricao}</td>
                                        <td style={telaN1Styles.prioridade}>{item.prioridade}</td>
                                        <td style={telaN1Styles.sla}>{item.sla}</td>
                                        <td style={telaN1Styles.tempoExcedido}>{item.tempoExcedido}</td>
                                        <td style={telaN1Styles.status}>{item.status}</td>
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