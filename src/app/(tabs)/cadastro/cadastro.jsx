import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import cadastroStyles from './cadastroStyles';
import { UsuarioContext } from '../../../context/UsuarioContext';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUsuario } = useContext(UsuarioContext);
  const router = useRouter();

  

  return (
    <div style={cadastroStyles.container}>
      <form style={cadastroStyles.inputContainer} onSubmit={funcCadastro}>
        <div style={cadastroStyles.inputDuo}>
          <label htmlFor="nome" style={cadastroStyles.inputText}>
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            className="cadastro-input"
            placeholder="Digite seu nome"
            style={cadastroStyles.input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div style={cadastroStyles.inputDuo}>
          <label htmlFor="telefone" style={cadastroStyles.inputText}>
            Número de Telefone
          </label>
          <input
            id="telefone"
            type="tel"
            className="cadastro-input"
            placeholder="Digite seu número"
            style={cadastroStyles.input}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div style={cadastroStyles.inputDuo}>
          <label htmlFor="email" style={cadastroStyles.inputText}>
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="cadastro-input"
            placeholder="Digite seu e-mail"
            style={cadastroStyles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={cadastroStyles.inputDuo}>
          <label htmlFor="senha" style={cadastroStyles.inputText}>
            Senha
          </label>
          <input
            id="senha"
            type="password"
            className="cadastro-input"
            placeholder="Digite sua senha"
            style={cadastroStyles.input}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit" style={cadastroStyles.botao}>
          Criar Conta
        </button>

        <p style={cadastroStyles.rodape}>
          Já tem uma conta?{' '}
          <Link to="/login" style={cadastroStyles.link}>
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}