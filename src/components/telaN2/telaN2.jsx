
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
import setaG from "../../assets/setaG.svg"
import setaR from "../../assets/setaR.svg"
import setaP from "../../assets/setaP.svg"
import setaY from "../../assets/setaY.svg"

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


                            {/* BOTÕES */}

                            {/* <div style={TelaN2Styles.buttons}>
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
                                            </div> */}


                            {/* TABELA */}

                            {/* 
                                            <div style={TelaN2Styles.tableContainer}>
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
                                                                    <div style={{ width: "5%", height: "40px", backgroundColor: item.status === "Em Andamento" ? "#feffb7" : item.status === "Concluído" ? "#C1EAD7" : "#FFE0E7" }}></div>
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
                                                                    <div style={{ width: "50%", height: "30px", 
                                                                        backgroundColor: item.status === "Em Andamento" ? "#feffb7" : item.status === "Concluído" ? "#C1EAD7" : "#FFC2D0", 
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
                        </div> */}




                            <div>

                            </div>



                        </div>








                                    <div style={TelaN2Styles.dados}>


                                        {/* Total de Tickets  */}
                                        <section style={TelaN2Styles.dadosTt}>
                                            <div style={{display: "flex", flexDirection: "row"}}>
                                            <div style={{backgroundColor: "#0A3882", width:"10px",  height:"149px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px"}}></div>
                                            <div style={{paddingTop: "5px", paddingLeft: "5px"}}>
                                            <p style={TelaN2Styles.pSecTt}>Total de Tickets</p>
                                            <div style={TelaN2Styles.iconT}>
                                                <img
                                                    src={iconTicket}

                                                    alt="ticket"
                                                    width={60}
                                                    height={60}

                                                />
                                                <h3 style={TelaN2Styles.h3SecTt}>230</h3>
                                            </div>

                                            <div style={TelaN2Styles.setaTt}>
                                                <img
                                                    src={seta}
                                                    alt="seta"
                                                    width={15}
                                                    height={15}
                                                    style={{
                                                        display: "block",
                                                        margin: "0 auto",
                                                        
                                                    }}
                                                />
                                                <p style={TelaN2Styles.pDSecTt}>15% em relação ao período anterior </p>
                                            </div>
                                            </div>
            
                                            </div>
                                        </section>

                                        {/* Dentro do SLA  */}
                                        <section style={TelaN2Styles.dadosDSla}>
                                                    <div style={{display: "flex", flexDirection: "row"}}>
                                                    <div style={{backgroundColor: "#026C60", width:"10px",  height:"149px", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px"}}></div>
                                                    <div style={{paddingTop: "5px", paddingLeft: "5px"}}>
                                                    <p style={TelaN2Styles.pSecDSla}>Dentro do SLA</p>
                                                     <div style={TelaN2Styles.iconDS}>
                                                        <img
                                                        src={iconTicketDS}
                                                        alt="ticket"
                                                        width={60}
                                                        height={60}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecDSla}>100%</h3>
                                                    </div>

                                                    <div style={TelaN2Styles.setaDS}>
                                                     <img
                                                        src={setaG}
                                                        alt="seta"
                                                        width={15}
                                                        height={15}
                                                        style={{
                                                            display: "block",
                                                            margin: "0 auto",
                                                            
                                                         }}
                                                    />
                                                    <p  style={TelaN2Styles.pDSecDSla}>4% em relação ao período anterior </p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </section>


                                        {/* Fora do SLA  */}
                                        {/* Fora do SLA */}
<section style={TelaN2Styles.dadosFSla}>
    <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{
            backgroundColor: "#AF0025",
            width: "10px",
            height: "149px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px"
        }}>
        </div>

        <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
            <p style={TelaN2Styles.pSecFSla}>Fora do SLA</p>

            <div style={TelaN2Styles.iconTFS}>
                <img
                    src={iconTicketTFS}
                    alt="ticket"
                    width={60}
                    height={60}
                />
                <h3 style={TelaN2Styles.h3SecFSla}>0</h3>
            </div>

            <div style={TelaN2Styles.setaPFS}>
                <img
                    src={setaR}
                    alt="seta"
                    width={15}
                    height={15}
                    style={{ display: "block", marginTop: "5px" }}
                />
                <p style={TelaN2Styles.pDSecFSla}>
                    6% em relação ao período anterior
                </p>
            </div>
        </div>

    </div>
</section>


                                        {/* Tickets Recorrentes  */}
                                        {/* Tickets Recorrentes */}
<section style={TelaN2Styles.dadosTR}>
    <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{
            backgroundColor: "#C9A801",
            width: "10px",
            height: "149px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px"
        }}>
        </div>

        <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
            <p style={TelaN2Styles.pSecTtr}>
                Tickets Recorrentes
            </p>

            <div style={TelaN2Styles.iconTTR}>
                <img
                    src={iconTicketTR}
                    alt="ticket"
                    width={60}
                    height={60}
                />
                <h3 style={TelaN2Styles.h3SecTtr}>0</h3>
            </div>

            <div style={TelaN2Styles.setaTR}>
                <img
                    src={setaY}
                    alt="seta"
                    width={15}
                    height={15}
                    style={{ display: "block", marginTop: "5px" }}
                />
                <p style={TelaN2Styles.pDSecTtr}>
                    15% em relação ao período anterior
                </p>
            </div>
        </div>

    </div>
</section>

                                    </div>



                    </div>
                </div>
            </div>
        </div>
    );
}
