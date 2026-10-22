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
    <ImageBackground
      source={require('../../../../assets/fundoCadastro.jpg')}
      resizeMode="cover"
      style={cadastroStyles.container}
    >
      <View style={cadastroStyles.inputContainer}>
        <View style={cadastroStyles.inputDuo}>
          <Text style={cadastroStyles.inputText}>Nome Completo</Text>
          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#9FAEB8"
            style={cadastroStyles.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={cadastroStyles.inputDuo}>
          <Text style={cadastroStyles.inputText}>Número de Telefone</Text>
          <TextInput
            placeholder="Digite seu número"
            placeholderTextColor="#9FAEB8"
            style={cadastroStyles.input}
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={cadastroStyles.inputDuo}>
          <Text style={cadastroStyles.inputText}>E-mail:</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            placeholderTextColor="#9FAEB8"
            style={cadastroStyles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={cadastroStyles.inputDuo}>
          <Text style={cadastroStyles.inputText}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#9FAEB8"
            style={cadastroStyles.input}
            secureTextEntry
            autoCapitalize="none"
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={cadastroStyles.botao} onPress={funcCadastro}>
          <Text style={cadastroStyles.botaoTexto}>Criar Conta</Text>
        </TouchableOpacity>

        <View style={cadastroStyles.rodape}>
          <Text style={cadastroStyles.text}>
            Já tem uma conta?{' '}
            <Link href="/login" style={cadastroStyles.link}>
              Entrar
            </Link>
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}
