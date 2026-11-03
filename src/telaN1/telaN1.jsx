import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaN1Styles } from './telaN1Styles';
import icone from "../assets/clipboard.svg"

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
                            width={100}
                            height={200}
                            alt="Icone planilha" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}