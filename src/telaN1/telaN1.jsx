import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaN1Styles } from './telaN1Styles';
import icone from "../assets/clipboard.svg"
import { Ticket } from "lucide-react";
import { useEffect } from "react";

export default function TelaN1() {

    const [dadosTickets, setDadosTickets] = useEffect([])

    const funcGet = async() => {
         try {
            

         } catch (error) {
            
         }
    }

    return (
        <div style={{ display: 'flex', minHeight: '99vh', width: '100%' }}>
            <Aside />
            <div style={telaN1Styles.flexgrid}>
                <div style={{ flex: 1 }}>
                    <Header />

                    <div style={telaN1Styles.container}>
                        <div style={telaN1Styles.banner}>

                            <div style={telaN1Styles.imgTex}>
                            <img 
                            src={icone}
                            width={100}
                            height={100}
                            alt="Icone planilha" 
                            style={telaN1Styles.icone}
                            />

                            <div style={telaN1Styles.caixaText}>
                               <h2 style={telaN1Styles.saudacao}>
                                Bom dia, Lorenzo!
                            </h2>
                            <p style={telaN1Styles.text}>
                                Você tem 2 tickets em adoção
                            </p>
 
                            </div>
                            </div>

                            <div style={telaN1Styles.section}>
                               <div style={telaN1Styles.dados}>
                                   
                                    <section style={telaN1Styles.dadosTt}>
                                     <h3 style={telaN1Styles.numberTt}>12</h3>
                                    <p >Total de Tickets</p>
                                    </section>

                                    <section style={telaN1Styles.dadosEa}>
                                    <h3 style={telaN1Styles.numberEa}>2</h3>
                                    <p>Em adoção</p>
                                    </section>

                                    <section style={telaN1Styles.dadosC}>
                                    <h3 style={telaN1Styles.numberC}>2</h3>
                                    <p>Concluídos</p>
                                    </section>

                                    <section style={telaN1Styles.dadosP}>
                                    <h3 style={telaN1Styles.numberP}>2</h3>
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



                    <table>
                        <thead>
                            <tr>
                                <th>N do Ticket</th>
                                <th>Descrição</th>
                                <th>Prioridade</th>
                                <th>SLA</th>
                                <th>Tempo Excedido</th>
                                <th>Status</th>
                            </tr>
                            <tbody>
                                {dadosTickets.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.descricao}</td>
                                        <td>{item.prioridade}</td>
                                        <td>{item.sla}</td>
                                        <td>{item.tempoExcedido}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </thead>
                    </table>



                    </div>
                </div>
            </div>
        </div>
    );
}