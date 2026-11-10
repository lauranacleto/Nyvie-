
import TelaOverview from "../../telaOverview/TelaOverview";
import Aside from "../aside/aside"
import { TelaN2Styles } from "./telaN2Styles";
import Header from "../header/header";
import icone  from "../../assets/group.svg"
import { CalendarDays, TriangleAlert, UserRound, ChevronDown } from "lucide-react";
import { useState } from "react";
import iconTicket from "../../assets/ticket.svg"
import iconTicketDS from "../../assets/check.svg"
import iconTicketTFS from "../../assets/danger.svg"
import iconTicketTMR from "../../assets/time.svg"
import iconTicketTR from "../../assets/yellowTicket.svg"

export default function TelaN2() {


const [periodo, setPeriodo] = useState("7");
const [prioridade, setPrioridade] = useState("");
const [atendente, setAtendente] = useState("");

    return(
        <div style={{ display: 'flex', minHeight: '99vh', width: '100%' }}>
            <Aside/>

                <div style={TelaN2Styles.flexgrid}>
                        <div style={{ 
                            flex: 1,
                            boxSizing: 'border-box'
                        }}>
                              <Header />

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

                                           <div style={TelaN2Styles.section}>
                                                <div style={TelaN2Styles.dados}>
                            
                                                    
                                                    {/* Total de Tickets  */}
                                                    <section style={TelaN2Styles.dadosTt}>
                                                    <p style={TelaN2Styles.pSecTt}>Total de Tickets</p>
                                                    <div style={TelaN2Styles.iconT}>
                                                        <img
                                                        src={iconTicket}
                                                        
                                                        alt="ticket"
                                                        width={50}
                                                        height={50}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecTt}>248</h3>
                                                    </div>
                                                    <p style={TelaN2Styles.pDSecTt}>15% em relação ao período anterior </p>
                                                    </section>
                                                    

                                                    {/* Dentro do SLA  */}
                                                    <section style={TelaN2Styles.dadosDSla}>
                                                    <p style={TelaN2Styles.pSecDSla}>Dentro do SLA</p>
                                                     <div style={TelaN2Styles.iconDS}>
                                                        <img
                                                        src={iconTicketDS}
                                                        alt="ticket"
                                                        width={50}
                                                        height={50}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecDSla}>92%</h3>
                                                    </div>

                                                    <p  style={TelaN2Styles.pDSecDSla}>4% em relação ao período anterior </p>
                                                    </section>
                                                    

                                                    {/* Fora do SLA  */}
                                                    <section style={TelaN2Styles.dadosFSla}>
                                                    <p style={TelaN2Styles.pSecFSla}>Fora do SLA</p>
                                                     <div style={TelaN2Styles.iconTFS}>
                                                        <img
                                                        src={iconTicketTFS}
                                                        alt="ticket"
                                                        width={50}
                                                        height={50}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecFSla}>18</h3>
                                                    </div>
                                                    <p  style={TelaN2Styles.pDSecFSla}>6% em relação ao período anterior </p>
                                                    </section>
                                                    

                                                    {/* Tempo Médio de Resposta  */}
                                                    <section style={TelaN2Styles.dadosTMR}>
                                                    <p style={TelaN2Styles.pSecTMR}>Tempo Médio de Resposta</p>
                                                    <div style={TelaN2Styles.iconTTMR}>
                                                        <img
                                                        src={iconTicketTMR}
                                                        alt="ticket"
                                                        width={50}
                                                        height={50}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecTMR}>00:38</h3>
                                                    </div>
                                                    <p  style={TelaN2Styles.pDSecTMR}>15% em relação ao período anterior </p>
                                                    </section>
                                                    
                                                    {/* Tickets Recorrentes  */}
                                                    <section style={TelaN2Styles.dadosTR}>
                                                    <p style={TelaN2Styles.pSecTtr}>Tickets Recorrentes</p>
                                                    <div style={TelaN2Styles.iconTTR}>
                                                        <img
                                                        src={iconTicketTR}
                                                        alt="ticket"
                                                        width={50}
                                                        height={50}

                                                    />
                                                    <h3 style={TelaN2Styles.h3SecTtr}>38</h3>
                                                    </div>
                                                    <p  style={TelaN2Styles.pDSecTtr}>15% em relação ao período anterior </p>
                                                    </section>

                                                 </div>
                                         </div>


                                    </div>
                                       
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



                                    <div>

                                    </div>


                                    
                            </div>

                        </div>
                 </div>
         </div>
    );
}
