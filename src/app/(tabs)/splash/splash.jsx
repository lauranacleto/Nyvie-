import { StatusBar, Text, View, TouchableOpacity } from 'react-native';

import splashStyles from './splashStyles';


export default function Splash({ navigation }) {
  return (
    <View style={splashStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#04224A" />

      {/* As bola de decoração do splash la */}
      <View style={splashStyles.blobTopLeft} />
      <View style={splashStyles.blobTopRight} />
      <View style={splashStyles.blobBottomRight} />

      <View style={splashStyles.content}>
        <LogoNyvie width={300} height={120} />

        <View style={splashStyles.buttonsContainer}>
          <Button
            onPress={() => navigation.replace('Login')}
            text="Entrar"
            backgroundColor="#1D8350"
            textColor="#fff"
          />

          <TouchableOpacity
            style={splashStyles.linkCriarConta}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={splashStyles.textCriarConta}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}