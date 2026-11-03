import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaN1Styles } from './telaN1Styles';
import icone from "../assets/clipboard.svg"
import { Ticket } from "lucide-react";

export default function TelaN1() {
    return (
        <div style={{ display: 'flex', minHeight: '99vh', width: '100%' }}>
            <Aside />
            <div style={telaN1Styles.flexgrid}>
                <div style={{ flex: 1 }}>
                    <Header />

                    <div style={telaN1Styles.container}>
                        <div style={telaN1Styles.banner}>
                            <img 
                            src={icone}
                            width={90}
                            height={150}
                            alt="Icone planilha" />

                            <h2 style={telaN1Styles.saudacao}>
                                Bom dia, Lorenzo!
                            </h2>
                            <p style={telaN1Styles.text}>
                                Você tem 2 tickets em adoção
                            </p>

                            <div style={telaN1Styles.section}>
                               <div style={telaN1Styles.dados}>
                                   
                                    <section style={telaN1Styles.dadosTt}>
                                     <h3>12</h3>
                                    <p>Total de Tickets</p>
                                    </section>

                                    <section style={telaN1Styles.dadosEa}>
                                    <h3>2</h3>
                                    <p>Em adoção</p>
                                    </section>

                                    <section style={telaN1Styles.dadosC}>
                                    <h3>2</h3>
                                    <p>Concluídos</p>
                                    </section>

                                    <section style={telaN1Styles.dadosP}>
                                    <h3>2</h3>
                                    <p>Pendentes</p>
                                    </section>

                                </div> 
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </div>
    );
}