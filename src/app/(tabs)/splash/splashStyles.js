import { StyleSheet } from 'react-native';

import { StyleSheet } from 'react-native';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04224A',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Formas decorativas do fundo
  blobTopLeft: {
    position: 'absolute',
    // top: -120,
    // left: -140,
    // width: 380,
    // height: 340,
    backgroundColor: '#0F2F63',
    borderBottomRightRadius: 220,
    borderTopRightRadius: 120,
    borderBottomLeftRadius: 180,
  },
  blobTopRight: {
    position: 'absolute',
    // top: -140,
    // right: -160,
    // width: 400,
    // height: 360,
    backgroundColor: '#021833',
    borderBottomLeftRadius: 260,
    borderBottomRightRadius: 80,
  },
  blobBottomRight: {
    position: 'absolute',
    // bottom: -140,
    // right: -120,
    // width: 340,
    // height: 320,
    backgroundColor: '#0D2B5C',
    borderTopLeftRadius: 240,
    borderTopRightRadius: 100,
  },

  // Conteúdo
  content: {
    width: '100%',
    alignItems: 'center',
    gap: 60,
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'center',
    gap: 24,
  },
  linkCriarConta: {
    alignItems: 'center',
  },
  textCriarConta: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default splashStyles;