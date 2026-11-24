
import TelaOverview from "../../telaOverview/TelaOverview";
import Aside from "../aside/aside"
import { TelaN2Styles } from "./telaN2Styles";
import Header from "../header/header";
import icone from "../../assets/group.svg"
import { CalendarDays, TriangleAlert, UserRound, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import iconTicket from "../../assets/ticket.svg"
import iconTicketDS from "../../assets/check.svg"
import iconTicketTFS from "../../assets/danger.svg"
import iconTicketTMR from "../../assets/time.svg"
import iconTicketTR from "../../assets/yellowTicket.svg"
import api from "../../../services/services";
import seta from "../../assets/seta.svg"
import setaG from "../../assets/seta.svg"
import setaR from "../../assets/setai.svg"
import setaY from "../../assets/setai.svg"
import entrarT from "../../assets/entrarT.svg"
import profileAzul from "../../assets/perfilAzul.svg"
import wifiIcon from "../../assets/wifi.svg"
import ferramenta from "../../assets/ferramenta.svg"

export default function TelaN2() {


    const [periodo, setPeriodo] = useState("7");
    const [prioridade, setPrioridade] = useState("");
    const [atendente, setAtendente] = useState("");

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

            <div style={TelaN2Styles.flexgrid}>
                <div style={{
                    flex: 1,
                    boxSizing: 'border-box'
                }}>
                    <Header />

                    <div style={TelaN2Styles.containerFundo}>
                        <div style={TelaN2Styles.container}>
                            <div style={TelaN2Styles.banner}>

                                <div style={TelaN2Styles.group}>
                                    <div style={TelaN2Styles.iconBox}>
                                        <img
                                            src={icone}
                                            style={TelaN2Styles.imgG}
                                            alt="group"
                                        />
                                    </div>

                                    <div style={TelaN2Styles.cText}>
                                        <h2 style={TelaN2Styles.saudacao}>
                                            Bom dia, Lucas!
                                        </h2>

                                        <p style={TelaN2Styles.text}>
                                            Acompanhamento da Equipe
                                        </p>
                                    </div>
                                </div>

                                <div style={TelaN2Styles.filtros}>

                                    <div style={TelaN2Styles.filtro}>
                                        <CalendarDays size={20} />
                                        <div style={TelaN2Styles.filtroTexto}>
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
                                            style={TelaN2Styles.select}
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

                                    <div style={TelaN2Styles.filtro}>
                                        <TriangleAlert size={20} />
                                        <div style={TelaN2Styles.filtroTexto}>
                                            <span>Prioridade</span>
                                            <strong>{prioridade || "Todas"}</strong>
                                        </div>
                                        <select
                                            id="prioridade"
                                            style={TelaN2Styles.select}
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

                                    <div style={TelaN2Styles.filtro}>
                                        <UserRound size={20} />
                                        <div style={TelaN2Styles.filtroTexto}>
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
                                            style={TelaN2Styles.select}
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

                                </div>




                            </div>




                            {/* TABELA */}

                            




                            <div>

                            </div>



                        </div>








                                    <div style={TelaN2Styles.dados}>

    {/* Total de Tickets */}
    <section style={TelaN2Styles.dadosTt}>
        <div style={{ display: "flex", height: "100%" }}>

            <div style={{
                backgroundColor: "#0A3882",
                width: "6px",
                flexShrink: 0
            }} />

            <div style={TelaN2Styles.cardContent}>

                <div style={TelaN2Styles.cardMain}>

                    <div style={TelaN2Styles.cardIcon}>
                        <img
                            src={iconTicket}
                            alt="ticket"
                           width={80}
height={80}
                        />
                    </div>

                    <div style={TelaN2Styles.cardInfo}>
                        <p style={TelaN2Styles.cardTitle}>
                            Total de tickets
                        </p>

                        <h3 style={TelaN2Styles.cardValue}>
                            248
                        </h3>
                    </div>

                </div>

                <div style={TelaN2Styles.cardTrend}>
                    <img src={seta} alt="seta" width={15} height={15} />

                    <p style={TelaN2Styles.cardTrendText}>
                        15% em relação ao período anterior
                    </p>
                </div>

            </div>
        </div>
    </section>


    {/* Dentro do SLA */}
    <section style={TelaN2Styles.dadosDSla}>
        <div style={{ display: "flex", height: "100%" }}>

            <div style={{
                backgroundColor: "#026C60",
                width: "6px",
                flexShrink: 0
            }} />

            <div style={TelaN2Styles.cardContent}>

                <div style={TelaN2Styles.cardMain}>

                    <div style={TelaN2Styles.cardIcon}>
                        <img
                            src={iconTicketDS}
                            alt="dentro do SLA"
                            width={80}
                            height={80}
                        />
                    </div>

                    <div style={TelaN2Styles.cardInfo}>
                        <p style={TelaN2Styles.cardTitle}>
                            Dentro do SLA
                        </p>

                        <h3 style={TelaN2Styles.cardValue}>
                            92%
                        </h3>
                    </div>

                </div>

                <div style={TelaN2Styles.cardTrend}>
                    <img src={setaG} alt="seta" width={15} height={15} />

                    <p style={TelaN2Styles.cardTrendText}>
                        5% em relação ao período anterior
                    </p>
                </div>

            </div>
        </div>
    </section>


    {/* Fora do SLA */}
    <section style={TelaN2Styles.dadosFSla}>
        <div style={{ display: "flex", height: "100%" }}>

            <div style={{
                backgroundColor: "#AF0025",
                width: "6px",
                flexShrink: 0
            }} />

            <div style={TelaN2Styles.cardContent}>

                <div style={TelaN2Styles.cardMain}>

                    <div style={TelaN2Styles.cardIcon}>
                        <img
                            src={iconTicketTFS}
                            alt="fora do SLA"
                            width={80}
height={80}
                        />
                    </div>

                    <div style={TelaN2Styles.cardInfo}>
                        <p style={TelaN2Styles.cardTitle}>
                            Fora do SLA
                        </p>

                        <h3 style={TelaN2Styles.cardValue}>
                            18
                        </h3>
                    </div>

                </div>

                <div style={TelaN2Styles.cardTrend}>
                    <img src={setaR} alt="seta" width={15} height={15} />

                    <p style={TelaN2Styles.cardTrendText}>
                        6% em relação ao período anterior
                    </p>
                </div>

            </div>
        </div>
    </section>


    {/* Tickets Recorrentes */}
    <section style={TelaN2Styles.dadosTR}>
        <div style={{ display: "flex", height: "100%" }}>

            <div style={{
                backgroundColor: "#C9A801",
                width: "6px",
                flexShrink: 0
            }} />

            <div style={TelaN2Styles.cardContent}>

                <div style={TelaN2Styles.cardMain}>

                    <div style={TelaN2Styles.cardIcon}>
                        <img
                            src={iconTicketTR}
                            alt="tickets recorrentes"
                            width={80}
height={80}
                        />
                    </div>

                    <div style={TelaN2Styles.cardInfo}>
                        <p style={TelaN2Styles.cardTitle}>
                            Recorrentes
                        </p>

                        <h3 style={TelaN2Styles.cardValue}>
                            38
                        </h3>
                    </div>

                </div>

                <div style={TelaN2Styles.cardTrend}>
                    <img src={setaY} alt="seta" width={15} height={15} />

                    <p style={TelaN2Styles.cardTrendText}>
                        15% em relação ao período anterior
                    </p>
                </div>

            </div>
        </div>
    </section>

</div>
</div>

                            {/* BOTÕES */}

<div style={TelaN2Styles.buttonsContainer}>
 <div style={TelaN2Styles.buttons}>
                                                <button
                                                    type="button"
                                                    style={TelaN2Styles.todos}
                                                >
                                                    Todos
                                                </button>

                                                <button
                                                    type="button"
                                                    style={TelaN2Styles.recentes}
                                                >
                                                    Recentes
                                                </button>

                                                <button
                                                    type="button"
                                                    style={TelaN2Styles.recorrentes}
                                                >
                                                    Recorrentes
                                                </button>
                                                <button
                                                    type="button"
                                                    style={TelaN2Styles.naoAtribuidos}
                                                >
                                                    Não Atribuídos
                                                </button>
                                            </div> 

</div>
                                           {/* Tabela dos retribuidos */}

                                            {/* <div style={TelaN2Styles.tableContainer}>
                                                <table style={TelaN2Styles.table}>

                                                    <colgroup>
                                                        <col style={TelaN2Styles.colTicket} />
                                                        <col style={TelaN2Styles.colDescricao} />
                                                        <col style={TelaN2Styles.colHorario} />
                                                        <col style={TelaN2Styles.colPrazo} />
                                                        <col style={TelaN2Styles.colStatus} />
                                                    </colgroup>

                                                    <thead style={TelaN2Styles.cabecalho}>
                                                        <tr style={TelaN2Styles.titulos}>
                                                            <th style={{ borderRadius: "15px 0 0 0" }}>N° do Ticket</th>
                                                            <th style={{ textAlign: "left" }}>Descrição</th>
                                                            <th style={{ textAlign: "left" }}>Horario</th>
                                                            <th style={{ textAlign: "left" }}>Prazo</th>
                                                            <th style={{ borderRadius: "0 15px 0 0", textAlign: "left" }}>Status</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {dadosTickets.map((item) => (
                                                            <tr key={item.id} style={TelaN2Styles.linhas}>

                                                                <td style={{ ...TelaN2Styles.td, ...TelaN2Styles.id }}>
                                                                    <div style={{ width: "5%", height: "40px", backgroundColor: item.status === "Em Andamento" ? "#C9A801" : item.status === "Concluído" ? "#026C60" : "#AF0025" }}></div>
                                                                    #{item.id}
                                                                </td>

                                                                <td style={TelaN2Styles.descricao}>
                                                                    <div style={{ width: "50%", height: "30px" }}>
                                                                    {item.descricao}
                                                                    </div>
                                                                </td>

                                                                <td style={TelaN2Styles.horario}>
                                                                    {item.horario}
                                                                </td>

                                                                <td style={TelaN2Styles.prazo}>
                                                                    {item.prazo}
                                                                </td>

                                                                <td style={TelaN2Styles.status}>
                                                                    <div style={{ width: "60%", height: "25px", 
                                                                        backgroundColor: item.status === "Em Andamento" ? "#C9A801" : item.status === "Concluído" ? "#026C60" : "#AF0025", 
                                                                        borderColor: item.status === 'Em Andamento' ? '#9C8A4D' : item.status === 'Concluído' ? '#245543' : '#AB2642',
                                                                        color: item.status === 'Em Andamento' ? '#ffff' : item.status === 'Concluído' ? '#ffff' : '#ffff', fontSize:13, fontWeight:500,
                                                                        borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", borderWidth: "1px", borderStyle: "solid" }}>
                                                                        {item.status}
                                                                    </div>

                                                                </td>

                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                        </div> */}




                        {/* TABELA DOS RECORRENTES */}

                        {/* <div style={TelaN2Styles.tableContainer}>
                                                <table style={TelaN2Styles.table}>

                                                    <colgroup>
                                                        <col style={{ width: "12%" }} />
                                                        <col style={{ width: "27%" }} />
                                                        <col style={{ width: "17%" }} />
                                                        <col style={{ width: "14%" }} />
                                                        <col style={{ width: "12%" }} />
                                                        <col style={{ width: "14%" }} />
                                                        <col style={{ width: "4%" }} />
                                                    </colgroup>

                                                                                                        <thead style={TelaN2Styles.cabecalho}>
                                                        <tr style={TelaN2Styles.titulos}>
                                                            <th style={{ borderRadius: "15px 0 0 0" }}>N° do Ticket</th>
                                                            <th style={{ textAlign: "left" }}>Descrição</th>
                                                            <th style={{ textAlign: "left" }}>Horário</th>
                                                            <th style={{ textAlign: "left" }}>Prioridade</th>
                                                            <th style={{ textAlign: "left" }}>Prazo</th>
                                                            <th style={{ textAlign: "left" }}>Status</th>
                                                            <th style={{ borderRadius: "0 15px 0 0" }}></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {dadosTickets.map((item) => (
                                                            <tr key={item.id} style={TelaN2Styles.linhas}>

                                                                <td style={{ ...TelaN2Styles.td, ...TelaN2Styles.id }}>
                                                                    <div style={{ width: "5%", height: "40px", backgroundColor: item.status === "Em Andamento" ? "#C9A801" : item.status === "Concluído" ? "#026C60" : "#AF0025" }}></div>
                                                                    #{item.id}
                                                                </td>

                                                                <td style={TelaN2Styles.descricao}>
                                                                    <div style={{ width: "50%", height: "30px" }}>
                                                                    {item.descricao}
                                                                    </div>
                                                                </td>

                                                                <td style={TelaN2Styles.horario}>
                                                                    {item.horario}
                                                                </td>

                                                              <td style={TelaN2Styles.prioridade}>
                                                                        <div style={{
                                                                            width: "60%",
                                                                            height: "25px",
                                                                            backgroundColor:
                                                                                item.prioridade === "P1.Baixo" ? "#026C60" :
                                                                                item.prioridade === "P2.Médio" ? "#C9A801" :
                                                                                item.prioridade === "P3.Alto" ? "#C96B00" :
                                                                                item.prioridade === "P4.Crítico" ? "#AF0025" : "#FFFFFF",
                                                                            color: "#FFFFFF",
                                                                            fontSize: 13,
                                                                            fontWeight: 500,
                                                                            borderRadius: "10px",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            marginLeft: "auto",
                                                                            marginRight: "auto",
                                                                            transform: "translateX(-34px)",
                                                                            border: "1px solid transparent"
                                                                        }}>
                                                                            {item.prioridade}
                                                                        </div>
                                                                    </td>

                                                                <td style={TelaN2Styles.prazo}>
                                                                    {item.prazo}
                                                                </td>

                                                                <td style={TelaN2Styles.status}>
                                                                    <div style={{ width: "60%", height: "25px", 
                                                                        backgroundColor: item.status === "Em Andamento" ? "#C9A801" : item.status === "Concluído" ? "#026C60" : "#AF0025", 
                                                                        borderColor: item.status === 'Em Andamento' ? '#9C8A4D' : item.status === 'Concluído' ? '#245543' : '#AB2642',
                                                                        color: item.status === 'Em Andamento' ? '#ffff' : item.status === 'Concluído' ? '#ffff' : '#ffff', fontSize:13, fontWeight:500,
                                                                        borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", borderWidth: "1px", borderStyle: "solid" }}>
                                                                        {item.status}
                                                                    </div>

                                                                </td>

                                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                    <div style={TelaN2Styles.entrarT}>
                                                                        <img
                                                                            src={entrarT}
                                                                            alt="Abrir ticket"
                                                                            width={15}
                                                                            height={15}
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                        ))}
                                                    </tbody>
                                                </table>
                        </div> */}


                        <div style={TelaN2Styles.recorentesFiltro}>
                            
                        <section style={ TelaN2Styles.cadAcesso}>
                            <div style={TelaN2Styles.pTickets}>
                            <img
                            style={TelaN2Styles.iconProfile}
                            src={profileAzul}
                            alt="cadastro e acesso"
                            width={55}
                            height={55}
                            />
                        <div style={{display: "flex", flexDirection: "column", marginLeft:"10px", marginBottom:"5px"}}>
                        <h2 style={TelaN2Styles.tituloTProfile}>
                            Cadastro e acesso
                        </h2>

                        <p>
                            Recuperação de senha, acesso ao portal, atualização de dados e novos cadastros. 
                        </p>
                        </div>
                      
                        </div>

                        </section>

                        <section style={TelaN2Styles.intConection}>
                            <div style={TelaN2Styles.pTickets}>
                            <img
                            style={TelaN2Styles.iconWifi}
                            src={wifiIcon}
                            alt="internet e conexão"
                            width={50}
                            height={50}
                        />
                        <div style={{display: "flex", flexDirection: "column", marginLeft:"10px", marginBottom:"5px"}}>
                        <h2 style={TelaN2Styles.tituloTProfile}>
                            Internet e conexão
                        </h2>

                        <p>
                            Recuperação de senha, acesso ao portal, atualização de dados e novos cadastros. 
                        </p>
                        </div>
                        </div>

                        </section>
                        <section style={TelaN2Styles.secBloqueio}>
                             <div style={TelaN2Styles.pTickets}>
                              <img
                              style={TelaN2Styles.iconFerramenta}
                            src={ferramenta}
                            alt="segurança e bloqueios"
                            width={50}
                            height={50}
                        />
                        <div style={{display: "flex", flexDirection: "column", marginLeft:"10px", marginBottom:"5px"}}>
                        <h2 style={TelaN2Styles.tituloTProfile}>
                            Segurança e bloqueios
                        </h2>

                        <p>
                            Falhas em equipamentos, configuração de aparelhos, instalação e manutenção. 
                        </p>
                        </div>
                        </div>
                        </section>
                        </div>
                            
                </div>
            </div>
        </div>
    );
}
