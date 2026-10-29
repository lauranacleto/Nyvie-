
import wifi from "../assets/wifi - reco.svg";
import { styles } from "./historicoRecorrentesStyleSheet.js";
import Header from "../components/header/header.jsx";
import Aside from "../components/aside/aside.jsx";

const HistoricoRecorrentes = () => {
    return (
        <div style={styles.container}>
            <Aside /> 
            <Header />

            {/* Conteúdo principal */}
            <main style={styles.conteudo}>
                <h2 style={styles.titulo}>← Recorrentes</h2>

                {/* Categoria */}
                <section style={styles.categoria}>
                    <div style={styles.iconeWifi}>
                        <img src={wifi} alt="Ícone de Wi-Fi" style={{ width: 44, height: 44 }} />
                    </div>
                    <h2 style={styles.nomeCategoria}>Internet e conexão</h2>
                </section>

                {/* Lista de tickets */}
                <section style={styles.lista}>
                    <article style={styles.ticket}>
                        <div style={styles.infoTicket}>
                            <h3 style={styles.idTicket}>#00127</h3>
                            <p style={styles.descricao}>Problema na Rede de Wi-Fi</p>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Prioridade:</span>
                            <span style={{ ...styles.etiqueta, ...styles.prioridadeAlta }}>P3 Alto</span>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Status:</span>
                            <span style={{ ...styles.etiqueta, ...styles.statusAdocao }}>Em adoção</span>
                        </div>
                    </article>

                    <article style={styles.ticket}>
                        <div style={styles.infoTicket}>
                            <h3 style={styles.idTicket}>#00129</h3>
                            <p style={styles.descricao}>Problema na Rede de Wi-Fi</p>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Prioridade:</span>
                            <span style={{ ...styles.etiqueta, ...styles.prioridadeMedia }}>P2 Médio</span>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Status:</span>
                            <span style={{ ...styles.etiqueta, ...styles.statusPendente }}>Pendente</span>
                        </div>
                    </article>

                    <article style={styles.ticket}>
                        <div style={styles.infoTicket}>
                            <h3 style={styles.idTicket}>#00132</h3>
                            <p style={styles.descricao}>Problema na Rede de Wi-Fi</p>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Prioridade:</span>
                            <span style={{ ...styles.etiqueta, ...styles.prioridadeBaixa }}>P1 Baixo</span>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Status:</span>
                            <span style={{ ...styles.etiqueta, ...styles.statusConcluido }}>Concluído</span>
                        </div>
                    </article>

                    <article style={styles.ticket}>
                        <div style={styles.infoTicket}>
                            <h3 style={styles.idTicket}>#00133</h3>
                            <p style={styles.descricao}>Problema na Rede de Wi-Fi</p>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Prioridade:</span>
                            <span style={{ ...styles.etiqueta, ...styles.prioridadeAlta }}>P3 Alto</span>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Status:</span>
                            <span style={{ ...styles.etiqueta, ...styles.statusConcluido }}>Concluído</span>
                        </div>
                    </article>

                    <article style={styles.ticket}>
                        <div style={styles.infoTicket}>
                            <h3 style={styles.idTicket}>#00137</h3>
                            <p style={styles.descricao}>Problema na Rede de Wi-Fi</p>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Prioridade:</span>
                            <span style={{ ...styles.etiqueta, ...styles.prioridadeBaixa }}>P1 Baixo</span>
                        </div>
                        <div style={styles.colunaTicket}>
                            <span style={styles.rotulo}>Status:</span>
                            <span style={{ ...styles.etiqueta, ...styles.statusAdocao }}>Em adoção</span>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default HistoricoRecorrentes;
