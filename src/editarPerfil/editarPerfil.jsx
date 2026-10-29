import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';
import { editarPerfilStyles } from './editarPerfilStyles';

export default function EditarPerfil() {
    return (
        <div style={editarPerfilStyles.container}>

            <div style={editarPerfilStyles.banner}>
                <img
                    src={logo}
                    width={400}
                    height={500}
                    alt="Logo Nyvie"
                    style={editarPerfilStyles.logo}
                />
            </div>

            <div style={editarPerfilStyles.conteudo}>

                <div style={editarPerfilStyles.perfil}>
                    <h3 style={editarPerfilStyles.nome}>
                        Lorenzo Mangile
                    </h3>

                    <p style={editarPerfilStyles.email}>
                        l.mangile@gmail.com
                    </p>

                    <div style={editarPerfilStyles.campoContainer}>
                        <label htmlFor="telefone">
                            Telefone:
                        </label>
                        <input
                            id="telefone"
                            type="tel"
                            placeholder="Digite o seu número"
                            style={editarPerfilStyles.input}
                            autoComplete="tel"
                        />
                    </div>

                    <div style={editarPerfilStyles.campoContainer}>
                        <label htmlFor="email">
                            E-mail:
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite o seu e-mail"
                            style={editarPerfilStyles.input}
                            autoComplete="email"
                        />
                    </div>

                    <div style={editarPerfilStyles.campoContainer}>
                        <label htmlFor="departamento">
                            Departamento:
                        </label>
                        <input
                            id="departamento"
                            type="text"
                            placeholder="Digite o seu departamento"
                            style={editarPerfilStyles.input}
                        />
                    </div>
                </div>

                <div style={editarPerfilStyles.board}>

                    <h2 style={editarPerfilStyles.titulo}>
                        Editar Perfil
                    </h2>

                    <p style={editarPerfilStyles.subtitulo}>
                        Atualize suas informações para deixar seu perfil
                        ainda mais completo.
                    </p>
                    <div style={editarPerfilStyles.info}>

                        <div>
                            <h3 style={editarPerfilStyles.subtitulofoto}>
                                Foto Perfil
                            </h3>

                            <img
                                src={profile}
                                alt="Foto do perfil"
                                style={editarPerfilStyles.profile}
                            />
                        </div>

                        <div>
                            <h3 style={editarPerfilStyles.subtituloinfo}>
                                Informações pessoais
                            </h3>

                            <div style={editarPerfilStyles.formulario}>

                                <div style={editarPerfilStyles.campoContainer}>
                                    <label htmlFor="nome">
                                        Nome:
                                    </label>
                                    <input
                                        id="nome"
                                        type="text"
                                        placeholder="Digite seu nome"
                                        style={editarPerfilStyles.input}
                                        autoComplete="name"
                                    />
                                </div>

                                <div style={editarPerfilStyles.campoContainer}>
                                    <label htmlFor="emailPerfil">
                                        E-mail:
                                    </label>
                                    <input
                                        id="emailPerfil"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        style={editarPerfilStyles.input}
                                        autoComplete="email"
                                    />
                                </div>

                                <div style={editarPerfilStyles.campoContainer}>
                                    <label htmlFor="telefonePerfil">
                                        Telefone:
                                    </label>
                                    <input
                                        id="telefonePerfil"
                                        type="tel"
                                        placeholder="Digite seu número"
                                        style={editarPerfilStyles.input}
                                        autoComplete="tel"
                                    />
                                </div>

                                <div style={editarPerfilStyles.campoContainer}>
                                    <label htmlFor="departamentoPerfil">
                                        Departamento:
                                    </label>
                                    <input
                                        id="departamentoPerfil"
                                        type="text"
                                        placeholder="Digite seu departamento"
                                        style={editarPerfilStyles.input}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={editarPerfilStyles.botoes}>
                        <button type="button">
                            Cancelar
                        </button>

                        <button type="button">
                            Salvar
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}