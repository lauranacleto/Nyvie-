import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/clipboard.svg"
import { Ticket } from "lucide-react";

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

                       

                    </div>
                </div>
            </div>
        </div>
    );
}