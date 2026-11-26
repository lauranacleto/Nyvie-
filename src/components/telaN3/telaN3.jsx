
import Aside from "../aside/aside";
import Header from "../header/header";
import { TelaN3Styles } from "./telan3Styles";

import icone from "../../assets/group.svg";
import iconTicket from "../../assets/ticket.svg";
import iconTicketDS from "../../assets/check.svg";
import iconTicketTFS from "../../assets/danger.svg";
import iconTicketTR from "../../assets/yellowTicket.svg";

import setaY from "../../assets/setai.svg";
import seta from "../../assets/seta.svg";
import setaG from "../../assets/seta.svg";
import setaR from "../../assets/setai.svg";
import graphic from "../../assets/estatistica.svg";

import {
    CalendarDays,
    TriangleAlert,
    UserRound,
    ChevronDown,
    Wrench
} from "lucide-react";

import { useState, useEffect } from "react";
import api from "../../../services/services";

export default function TelaN3() {

    const [periodo, setPeriodo] = useState("7");
    const [prioridade, setPrioridade] = useState("");
    const [servico, setServico] = useState("");

    const [atendente, setAtendente] = useState("");
    const [listaAtendente, setListaAtendente] = useState([]);
    const [ticketResolvido, setTicketResolvido] = useState([]);
    const [dadosTickets, setDadosTickets] = useState([]);

    const getTickets = async () => {
        try {
            const response = await api.get("/tickets");
            const dados = await response.data
            setDadosTickets(dados);
        } catch (error) {
            console.error("Erro ao buscar tickets: ", error);
        }
    };

    const getAtendentes = async () => {
        try {
            const response = await api.get("/usuarios");
            const dados = await response.data
            setListaAtendente(dados);
        } catch (error) {
            console.error("Erro ao buscar: ", error);
        }
    };

    // const getTicketsResolvidos = async () => {
    //     try {
    //         const response = await api.get("/tickets", {
    //             params: {
    //                 "status": "Concluído"
    //             }

    //         });
    //         const dados = await response.data
    //         setTicketResolvido(dados);
    //     } catch (error) {
    //         console.error("Erro ao buscar: ", error);
    //     }
    // }

    useEffect(() => {
        getAtendentes(),
            getTickets()
    }, []);

    const desempenhoAtendentes = listaAtendente.map((atendente) => {

        const ticketsDoAtendente = dadosTickets.filter(
            (ticket) =>
                String(ticket.idAtendente) === String(atendente.id)
        );

        const resolvidos = ticketsDoAtendente.filter(
            (ticket) => ticket.status === "Concluído"
        );

        return {
            ...atendente,
            ticketsResolvidos: resolvidos.length,
        };
    });

    const ticketsSlaExcedido = dadosTickets.filter((ticket) => {
        if (!ticket.prazo || ticket.status === "Concluído") {
            return false;
        }

        const [dia, mes, ano] = ticket.prazo.split("/");

        const prazo = new Date(
            Number(ano),
            Number(mes) - 1,
            Number(dia)
        );

        return prazo < new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()
        );
    });

    const corPrioridade = (prioridade) => {
        switch (prioridade) {
            case "P1.Baixo":
                return "#026C60";
            case "P2.Médio":
                return "#C9A801";
            case "P3.Alto":
                return "#C46E0C";
            case "P4.Crítico":
                return "#AF0025";
            default:
                return "#64748B";
        }
    };

    return (
        <div style={{
            display: "flex",
            minHeight: "99vh",
            width: "100%"
        }}>

            <Aside />

            <div style={TelaN3Styles.flexgrid}>

                <div style={{
                    flex: 1,
                    minWidth: 0,
                    boxSizing: "border-box"
                }}>

                    <Header />

                    <div style={TelaN3Styles.containerFundo}>

                        <div style={TelaN3Styles.container}>

                            <div style={TelaN3Styles.banner}>

                                <div style={TelaN3Styles.group}>

                                    <div style={TelaN3Styles.iconBox}>
                                        <img
                                            src={icone}
                                            style={TelaN3Styles.imgG}
                                            alt="group"
                                        />
                                    </div>

                                    <div style={TelaN3Styles.cText}>

                                        <h2 style={TelaN3Styles.saudacao}>
                                            Olá, Lucas!
                                        </h2>

                                        <p style={TelaN3Styles.text}>
                                            Acompanhamento da Equipe
                                        </p>

                                    </div>

                                </div>

                                <div style={TelaN3Styles.filtros}>

                                    <div style={TelaN3Styles.filtro}>

                                        <CalendarDays size={20} />

                                        <div style={TelaN3Styles.filtroTexto}>
                                            <span>Período</span>

                                            <strong>
                                                {periodo === "7" ? "Últimos 7 dias" :
                                                    periodo === "15" ? "Últimos 15 dias" :
                                                        periodo === "30" ? "Últimos 30 dias" :
                                                            "Últimos 90 dias"}
                                            </strong>
                                        </div>

                                        <select
                                            id="periodo"
                                            style={TelaN3Styles.select}
                                            value={periodo}
                                            onChange={(e) => setPeriodo(e.target.value)}
                                        >
                                            <option value="7">Últimos 7 dias</option>
                                            <option value="15">Últimos 15 dias</option>
                                            <option value="30">Últimos 30 dias</option>
                                            <option value="90">Últimos 90 dias</option>
                                        </select>

                                        <ChevronDown size={16} />

                                    </div>

                                    <div style={TelaN3Styles.filtro}>

                                        <TriangleAlert size={20} />

                                        <div style={TelaN3Styles.filtroTexto}>
                                            <span>Prioridade</span>
                                            <strong>{prioridade || "Todas"}</strong>
                                        </div>

                                        <select
                                            id="prioridade"
                                            style={TelaN3Styles.select}
                                            value={prioridade}
                                            onChange={(e) => setPrioridade(e.target.value)}
                                        >
                                            <option value="">Todas</option>
                                            <option value="alta">Alta</option>
                                            <option value="média">Média</option>
                                            <option value="baixa">Baixa</option>
                                        </select>

                                        <ChevronDown size={16} />

                                    </div>

                                    <div style={TelaN3Styles.filtro}>

                                        <UserRound size={20} />

                                        <div style={TelaN3Styles.filtroTexto}>
                                            <span>Atendente</span>

                                            <strong>
                                                {atendente === "1" ? "Lucas" :
                                                    atendente === "2" ? "Maria" :
                                                        atendente === "3" ? "João" :
                                                            "Todos"}
                                            </strong>
                                        </div>

                                        <select
                                            id="atendente"
                                            style={TelaN3Styles.select}
                                            value={atendente}
                                            onChange={(e) => setAtendente(e.target.value)}
                                        >
                                            <option value="">Todos</option>
                                            <option value="1">Lucas</option>
                                            <option value="2">Maria</option>
                                            <option value="3">João</option>
                                        </select>

                                        <ChevronDown size={16} />

                                    </div>

                                    <div style={TelaN3Styles.filtro}>

                                        <Wrench size={20} />

                                        <div style={TelaN3Styles.filtroTexto}>
                                            <span>Serviço</span>

                                            <strong>
                                                {servico === "1" ? "Cadastro e Acesso" :
                                                    servico === "2" ? "Internet e Conexão" :
                                                        servico === "3" ? "Suporte Técnico" :
                                                            "Todos"}
                                            </strong>
                                        </div>

                                        <select
                                            id="servico"
                                            style={TelaN3Styles.select}
                                            value={servico}
                                            onChange={(e) => setServico(e.target.value)}
                                        >
                                            <option value="">Todos</option>
                                            <option value="1">Cadastro e Acesso</option>
                                            <option value="2">Internet e Conexão</option>
                                            <option value="3">Suporte Técnico</option>
                                        </select>

                                        <ChevronDown size={16} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div style={TelaN3Styles.areaIndicadores}>

                            <div style={TelaN3Styles.dados}>

                                {/* Total de Tickets */}

                                <section style={TelaN3Styles.dadosTt}>

                                    <div style={{
                                        display: "flex",
                                        height: "100%"
                                    }}>

                                        <div style={{
                                            backgroundColor: "#0A3882",
                                            width: "6px",
                                            flexShrink: 0
                                        }} />

                                        <div style={TelaN3Styles.cardContent}>

                                            <div style={TelaN3Styles.cardMain}>

                                                <div style={TelaN3Styles.cardIcon}>
                                                    <img
                                                        src={iconTicket}
                                                        alt="ticket"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>

                                                <div style={TelaN3Styles.cardInfo}>

                                                    <p style={TelaN3Styles.cardTitle}>
                                                        Total de tickets
                                                    </p>

                                                    <h3 style={TelaN3Styles.cardValue}>
                                                        248
                                                    </h3>

                                                </div>

                                            </div>

                                            <div style={TelaN3Styles.cardTrend}>

                                                <img
                                                    src={seta}
                                                    alt="seta"
                                                    width={15}
                                                    height={15}
                                                />

                                                <p style={TelaN3Styles.cardTrendText}>
                                                    15% em relação ao período anterior
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                                {/* Dentro do SLA */}

                                <section style={TelaN3Styles.dadosDSla}>

                                    <div style={{
                                        display: "flex",
                                        height: "100%"
                                    }}>

                                        <div style={{
                                            backgroundColor: "#026C60",
                                            width: "6px",
                                            flexShrink: 0
                                        }} />

                                        <div style={TelaN3Styles.cardContent}>

                                            <div style={TelaN3Styles.cardMain}>

                                                <div style={TelaN3Styles.cardIcon}>
                                                    <img
                                                        src={iconTicketDS}
                                                        alt="dentro do SLA"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>

                                                <div style={TelaN3Styles.cardInfo}>

                                                    <p style={TelaN3Styles.cardTitle}>
                                                        Dentro do SLA
                                                    </p>

                                                    <h3 style={TelaN3Styles.cardValue}>
                                                        92%
                                                    </h3>

                                                </div>

                                            </div>

                                            <div style={TelaN3Styles.cardTrend}>

                                                <img
                                                    src={setaG}
                                                    alt="seta"
                                                    width={15}
                                                    height={15}
                                                />

                                                <p style={TelaN3Styles.cardTrendText}>
                                                    5% em relação ao período anterior
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                                {/* Fora do SLA */}

                                <section style={TelaN3Styles.dadosFSla}>

                                    <div style={{
                                        display: "flex",
                                        height: "100%"
                                    }}>

                                        <div style={{
                                            backgroundColor: "#AF0025",
                                            width: "6px",
                                            flexShrink: 0
                                        }} />

                                        <div style={TelaN3Styles.cardContent}>

                                            <div style={TelaN3Styles.cardMain}>

                                                <div style={TelaN3Styles.cardIcon}>
                                                    <img
                                                        src={iconTicketTFS}
                                                        alt="fora do SLA"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>

                                                <div style={TelaN3Styles.cardInfo}>

                                                    <p style={TelaN3Styles.cardTitle}>
                                                        Fora do SLA
                                                    </p>

                                                    <h3 style={TelaN3Styles.cardValue}>
                                                        18
                                                    </h3>

                                                </div>

                                            </div>

                                            <div style={TelaN3Styles.cardTrend}>

                                                <img
                                                    src={setaR}
                                                    alt="seta"
                                                    width={15}
                                                    height={15}
                                                />

                                                <p style={TelaN3Styles.cardTrendText}>
                                                    6% em relação ao período anterior
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                                {/* Tickets Recorrentes */}

                                <section style={TelaN3Styles.dadosTR}>

                                    <div style={{
                                        display: "flex",
                                        height: "100%"
                                    }}>

                                        <div style={{
                                            backgroundColor: "#C9A801",
                                            width: "6px",
                                            flexShrink: 0
                                        }} />

                                        <div style={TelaN3Styles.cardContent}>

                                            <div style={TelaN3Styles.cardMain}>

                                                <div style={TelaN3Styles.cardIcon}>
                                                    <img
                                                        src={iconTicketTR}
                                                        alt="tickets recorrentes"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </div>

                                                <div style={TelaN3Styles.cardInfo}>

                                                    <p style={TelaN3Styles.cardTitle}>
                                                        Recorrentes
                                                    </p>

                                                    <h3 style={TelaN3Styles.cardValue}>
                                                        38
                                                    </h3>

                                                </div>

                                            </div>

                                            <div style={TelaN3Styles.cardTrend}>

                                                <img
                                                    src={setaY}
                                                    alt="seta"
                                                    width={15}
                                                    height={15}
                                                />

                                                <p style={TelaN3Styles.cardTrendText}>
                                                    15% em relação ao período anterior
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                            </div>

                            {/* Taxa de Conversão */}

                            <div style={TelaN3Styles.quadroTaxa}>

                                <section style={TelaN3Styles.taxaDC}>

                                    <div style={{
                                        display: "flex",
                                        height: "100%"
                                    }}>

                                        <div style={TelaN3Styles.conteudoTaxa}>

                                            <h3 style={TelaN3Styles.tituloTaxa}>
                                                Taxa de conversão
                                            </h3>

                                            <div style={TelaN3Styles.dadosTaxa}>

                                                <div style={TelaN3Styles.graficoTaxa}>

                                                    <img
                                                        src={graphic}
                                                        alt="Gráfico de conversão"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "contain"
                                                        }}
                                                    />

                                                </div>

                                                <div style={TelaN3Styles.indicadoresTaxa}>

                                                    <div style={TelaN3Styles.indicadorTaxa}>

                                                        <h2 style={TelaN3Styles.valorTaxa}>
                                                            19%
                                                        </h2>

                                                        <p style={TelaN3Styles.descricaoTaxa}>
                                                            Transferidos para<br />
                                                            o próximo mês
                                                        </p>

                                                    </div>

                                                    <p style={TelaN3Styles.quantidadeTaxa}>
                                                        (210 / 1.470)
                                                    </p>

                                                    <div style={TelaN3Styles.divisorTaxa} />

                                                    <div style={TelaN3Styles.indicadorTaxa}>

                                                        <h2 style={TelaN3Styles.valorTaxa}>
                                                            81%
                                                        </h2>

                                                        <p style={TelaN3Styles.descricaoTaxa}>
                                                            Resolvidos no<br />
                                                            mesmo mês
                                                        </p>

                                                    </div>

                                                    <p style={TelaN3Styles.quantidadeTaxa}>
                                                        (1.260 / 1.470)
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </section>

                            </div>

                        </div>

                    </div>

                    {/* TABELAS */}

                    <div style={TelaN3Styles.areaTabelas}>

                        {/* Desempenho dos Atendentes */}

                        <div style={TelaN3Styles.caixaDesempenho}>

                            <h3 style={TelaN3Styles.tituloTabela}>
                                Desempenho dos atendentes
                            </h3>

                            <table style={TelaN3Styles.tabela}>

                                <thead style={TelaN3Styles.cabecalho}>

                                    <tr>
                                        <th style={TelaN3Styles.coluna}>
                                            Atendente
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Tickets resolvidos
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            SLA cumprido
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Tempo médio - resposta
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Departamento
                                        </th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {desempenhoAtendentes.map((atendente) => (
                                        <tr key={atendente.id} style={TelaN3Styles.linhaTabela}>

                                            <td style={TelaN3Styles.celulaAtendente}>
                                                <div style={TelaN3Styles.infoAtendente}>

                                                    {atendente.foto ? (
                                                        <img
                                                            src={atendente.foto}
                                                            alt={atendente.nome}
                                                            style={TelaN3Styles.imagemAtendente}
                                                        />
                                                    ) : (
                                                        <div style={TelaN3Styles.avatarFallback}>

                                                        </div>
                                                    )}

                                                    <span>{atendente.nome}</span>

                                                </div>
                                            </td>

                                            <td style={TelaN3Styles.colunaDesempenho}>
                                                {atendente.ticketsResolvidos}
                                            </td>

                                            <td style={TelaN3Styles.colunaDesempenho}>
                                                {atendente.sla ?? "--"}
                                            </td>

                                            <td style={TelaN3Styles.colunaDesempenho}>
                                                {atendente.tempoMedio ?? "--"}
                                            </td>

                                            <td style={TelaN3Styles.colunaDesempenho}>
                                                <span style={TelaN3Styles.departamentos}>
                                                    {atendente.departamento ?? "--"}
                                                </span>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>

                        {/* SLA Excedido */}

                        <div style={TelaN3Styles.caixaSla}>

                            <h3 style={TelaN3Styles.tituloTabela}>
                                SLA excedido (últimos 7 dias)
                            </h3>

                            <table style={TelaN3Styles.tabela}>

                                <thead style={TelaN3Styles.cabecalho}>

                                    <tr>
                                        <th style={TelaN3Styles.coluna}>
                                            #Ticket
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Cliente
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Tempo excedido
                                        </th>

                                        <th style={TelaN3Styles.coluna}>
                                            Prioridade
                                        </th>
                                    </tr>

                                </thead>

                                <tbody>
                                    {ticketsSlaExcedido.map((ticket) => (
                                        <tr key={ticket.id} style={TelaN3Styles.linhaTabela}>

                                            <td style={TelaN3Styles.coluna}>
                                                <strong>#{ticket.id}</strong>
                                            </td>

                                            <td style={{
                                                ...TelaN3Styles.coluna,
                                                color: "#233D6A",
                                                fontWeight: "bold"
                                            }}>
                                                SENAI
                                            </td>

                                            <td style={{
                                                ...TelaN3Styles.coluna,
                                                color: "#B50F11",
                                                fontWeight: "bold"
                                            }}>
                                                01:05:51
                                            </td>

                                            <td style={TelaN3Styles.coluna}>
                                                <span style={{
                                                    backgroundColor: corPrioridade(ticket.prioridade),
                                                    color: "#FFFFFF",
                                                    width: "85px",
                                                    height: "25px",
                                                    padding: "0",
                                                    borderRadius: "8px",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxSizing: "border-box",
                                                    fontWeight: "bold",
                                                    fontSize: "11px",
                                                    whiteSpace: "nowrap"
                                                }}>
                                                    {ticket.prioridade}
                                                </span>
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
